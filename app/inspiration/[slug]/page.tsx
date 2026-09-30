import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { inspirationArticles } from "../../../lib/content";
import { createAdminClient } from "../../../lib/supabase/admin";
import { decodeDisplayText } from "../../../lib/text";
import type { Metadata } from "next";

export function generateStaticParams(){return inspirationArticles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=inspirationArticles.find(x=>x.slug===slug);if(!a)return {};const path=`/inspiration/${a.slug}`;return {title:a.title,description:a.dek,alternates:{canonical:path},openGraph:{title:a.title,description:a.dek,url:path,type:"article",images:[{url:"/brand/mpw-social-share.png",width:1200,height:630,alt:`${a.title} — My Portland Wedding`}]},twitter:{card:"summary_large_image",title:a.title,description:a.dek,images:["/brand/mpw-social-share.png"]}}}

function vendorImage(v:any,feature:any){
 if(feature?.image_url)return feature.image_url;
 if(v?.profile_image_url)return v.profile_image_url;
 return "/brand/mpw-master-logo-no-flare.png";
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=inspirationArticles.find(x=>x.slug===slug);if(!a)notFound();
 const admin=createAdminClient();
 const {data:features}=await admin.from("inspiration_article_features").select("id,vendor_id,eyebrow,headline,blurb,image_url,sort_order").eq("article_slug",a.slug).eq("active",true).order("sort_order").limit(3);
 const vendorIds=(features||[]).map((x:any)=>x.vendor_id);
 const {data:vendors}=vendorIds.length?await admin.from("vendor_profiles").select("id,business_name,slug,description,city,state,profile_image_url,primary_category,plan,founding_vendor").in("id",vendorIds).eq("status","active"):{data:[] as any[]};
 const featured=(features||[]).map((feature:any)=>({feature,vendor:(vendors||[]).find((v:any)=>v.id===feature.vendor_id)})).filter((x:any)=>x.vendor);
 const articleSchema={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.dek,author:{"@type":"Organization",name:"My Portland Wedding"},publisher:{"@type":"Organization",name:"My Portland Wedding"},mainEntityOfPage:`https://www.myportlandwedding.com/inspiration/${a.slug}`};
 const faqSchema=a.faq?{"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}:null;
 return <main className="magazineArticle"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />{faqSchema&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />}
 <section className="articleHero magazineHero"><div className="narrow"><span className="eyebrow">{a.category} · The Portland Wedding Edit</span><h1>{a.title}</h1><p className="articleDek">{a.dek}</p><div className="articleMeta topMeta"><span>{a.readTime}</span><span>My Portland Wedding Editorial</span></div></div></section>
 <article className="articleBody magazineBody narrow">
  <div className="articleLead"><span className="dropCap">P</span><p>Planning in Portland is wonderfully specific: weather, neighborhoods, guest logistics and a deep bench of local wedding professionals all shape the day. This guide is designed to be saved, shared and actually used—not skimmed and forgotten.</p></div>
  <div className="inspirationBuilderCard"><span>♡</span><div><strong>Build this around your wedding.</strong><p>Give Wedding Builder your budget, vibe and priorities for a personalized local vendor roster and category-by-category plan.</p></div><Link className="btn light" href={`/wedding-builder?style=${encodeURIComponent(a.category==="Local Ideas"?"Romantic & Garden":a.category==="Venues"?"Classic & Elegant":"Romantic & Garden")}`}>Try Wedding Builder — Free ✨</Link></div>
  {a.sections.map((s,index)=><section className="magazineSection" key={s.heading}><div className="sectionNumber">{String(index+1).padStart(2,"0")}</div><div><h2>{s.heading}</h2>{s.paragraphs?.map((p,i)=><p className={i===0?"sectionLead":""} key={p}>{p}</p>)}{s.bullets&&<ul className="editorialList">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</div></section>)}
  {featured.length>0&&<section className="featuredVendorEditorial"><div className="featuredVendorHeading"><span className="eyebrow">Local expertise, beautifully done</span><h2>Featured Portland wedding pros</h2><p>Meet local professionals connected to this guide. Explore their work, approach and MPW profile as you build your vendor shortlist.</p></div><div className="featuredVendorGrid">{featured.map(({feature,vendor}:any)=><Link href={`/vendor/${vendor.slug}`} className="featuredVendorStory" key={feature.id}><div className="featuredVendorImage"><Image src={vendorImage(vendor,feature)} alt={`${decodeDisplayText(vendor.business_name)} — Portland wedding vendor`} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><div className="featuredVendorCopy"><span className="eyebrow">{feature.eyebrow||"Featured Portland Wedding Pro"}</span><h3>{feature.headline||decodeDisplayText(vendor.business_name)}</h3><p>{feature.blurb||decodeDisplayText(vendor.description||`${vendor.city||"Portland"} wedding professional featured by My Portland Wedding.`)}</p><strong>Explore {decodeDisplayText(vendor.business_name)} →</strong></div></Link>)}</div><p className="featuredDisclosure">Featured vendors are identified as such. MPW editorial guidance remains separate from paid placement.</p></section>}
  {a.checklist&&<aside className="articleChecklist magazineChecklist"><span className="eyebrow">The tear-out page</span><h2>Save this planning checklist</h2><ul>{a.checklist.map(i=><li key={i}>{i}</li>)}</ul></aside>}
  {a.faq&&<section className="articleFaq magazineFaq"><span className="eyebrow">Ask MPW</span><h2>Portland wedding planning FAQ</h2>{a.faq.map(f=><div key={f.question} className="faqItem"><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section>}
  <div className="articleFooter"><Link className="btn light" href="/inspiration">← More Inspiration</Link><Link className="btn primary" href="/wedding-builder">Use this in Wedding Builder →</Link></div>
 </article></main>
}