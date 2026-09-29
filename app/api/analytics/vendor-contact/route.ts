import {NextRequest,NextResponse} from "next/server";
import {createAdminClient} from "../../../../lib/supabase/admin";
export async function POST(req:NextRequest){
 try{const body=await req.json();const vendorId=String(body.vendor_id||"");const kind=String(body.kind||"");const source=body.source==="wedding_builder"?"wedding_builder":"profile";const platform=String(body.platform||"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32);if(!vendorId||!["phone","email","website","social"].includes(kind))return NextResponse.json({ok:false},{status:400});
 const db=createAdminClient();const {data:v}=await db.from("vendor_profiles").select("id,status").eq("id",vendorId).eq("market_slug","portland").maybeSingle();if(!v||v.status!=="active")return NextResponse.json({ok:false},{status:404});
 await db.from("analytics_events").insert({market_slug:"portland",vendor_id:vendorId,event_type:kind==="social"&&platform?`contact_social_${platform}_${source}`:`contact_${kind}_${source}`});return NextResponse.json({ok:true});}catch{return NextResponse.json({ok:false},{status:400})}
}
