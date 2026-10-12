import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { createAdminClient } from "../../../lib/supabase/admin";
import { plans } from "../../../lib/site";
import { decodeDisplayText } from "../../../lib/text";
import EmbeddedPaymentMethodUpdate from "../../../components/EmbeddedPaymentMethodUpdate";
import styles from "./billing.module.css";

export default async function VendorBillingPage({searchParams}:{searchParams:Promise<{admin_preview?:string}>}){
 const q=await searchParams;
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) redirect(q.admin_preview?"/admin/login":"/vendor/login?message=Sign%20in%20to%20manage%20billing");
 const adminClient=createAdminClient();
 let isAdminPreview=false;
 if(q.admin_preview){
  const {data:adminUser}=await adminClient.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
  if(!adminUser) redirect("/admin/login?error=Admin%20access%20required");
  isAdminPreview=true;
 }
 const dataClient=isAdminPreview?adminClient:supabase;
 const {data:vendor}=isAdminPreview
  ? await adminClient.from("vendor_profiles").select("id,business_name,plan,founding_vendor,founding_vendor_position,admin_payment_exempt").eq("id",q.admin_preview!).maybeSingle()
  : await supabase.from("vendor_profiles").select("id,business_name,plan,founding_vendor,founding_vendor_position,admin_payment_exempt").eq("user_id",user.id).maybeSingle();
 if(!vendor) redirect(isAdminPreview?"/admin/vendors?error=Vendor%20profile%20not%20found":"/vendor/signup?error=Vendor%20profile%20not%20found");
 const {data:subscription}=await dataClient.from("subscriptions").select("id,plan,status,current_period_end,stripe_customer_id").eq("vendor_id",vendor.id).order("created_at",{ascending:false}).limit(1).maybeSingle();
 const plan=plans[vendor.plan as keyof typeof plans];
 const isFree=vendor.plan==="free";
 const paymentExempt=vendor.admin_payment_exempt===true;
 const backHref=isAdminPreview?`/vendor/dashboard?admin_preview=${vendor.id}#membership`:"/vendor/dashboard#membership";
 return <>{isAdminPreview&&<div className="adminPreviewBar"><div><strong>Admin Preview · Read Only</strong><span>Billing view for {decodeDisplayText(vendor.business_name||"this vendor")}. Payment and membership actions are disabled.</span></div><Link className="btn light" href={`/admin/vendors/${vendor.id}`}>← Back to Vendor CRM</Link></div>}<main className={styles.page}><div className={styles.card}><Link className={`${styles.back} textLink`} href={backHref}>← Back to Vendor Portal</Link><span className="eyebrow">Account & billing</span><h1>Billing & Payment</h1><p className="meta">{isAdminPreview?"Review this vendor’s membership and billing connection without changing customer payment information.":"Manage the payment information used for your My Portland Wedding membership."}</p><div className={styles.summary}><div><span>Membership</span><strong>{vendor.founding_vendor?"Founding Vendor Premium":plan?.name||vendor.plan}</strong></div><div><span>Monthly rate</span><strong>{isFree?"$0":`$${vendor.founding_vendor?plans.basic.price:plan?.price}/month`}</strong></div><div><span>Billing status</span><strong>{paymentExempt?"Payment exempt":subscription?.status||"Not activated"}</strong></div>{subscription?.current_period_end&&<div><span>Current period ends</span><strong>{new Date(subscription.current_period_end).toLocaleDateString()}</strong></div>}</div>{isAdminPreview?<div className="notice"><strong>Read-only admin billing view</strong><p>{subscription?.stripe_customer_id?"This vendor is connected to a Stripe billing customer. For security, card-entry and payment-method changes are available only to the vendor while signed into their own account.":paymentExempt?"This vendor is payment-exempt and does not need a payment method.":isFree?"This vendor is on the Free plan and does not need a payment method.":"This paid vendor is not currently connected to a Stripe billing customer."}</p></div>:isFree?<div className="notice"><strong>No payment method is required for your Free listing.</strong><p>Upgrade your membership when you are ready to unlock paid vendor features.</p><Link className="btn primary" href="/vendor/checkout?plan=basic">Upgrade Membership →</Link></div>:paymentExempt?<div className="notice success"><strong>Admin-activated membership</strong><p>This account is currently payment-exempt, so there is no payment method to update.</p></div>:subscription?.stripe_customer_id?<EmbeddedPaymentMethodUpdate/>:<div className="notice"><strong>Your paid membership has not been connected to a billing account yet.</strong><p>Activate billing to add a payment method.</p><Link className="btn primary" href="/vendor/checkout">Activate Billing →</Link></div>}<div className={styles.help}><h2>Need help?</h2><p>For membership or billing questions, email <a href="mailto:hello@myportlandwedding.com">hello@myportlandwedding.com</a>.</p></div></div></main></>;
}
