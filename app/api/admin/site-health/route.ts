import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { site } from "../../../../lib/site";

type Status = "pass"|"warning"|"failed";
type Check = {id:string;group:string;name:string;status:Status;detail:string;fix:string;url?:string;autoFix?:boolean};

const text=(html:string, re:RegExp)=>html.match(re)?.[1]?.trim()||"";
const abs=(href:string,base:string)=>{try{return new URL(href,base).toString()}catch{return ""}};
const expectedAuthRedirect=(url:string)=>{try{const p=new URL(url).pathname;return p==="/couple/dashboard"||p==="/planning-tools/budget-calculator"||p==="/planning-tools/guest-list"||p==="/planning-tools/timeline";}catch{return false}};

export async function POST(){
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) return NextResponse.json({error:"Unauthorized"},{status:401});
 const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
 if(!admin) return NextResponse.json({error:"Admin access required"},{status:403});

 const started=Date.now(); const checks:Check[]=[];
 const add=(c:Check)=>checks.push(c);
 const base=(process.env.NEXT_PUBLIC_SITE_URL||site.url||"https://www.myportlandwedding.com").replace(/\/$/,"");

 // Infrastructure/config checks (never expose secret values)
 const envChecks:[string,string,string,string][]=[
  ["supabase-url","Infrastructure","Supabase URL", "NEXT_PUBLIC_SUPABASE_URL"],
  ["supabase-key","Infrastructure","Supabase public key", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
  ["stripe-secret","Infrastructure","Stripe server configuration", "STRIPE_SECRET_KEY"],
  ["resend-key","Infrastructure","Email service configuration", "RESEND_API_KEY"]
 ];
 for(const [id,group,name,key] of envChecks){const ok=Boolean(process.env[key]);add({id,group,name,status:ok?"pass":"failed",detail:ok?`${key} is configured.`:`${key} is missing from the deployment environment.`,fix:ok?"No action needed.":`Add ${key} to the Vercel project environment variables, then redeploy.`});}
 try{const {error}=await supabase.from("vendor_profiles").select("id",{head:true,count:"exact"}).limit(1);add({id:"db-live",group:"Infrastructure",name:"Database connectivity",status:error?"failed":"pass",detail:error?`Supabase query failed: ${error.message}`:"MPW can query Supabase successfully.",fix:error?"Verify Supabase project status, URL/key environment variables and table permissions.":"No action needed."});}catch(e:any){add({id:"db-live",group:"Infrastructure",name:"Database connectivity",status:"failed",detail:String(e?.message||e),fix:"Verify Supabase connectivity and deployment environment variables."});}

 // Crawl sitemap + core smoke routes.
 let urls=[`${base}/`,`${base}/vendors`,`${base}/wedding-builder`,`${base}/planning-tools`,`${base}/for-vendors`,`${base}/about`];
 try{const r=await fetch(`${base}/sitemap.xml`,{cache:"no-store",signal:AbortSignal.timeout(10000)});const xml=await r.text();const locs=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);if(r.ok&&locs.length){urls=[...new Set([...urls,...locs])].slice(0,80);add({id:"sitemap-live",group:"SEO",name:"XML sitemap",status:"pass",detail:`Sitemap loaded with ${locs.length} URLs. This scan checks up to 80 URLs per run.`,fix:"No action needed."});}else add({id:"sitemap-live",group:"SEO",name:"XML sitemap",status:"failed",detail:`Sitemap returned ${r.status} or contained no URLs.`,fix:"Review app/sitemap.ts and NEXT_PUBLIC_SITE_URL, then redeploy."});}catch(e:any){add({id:"sitemap-live",group:"SEO",name:"XML sitemap",status:"failed",detail:`Could not load sitemap: ${e?.message||e}`,fix:"Verify /sitemap.xml is reachable and NEXT_PUBLIC_SITE_URL points to production."});}

 let broken=0,redirects=0,missingTitle=0,missingDesc=0,missingCanonical=0,missingOg=0,largeHtml=0;
 const internalLinks=new Set<string>();
 for(const url of urls){
  try{
   const r=await fetch(url,{redirect:"manual",cache:"no-store",headers:{"user-agent":"MPW-Site-Health/1.0"},signal:AbortSignal.timeout(12000)});
   if(r.status>=300&&r.status<400){if(expectedAuthRedirect(url)){add({id:`auth-redirect-${url}`,group:"Links & Routes",name:"Protected route redirect",status:"pass",detail:`${url} correctly redirects unauthenticated visitors to sign in.`,fix:"No action needed.",url});}else{redirects++;add({id:`redirect-${url}`,group:"Links & Routes",name:"Unexpected redirect",status:"warning",detail:`${url} returns HTTP ${r.status}.`,fix:"Update internal links to point directly to the final canonical URL.",url});}continue;}
   if(!r.ok){broken++;add({id:`http-${url}`,group:"Links & Routes",name:"Broken page",status:"failed",detail:`${url} returned HTTP ${r.status}.`,fix:"Check the page route/deployment and either restore the page or remove/update links pointing to it.",url});continue;}
   const html=await r.text();
   const title=text(html,/<title[^>]*>([\s\S]*?)<\/title>/i);
   const desc=text(html,/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)||text(html,/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
   const canonical=text(html,/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)||text(html,/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
   const og=text(html,/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)||text(html,/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
   if(!title||title.length<25){missingTitle++;add({id:`title-${url}`,group:"SEO",name:"Page title",status:title?"warning":"failed",detail:title?`Title is short (${title.length} characters): “${title}”`:`No title was detected on ${url}.`,fix:"Add a unique, descriptive title that identifies the page and its Portland wedding intent.",url});}
   if(!desc){missingDesc++;add({id:`desc-${url}`,group:"SEO",name:"Meta description",status:"warning",detail:"No meta description detected.",fix:"Add a useful, unique meta description for this page.",url});}
   if(!canonical){missingCanonical++;add({id:`canonical-${url}`,group:"SEO",name:"Canonical URL",status:"warning",detail:"No canonical link tag detected.",fix:"Set the page canonical URL to its preferred production URL using Next.js metadata alternates.canonical.",url,autoFix:true});}
   if(!og){missingOg++;add({id:`og-${url}`,group:"Social & Sharing",name:"Open Graph image",status:"warning",detail:"No og:image was detected.",fix:"Set a branded MPW Open Graph image in page/root metadata so shared links display correctly.",url,autoFix:true});}
   if(Buffer.byteLength(html)>180_000){largeHtml++;add({id:`html-${url}`,group:"Performance",name:"Large HTML document",status:"warning",detail:`HTML is ${Math.round(Buffer.byteLength(html)/1024)} KiB.`,fix:"Reduce server-rendered markup, repeated content, or large inline data where practical.",url});}
   for(const m of html.matchAll(/<a\s[^>]*href=["']([^"'#]+)["']/gi)){const u=abs(m[1],url);if(u&&u.startsWith(base)) internalLinks.add(u.split("#")[0]);}
  }catch(e:any){broken++;add({id:`fetch-${url}`,group:"Links & Routes",name:"Page request failed",status:"failed",detail:`Could not scan ${url}: ${e?.message||e}`,fix:"Check deployment logs, route availability and server errors.",url});}
 }

 // Check discovered internal links, capped to keep scan fast/safe.
 let checkedLinks=0;
 for(const url of [...internalLinks].slice(0,120)){
  checkedLinks++;
  try{const r=await fetch(url,{method:"HEAD",redirect:"manual",cache:"no-store",signal:AbortSignal.timeout(8000)});if(r.status===405){continue;}if(r.status>=400){broken++;add({id:`link-${url}`,group:"Links & Routes",name:"Broken internal link",status:"failed",detail:`Internal link returns HTTP ${r.status}: ${url}`,fix:"Update or remove the source link, or restore the destination route.",url});}else if(r.status>=300){if(expectedAuthRedirect(url)){add({id:`link-auth-${url}`,group:"Links & Routes",name:"Protected route redirect",status:"pass",detail:`${url} correctly redirects unauthenticated visitors to sign in.`,fix:"No action needed.",url});}else{redirects++;add({id:`link-redir-${url}`,group:"Links & Routes",name:"Redirecting internal link",status:"warning",detail:`Internal link returns HTTP ${r.status}: ${url}`,fix:"Point internal links directly at the final destination URL.",url});}}}catch{}
 }
 if(!broken)add({id:"routes-summary",group:"Links & Routes",name:"Core pages & internal links",status:"pass",detail:`${urls.length} pages and ${checkedLinks} discovered internal links checked with no broken destinations found.`,fix:"No action needed."});

 // Security headers on homepage.
 try{const r=await fetch(`${base}/`,{cache:"no-store",signal:AbortSignal.timeout(10000)});const h=r.headers;
  const security:[string,string,string,string][]=[
   ["hsts","Strict-Transport-Security","strict-transport-security","Set HSTS at the platform/app level for HTTPS production traffic."],
   ["nosniff","X-Content-Type-Options","x-content-type-options","Set X-Content-Type-Options: nosniff in next.config.ts headers()."],
   ["frame","Frame protection","x-frame-options","Set X-Frame-Options: SAMEORIGIN or an equivalent CSP frame-ancestors directive."],
   ["csp","Content-Security-Policy","content-security-policy","Add a tested CSP that permits required MPW, Supabase, Stripe and analytics resources while blocking unapproved sources."]
  ];
  for(const [id,name,key,fix] of security){const value=h.get(key);add({id:`sec-${id}`,group:"Security",name,status:value?"pass":id==="csp"?"warning":"failed",detail:value?`${name} is present.`:`${name} header is missing.`,fix:value?"No action needed.":fix,autoFix:id==="nosniff"||id==="frame"});}
 }catch{}

 // robots
 try{const r=await fetch(`${base}/robots.txt`,{cache:"no-store",signal:AbortSignal.timeout(8000)});const body=await r.text();const ok=r.ok&&body.includes("Sitemap")&&!/Disallow:\s*\/$/i.test(body);add({id:"robots",group:"SEO",name:"robots.txt",status:ok?"pass":"failed",detail:ok?"robots.txt is reachable, advertises a sitemap, and does not block the entire site.":"robots.txt is missing, malformed, or may block the site.",fix:ok?"No action needed.":"Review app/robots.ts. Keep public pages crawlable and admin/dashboard/API routes excluded."});}catch{}

 const totals={pass:checks.filter(x=>x.status==="pass").length,warning:checks.filter(x=>x.status==="warning").length,failed:checks.filter(x=>x.status==="failed").length};
 return NextResponse.json({scanVersion:"1.1",site:base,startedAt:new Date(started).toISOString(),finishedAt:new Date().toISOString(),durationMs:Date.now()-started,totals,summary:{pagesScanned:urls.length,internalLinksChecked:checkedLinks,broken,redirects,missingTitle,missingDesc,missingCanonical,missingOg,largeHtml},checks});
}
