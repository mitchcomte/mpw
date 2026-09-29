import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";
import { createAdminClient } from "../../../../../lib/supabase/admin";

export async function POST(req:NextRequest){
  try{
    const db=await createSupabaseServerClient();
    const {data:{user}}=await db.auth.getUser();
    if(!user) return NextResponse.json({error:"Sign in required"},{status:401});
    const body=await req.json();
    const endpoint=String(body?.endpoint||"");
    if(endpoint){const admin=createAdminClient();await admin.from("vendor_push_subscriptions").delete().eq("user_id",user.id).eq("endpoint",endpoint)}
    return NextResponse.json({ok:true});
  }catch(e:any){return NextResponse.json({error:e?.message||"Unable to disable notifications"},{status:500})}
}
