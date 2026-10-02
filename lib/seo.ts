import type { Metadata } from "next";
import { categories, site } from "./site";
export const absolute=(path:string)=>`${site.url.replace(/\/$/,"")}${path}`;
export const socialImage={url:"/brand/mpw-social-share.png",width:1200,height:630,alt:"My Portland Wedding — Plan Local. Love Always."};
export function categoryName(slug:string){return categories.find(([s])=>s===slug)?.[1]||"Wedding Vendors"}
export function categoryMetadata(slug:string,area?:string):Metadata{
 const name=categoryName(slug); const place=area?`${area}, Oregon`:"Portland, Oregon";
 const title=`${name} in ${place}`;
 const description=`Browse local ${name.toLowerCase()} serving ${place}. Compare services, pricing, styles and wedding professionals on My Portland Wedding.`;
 const areaSlug=area?area.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):"";
 const path=`/vendors/${slug}${areaSlug?`/${areaSlug}`:""}`;
 return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"website",images:[socialImage]},twitter:{card:"summary_large_image",title,description,images:[socialImage.url]}};
}
export function vendorDescription(v:any){
 const where=[v.city,v.state].filter(Boolean).join(", ")||"Portland, OR";
 const category=categoryName(v.primary_category).replace(/^Wedding /,"");
 const price=v.pricing_from?` Starting at $${Number(v.pricing_from).toLocaleString()}.`:"";
 return `${v.business_name} is a ${category.toLowerCase()} serving ${where}.${price} View services, packages, style and contact details on My Portland Wedding.`.slice(0,158);
}
