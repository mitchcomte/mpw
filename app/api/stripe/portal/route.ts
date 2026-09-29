import { NextRequest, NextResponse } from "next/server";
import { createStripe } from "../../../../lib/stripe";
import { site } from "../../../../lib/site";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export const runtime="nodejs";
export async function POST(req:NextRequest){
 const stripe=createStripe(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser();
 if(!user) return NextResponse.redirect(new URL("/vendor/login",req.url),303);
 if(!stripe) return NextResponse.redirect(new URL("/vendor/dashboard?error=Stripe%20billing%20is%20not%20configured",req.url),303);
 const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).maybeSingle(); if(!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found",req.url),303);
 const {data:sub}=await supabase.from("subscriptions").select("stripe_customer_id").eq("vendor_id",vendor.id).not("stripe_customer_id","is",null).order("created_at",{ascending:false}).limit(1).maybeSingle();
 if(!sub?.stripe_customer_id) return NextResponse.redirect(new URL("/vendor/dashboard?error=No%20active%20billing%20account%20found",req.url),303);
 try{const portal=await stripe.billingPortal.sessions.create({customer:sub.stripe_customer_id,return_url:`${site.url}/vendor/dashboard#membership`});return NextResponse.redirect(portal.url,303);}catch{return NextResponse.redirect(new URL("/vendor/dashboard?error=Could%20not%20open%20billing%20portal",req.url),303);}
}
