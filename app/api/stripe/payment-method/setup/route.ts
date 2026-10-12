import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";

export const runtime = "nodejs";

export async function POST(){
 try{
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.json({error:"Unauthorized"},{status:401});
  const {data:vendor}=await supabase.from("vendor_profiles").select("id,plan,admin_payment_exempt").eq("user_id",user.id).maybeSingle();
  if(!vendor) return NextResponse.json({error:"Vendor profile not found"},{status:404});
  if(vendor.plan==="free"||vendor.admin_payment_exempt===true) return NextResponse.json({error:"This account does not require a payment method."},{status:400});
  const {data:subscription}=await supabase.from("subscriptions").select("stripe_customer_id").eq("vendor_id",vendor.id).order("created_at",{ascending:false}).limit(1).maybeSingle();
  if(!subscription?.stripe_customer_id) return NextResponse.json({error:"Billing account is not connected yet."},{status:400});
  const secret=process.env.STRIPE_SECRET_KEY;
  if(!secret) return NextResponse.json({error:"Stripe is not configured"},{status:500});
  const stripe=new Stripe(secret,{apiVersion:"2024-12-18.acacia"});
  const intent=await stripe.setupIntents.create({customer:subscription.stripe_customer_id,usage:"off_session",payment_method_types:["card"],metadata:{vendor_id:vendor.id,purpose:"membership_payment_method_update"}});
  if(!intent.client_secret) return NextResponse.json({error:"Could not start payment update."},{status:500});
  return NextResponse.json({clientSecret:intent.client_secret});
 }catch(e:any){return NextResponse.json({error:e?.message||"Could not start payment update."},{status:500})}
}
