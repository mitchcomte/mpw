import { categories, oregonServiceCities } from "../../lib/site";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import { decodeDisplayText } from "../../lib/text";
import Link from "next/link";
import VendorTierBadge from "../../components/VendorTierBadge";
import CategorySwitcher from "../../components/CategorySwitcher";
const weight:Record<string,number>={premium:4,professional:3,basic:2,free:1};
export const metadata = {
  title: 'Portland Wedding Vendors & Venues',
  description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.',
  alternates: { canonical: '/vendors' },
  openGraph: { title: 'Portland Wedding Vendors & Venues', description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.', url: '/vendors', images: [{ url: '/brand/mpw-social-share.png', width: 1200, height: 630, alt: 'My Portland Wedding — Plan Local. Love Always.' }] }
};

export default async function Vendors({searchParams}:{searchParams:Promise<{q?:string,area?:string,category?:string}>}){
 const q=await searchParams; const supabase=await createSupabaseServerClient();
 let query=supabase.from("vendor_profiles").select("id,slug,business_name,primary_category,secondary_categories,city,state,service_cities,plan,rating,review_count,description,founding_vendor").eq("market_slug","portland").eq("status","active").limit(250);
 if(q.category) query=query.or(`primary_category.eq.${q.category},secondary_categories.cs.{${q.category}}`);
 if(q.q){const safe=q.q.replace(/[,()]/g,""); query=query.or(`business_name.ilike.%${safe}%,description.ilike.%${safe}%`)}
 const {data}=await query;
 let vendors=(data||[]) as any[];
 if(q.area){const wanted=q.area.toLowerCase(); vendors=vendors.filter(v=>String(v.city||"").toLowerCase()===wanted||(v.service_cities||[]).some((c:string)=>c.toLowerCase()===wanted));}
 vendors=vendors.sort((a:any,b:any)=>(weight[b.plan]||0)-(weight[a.plan]||0)||(b.rating||0)-(a.rating||0));
 return <main><section className="pagehero"><div className="container"><span className="eyebrow">Portland + nearby Oregon</span><h1>Find Wedding Vendors</h1><p className="meta">Search wedding professionals serving Portland and major Oregon communities within roughly 120 miles.</p><form className="search bubblySearch vendorSearch" action="/vendors"><div className="searchField"><span>⌕</span><input name="q" defaultValue={q.q||""} placeholder="Vendor name or service"/></div><div className="searchField"><span>⌖</span><select name="area" defaultValue={q.area||""}><option value="">All nearby Oregon cities</option>{oregonServiceCities.map(city=><option key={city} value={city}>{city}, OR</option>)}</select></div><div className="searchField"><select name="category" defaultValue={q.category||""}><option value="">All categories</option>{categories.map(([slug,name])=><option key={slug} value={slug}>{name}</option>)}</select></div><button className="btn pinkButton">Search →</button></form></div></section><section className="section"><div className="container"><div className="categoryToolbar"><CategorySwitcher currentCategory={q.category||""}/></div>{!q.q&&!q.area&&!q.category?<div className="grid cats">{categories.map(([s,n])=><Link className="cat" href={`/vendors/${s}`} key={s}>{n}</Link>)}</div>:<div>{vendors.length?<><div className="searchSummary"><strong>{vendors.length}</strong> vendor{vendors.length===1?"":"s"}{q.area?` serving ${q.area}, OR`:""}</div><div className="grid vendors">{vendors.map((v:any)=><Link href={`/vendor/${v.slug}`} className="card" key={v.id}><div className="photo"/><div className="body"><VendorTierBadge plan={v.plan} foundingVendor={v.founding_vendor}/><h3>{decodeDisplayText(v.business_name)}</h3><p className="meta">{decodeDisplayText(v.city||"Portland")}, {v.state||"OR"}{v.rating?` · ★ ${v.rating}`:""}</p>{q.area&&String(v.city||"").toLowerCase()!==q.area.toLowerCase()&&<p className="serviceMatch">Serves {q.area} ♡</p>}</div></Link>)}</div></>:<div className="emptyState"><h3>No vendors matched that search yet.</h3><p className="meta">Try another city or category. Vendors can add the Oregon communities they serve from their dashboard.</p></div>}</div>}</div></section></main>}
