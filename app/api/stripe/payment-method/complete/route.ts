import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";
import { createStripe } from "../../../../../lib/stripe";

export const runtime = "nodejs";

export async function POST(req:Request){
 try{
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.json({error:"Unauthorized"},{status:401});
  const {setupIntentId}=await req.json().catch(()=>({}));
  if(!setupIntentId) return NextResponse.json({error:"Missing setup intent"},{status:400});
  const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).maybeSingle();
  if(!vendor) return NextResponse.json({error:"Vendor profile not found"},{status:404});
  const {data:subscription}=await supabase.from("subscriptions").select("stripe_customer_id,stripe_subscription_id").eq("vendor_id",vendor.id).order("created_at",{ascending:false}).limit(1).maybeSingle();
  if(!subscription?.stripe_customer_id) return NextResponse.json({error:"Billing account not found"},{status:400});
  const stripe=createStripe();
  if(!stripe) return NextResponse.json({error:"Stripe is not configured"},{status:500});
  const intent=await stripe.setupIntents.retrieve(setupIntentId);
  const customerId=typeof intent.customer==="string"?intent.customer:intent.customer?.id;
  if(intent.status!=="succeeded"||customerId!==subscription.stripe_customer_id||!intent.payment_method) return NextResponse.json({error:"Payment method update was not completed."},{status:400});
  const paymentMethodId=typeof intent.payment_method==="string"?intent.payment_method:intent.payment_method.id;
  await stripe.customers.update(subscription.stripe_customer_id,{invoice_settings:{default_payment_method:paymentMethodId}});
  if(subscription.stripe_subscription_id) await stripe.subscriptions.update(subscription.stripe_subscription_id,{default_payment_method:paymentMethodId});
  return NextResponse.json({ok:true});
 }catch(e:any){return NextResponse.json({error:e?.message||"Could not save payment method."},{status:500})}
}
