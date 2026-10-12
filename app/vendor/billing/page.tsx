import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { plans } from "../../../lib/site";

export default async function VendorBillingPage(){
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) redirect("/vendor/login?message=Sign%20in%20to%20manage%20billing");
 const {data:vendor}=await supabase.from("vendor_profiles").select("id,plan,founding_vendor,founding_vendor_position,admin_payment_exempt").eq("user_id",user.id).maybeSingle();
 if(!vendor) redirect("/vendor/signup?error=Vendor%20profile%20not%20found");
 const {data:subscription}=await supabase.from("subscriptions").select("id,plan,status,current_period_end,stripe_customer_id").eq("vendor_id",vendor.id).order("created_at",{ascending:false}).limit(1).maybeSingle();
 const plan=plans[vendor.plan as keyof typeof plans];
 const isFree=vendor.plan==="free";
 const paymentExempt=vendor.admin_payment_exempt===true;
 return <main className="billingPage"><div className="billingPageCard"><Link className="textLink" href="/vendor/dashboard#membership">← Back to Vendor Portal</Link><span className="eyebrow">Account & billing</span><h1>Billing & Payment</h1><p className="meta">Manage the payment information used for your My Portland Wedding membership.</p><div className="billingSummary"><div><span>Membership</span><strong>{vendor.founding_vendor?"Founding Vendor Premium":plan?.name||vendor.plan}</strong></div><div><span>Monthly rate</span><strong>{isFree?"$0":`$${vendor.founding_vendor?plans.basic.price:plan?.price}/month`}</strong></div><div><span>Billing status</span><strong>{paymentExempt?"Payment exempt":subscription?.status||"Not activated"}</strong></div>{subscription?.current_period_end&&<div><span>Current period ends</span><strong>{new Date(subscription.current_period_end).toLocaleDateString()}</strong></div>}</div>{isFree?<div className="notice"><strong>No payment method is required for your Free listing.</strong><p>Upgrade your membership when you are ready to unlock paid vendor features.</p><Link className="btn primary" href="/vendor/checkout?plan=basic">Upgrade Membership →</Link></div>:paymentExempt?<div className="notice success"><strong>Admin-activated membership</strong><p>This account is currently payment-exempt, so there is no payment method to update.</p></div>:subscription?.stripe_customer_id?<div className="billingManageBox"><h2>Payment & billing information</h2><p>Open the secure Stripe billing portal to update your card or other payment method and review the billing information available for your account.</p><form action="/api/stripe/portal" method="post"><button className="btn primary" type="submit">Update Payment / Billing Information →</button></form><p className="meta">For security, My Portland Wedding does not store or display your full card number.</p></div>:<div className="notice"><strong>Your paid membership has not been connected to a billing account yet.</strong><p>Activate billing to add a payment method.</p><Link className="btn primary" href="/vendor/checkout">Activate Billing →</Link></div>}<div className="billingHelp"><h2>Need help?</h2><p>For membership or billing questions, email <a href="mailto:hello@myportlandwedding.com">hello@myportlandwedding.com</a>.</p></div></div></main>;
}
