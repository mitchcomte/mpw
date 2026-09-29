import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";
import { createAdminClient } from "../../../../../lib/supabase/admin";

export async function POST(req:NextRequest){
  try{
    const db=await createSupabaseServerClient();
    const {data:{user}}=await db.auth.getUser();
    if(!user) return NextResponse.json({error:"Sign in required"},{status:401});
    const {data:vendor}=await db.from("vendor_profiles").select("id").eq("user_id",user.id).single();
    if(!vendor) return NextResponse.json({error:"Vendor profile not found"},{status:404});
    const body=await req.json();
    const endpoint=String(body?.endpoint||"");
    const p256dh=String(body?.keys?.p256dh||"");
    const auth=String(body?.keys?.auth||"");
    if(!endpoint||!p256dh||!auth) return NextResponse.json({error:"Invalid push subscription"},{status:400});
    const admin=createAdminClient();
    const {error}=await admin.from("vendor_push_subscriptions").upsert({
      vendor_id:vendor.id,user_id:user.id,endpoint,p256dh,auth,
      user_agent:req.headers.get("user-agent"),updated_at:new Date().toISOString()
    },{onConflict:"endpoint"});
    if(error) throw error;
    return NextResponse.json({ok:true});
  }catch(e:any){return NextResponse.json({error:e?.message||"Unable to enable notifications"},{status:500})}
}
