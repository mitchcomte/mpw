import {NextResponse} from "next/server";
import {createSupabaseServerClient} from "../../../../lib/supabase/server";
export async function POST(req:Request){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.json({ok:true,preview:true});
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user)return NextResponse.json({ok:false},{status:401});
 const {data:v}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).maybeSingle(); if(!v)return NextResponse.json({ok:false},{status:404});
 const body=await req.json().catch(()=>({})); const event_type=body?.action==="embed"?"badge_embed_copied":"badge_pack_download";
 await supabase.from("analytics_events").insert({market_slug:"portland",vendor_id:v.id,event_type}); return NextResponse.json({ok:true});
}
