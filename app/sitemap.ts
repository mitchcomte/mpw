import type { MetadataRoute } from "next";
import { createAdminClient } from "../lib/supabase/admin";
import { categories, site, oregonServiceCities } from "../lib/site";
import { inspirationArticles } from "../lib/content";
export const dynamic="force-dynamic";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const base=site.url.replace(/\/$/,""); const now=new Date();
 const staticPaths=["","/vendors","/wedding-builder","/planning-tools","/planning-tools/budget-calculator","/planning-tools/guest-list","/inspiration","/for-vendors","/about"];
 const rows:MetadataRoute.Sitemap=staticPaths.map(p=>({url:base+p,lastModified:now,changeFrequency:p===""?"daily":"weekly",priority:p===""?1:.8}));
 const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
 inspirationArticles.forEach(a=>rows.push({url:`${base}/inspiration/${a.slug}`,lastModified:now,changeFrequency:"monthly",priority:.76}));
 categories.forEach(([slug])=>{rows.push({url:`${base}/vendors/${slug}`,lastModified:now,changeFrequency:"daily",priority:.85});oregonServiceCities.slice(0,18).forEach(city=>rows.push({url:`${base}/vendors/${slug}/${slugify(city)}`,lastModified:now,changeFrequency:"weekly",priority:.72}))});
 try{const db=createAdminClient();const {data}=await db.from("vendor_profiles").select("slug,updated_at").eq("market_slug","portland").eq("status","active");
 (data||[]).forEach((v:any)=>rows.push({url:`${base}/vendor/${v.slug}`,lastModified:v.updated_at?new Date(v.updated_at):now,changeFrequency:"weekly",priority:.75}));}catch{}
 return rows;
}
