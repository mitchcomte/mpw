import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { createStripe } from "../../../../lib/stripe";

function normalizeCode(value:string){return value.toUpperCase().replace(/[^A-Z0-9_-]/g,"").slice(0,32)}
export async function POST(req:NextRequest){
  const form=await req.formData(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.redirect(new URL("/admin/login",req.url),303);
  const {data:isAdmin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!isAdmin) return new NextResponse("Forbidden",{status:403});
  const stripe=createStripe(); if(!stripe) return NextResponse.redirect(new URL("/admin?message=Stripe%20is%20not%20configured",req.url),303);
  const custom=normalizeCode(String(form.get("code")||"")); const code=custom||`SECOND-MONTH-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  const maxRedemptions=Math.max(1,Math.min(500,Number(form.get("max_redemptions")||1)||1));
  const db=createAdminClient();
  const {data:existing}=await db.from("vendor_promo_codes").select("id").eq("code",code).maybeSingle(); if(existing) return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(`Code ${code} already exists`)}`,req.url),303);
  try{
    const couponName=`MPW 2nd Month Free · ${code}`.slice(0,40);
    const coupon=await stripe.coupons.create({percent_off:100,duration:"once",name:couponName,metadata:{purpose:"second_month_free",code}});
    const {error}=await db.from("vendor_promo_codes").insert({code,discount_type:"second_month_free",stripe_coupon_id:coupon.id,max_redemptions:maxRedemptions,created_by:user.id,active:true});
    if(error){try{await stripe.coupons.del(coupon.id)}catch{}; throw error;}
    return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(`Promo code ${code} created. First month bills normally; second month is free. Max uses: ${maxRedemptions}.`)}`,req.url),303);
  }catch(error:any){
    const raw=String(error?.message||"");
    const friendly=/at most 40 characters|invalid string/i.test(raw)?"The promotion name was too long for Stripe. MPW now shortens promotion names automatically — please try again.":(raw||"Could not create promo code");
    return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(friendly)}`,req.url),303)
  }
}
