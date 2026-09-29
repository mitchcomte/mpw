import CategoryPage from "../page";import {categoryMetadata} from "../../../../lib/seo";import {oregonServiceCities,categories} from "../../../../lib/site";import {notFound} from "next/navigation";
const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
function cityFromSlug(slug:string){return oregonServiceCities.find(c=>slugify(c)===slug)}
export function generateStaticParams(){return categories.flatMap(([category])=>oregonServiceCities.slice(0,18).map(city=>({category,city:slugify(city)})))}
export async function generateMetadata({params}:{params:Promise<{category:string,city:string}>}){const {category,city}=await params;const name=cityFromSlug(city);if(!name)return {};const m=categoryMetadata(category,name);return {...m,alternates:{canonical:`/vendors/${category}/${city}`}}}
export default async function CityCategoryPage({params}:{params:Promise<{category:string,city:string}>}){const {category,city}=await params;const name=cityFromSlug(city);if(!name)notFound();return CategoryPage({params:Promise.resolve({category}),searchParams:Promise.resolve({area:name})})}
