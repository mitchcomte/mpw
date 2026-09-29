import WeddingBuilder from "../../components/WeddingBuilder";
import { createSupabaseServerClient } from "../../lib/supabase/server";
export const dynamic="force-dynamic";
export const metadata={title:"Wedding Builder by My Portland Wedding",description:"Build a personalized Portland wedding plan from your budget, guest count, style and priorities, then discover local vendors that fit.",alternates:{canonical:"/wedding-builder"},openGraph:{url:"/wedding-builder",images:[{url:"/brand/mpw-social-share.png",width:1200,height:630,alt:"Wedding Builder by My Portland Wedding"}]}};
export default async function WeddingBuilderPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const params=await searchParams;
 const budget=Math.min(250000,Math.max(5000,Number(params.budget)||30000));
 const guests=Math.min(1000,Math.max(10,Number(params.guests)||100));
 const city=typeof params.city==="string"?params.city:"Portland";
 const date=typeof params.date==="string"?params.date:"";
 const style=typeof params.style==="string"?params.style:"";
 const hasStarter=Boolean(params.budget||params.guests||params.city||params.date||params.style);
 const db=await createSupabaseServerClient();
 const {data}=await db.from("vendor_profiles").select("id,slug,business_name,primary_category,secondary_categories,city,service_cities,pricing_from,pricing_typical,pricing_max,pricing_packages,wedding_styles,guest_capacity_min,guest_capacity_max,availability_status,unavailable_dates,vendor_attributes,plan,rating,description,founding_vendor").eq("market_slug","portland").eq("status","active").neq("plan","free").limit(1000);
 const vendorIds=(data||[]).map((v:any)=>v.id);
 const {data:photos}=vendorIds.length?await db.from("vendor_photos").select("vendor_id,storage_path,sort_order").in("vendor_id",vendorIds).order("sort_order",{ascending:true}):{data:[] as any[]};
 const firstPhoto=new Map<string,string>();(photos||[]).forEach((p:any)=>{if(!firstPhoto.has(p.vendor_id))firstPhoto.set(p.vendor_id,`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/vendor-media/${p.storage_path}`)});
 const builderVendors=(data||[]).map((v:any)=>({...v,photo_url:firstPhoto.get(v.id)||null}));
 return <main className="midnightBuilderPage"><section className="midnightBuilderHero"><div className="midnightBuilderBrand"><img src="/brand/mpw-heart-sprig-clean.png" alt="My Portland Wedding"/><span>WEDDING BUILDER</span><small>BY MY PORTLAND WEDDING</small></div><div className="midnightBuilderIntro"><span>YOUR WEDDING / LIVE</span><h1>{hasStarter?"There you are.":"Let's make something gorgeous."}</h1><p>{hasStarter?"We have your starting point. Now shape the feeling, priorities, money and people until the whole wedding clicks.":"Part planner, part matchmaker, part budget brain. Tell us what matters and we'll turn it into a wedding you can actually see."}</p></div><div className="midnightBuilderSteps"><span><b>01</b>THE BASICS</span><span><b>02</b>THE FEELING</span><span><b>03</b>THE PARTY</span><span><b>04</b>THE MUST-HAVES</span><span><b>05</b>THE REVEAL ✦</span></div></section><section className="midnightBuilderStage"><aside><span>PLAY WITH IT</span><p>Change your mind.<br/>Move the money.<br/>Pick the flowers.<br/>Keep the weird idea.</p><i>♡</i></aside><div className="midnightBuilderCanvas"><WeddingBuilder vendors={builderVendors as any} initialAnswers={hasStarter?{budget,guests,city,date,style}:undefined}/></div></section></main>
}
