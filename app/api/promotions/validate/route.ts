import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
export async function POST(req:NextRequest){
  const body=await req.json().catch(()=>({})); const code=String(body?.code||"").trim().toUpperCase(); if(!code) return NextResponse.json({valid:false,error:"Enter a promo code."},{status:400});
  const db=createAdminClient(); const {data}=await db.from("vendor_promo_codes").select("id,code,discount_type,max_redemptions,redemption_count,active,expires_at").eq("code",code).maybeSingle();
  const valid=Boolean(data?.active)&&(!data?.expires_at||new Date(data.expires_at)>new Date())&&Number(data?.redemption_count||0)<Number(data?.max_redemptions||0);
  if(!valid) return NextResponse.json({valid:false,error:"That promo code is invalid, expired or fully redeemed."},{status:404});
  return NextResponse.json({valid:true,code:data!.code,label:data!.discount_type==="second_month_free"?"Second month free":"Promotion applied"});
}
