import { categories, oregonServiceCities } from "../../lib/site";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import { decodeDisplayText } from "../../lib/text";
import Link from "next/link";
export const metadata = {
  title: 'Portland Wedding Vendors & Venues',
  description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.',
  alternates: { canonical: '/vendors' },
  openGraph: { title: 'Portland Wedding Vendors & Venues', description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.', url: '/vendors', images: [{ url: '/brand/mpw-social-share.png', width: 1200, height: 630, alt: 'My Portland Wedding — Plan Local. Love Always.' }] }
};
type Q={q?:string;area?:string;category?:string};
export default async function Vendors({searchParams}:{searchParams:Promise<Q>}){
 const q=await searchParams;
 const supabase=await createSupabaseServerClient();
 let query=supabase.from("vendor_profiles").select("slug,business_name,primary_category,city,state,description").eq("market_slug","portland").eq("status","active").limit(100);
 const {data}=await query;
 let vendors=(data||[]) as any[];
 if(q.q){const n=q.q.toLowerCase();vendors=vendors.filter(v=>`${v.business_name||""} ${v.description||""}`.toLowerCase().includes(n));}
 if(q.category)vendors=vendors.filter(v=>v.primary_category===q.category);
 if(q.area)vendors=vendors.filter(v=>String(v.city||"").toLowerCase()===q.area!.toLowerCase());
 const searching=Boolean(q.q||q.category||q.area);
 return <main>
  <section className="pagehero"><div className="container"><span className="eyebrow">Portland + nearby Oregon</span><h1>Find Wedding Vendors</h1><p className="meta">Search local wedding professionals, or browse by category.</p></div></section>
  <section className="section"><div className="container">
   <form className="vendorDirectorySearch" action="/vendors" method="get">
    <input name="q" defaultValue={q.q||""} placeholder="Vendor name or service" aria-label="Vendor name or service"/>
    <select name="area" defaultValue={q.area||""} aria-label="Oregon city"><option value="">Nearby Oregon city</option>{oregonServiceCities.map(city=><option key={city} value={city}>{city}</option>)}</select>
    <select name="category" defaultValue={q.category||""} aria-label="Vendor category"><option value="">All categories</option>{categories.map(([slug,label])=><option key={slug} value={slug}>{label}</option>)}</select>
    <button className="btn primary" type="submit">Search</button>
   </form>
   {!searching&&<div className="grid cats">{categories.map(([s,n])=><Link className="cat" href={`/vendors/${s}`} key={s}>{n}</Link>)}</div>}
   {searching&&<><div className="vendorResultsHead"><p><strong>{vendors.length}</strong> vendors found</p><Link href="/vendors">Clear Search</Link></div><div className="vendorMarketplaceGrid">{vendors.map(v=><Link className="marketVendorCard" href={`/vendor/${v.slug}`} key={v.slug}><div className="marketVendorBody"><h3>{decodeDisplayText(v.business_name)}</h3><p className="marketVendorMeta">{decodeDisplayText(v.city||"Portland")}, {v.state||"OR"} · {categories.find(([s])=>s===v.primary_category)?.[1]||v.primary_category}</p><p className="marketVendorBio">{decodeDisplayText(v.description||"View profile, services and contact information.")}</p><span className="vendorCardCta">View Profile →</span></div></Link>)}</div></>}
  </div></section>
 </main>
}
