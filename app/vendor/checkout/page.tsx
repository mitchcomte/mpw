import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { createAdminClient } from "../../../lib/supabase/admin";
import { plans } from "../../../lib/site";
import EmbeddedStripeCheckout from "../../../components/EmbeddedStripeCheckout";
import AnalyticsEvent from "../../../components/AnalyticsEvent";

export default async function VendorCheckout() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/vendor/login?message=Sign%20in%20to%20activate%20your%20membership");

  const { data: vendor } = await supabase
    .from("vendor_profiles")
    .select("id,business_name,plan,founding_vendor,founding_vendor_position,founding_vendor_category,sales_invite_id")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!vendor) redirect("/vendor/dashboard?error=Vendor%20profile%20not%20found");

  const planKey = vendor.plan as keyof typeof plans;
  if (planKey === "free") redirect("/vendor/dashboard?message=Your%20Free%20listing%20does%20not%20require%20payment#membership");
  const plan = plans[planKey];
  if (!plan) redirect("/vendor/dashboard?error=Invalid%20membership%20plan");

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("status,stripe_subscription_id")
    .eq("vendor_id", vendor.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (subscription?.stripe_subscription_id && ["active","trialing","past_due","unpaid"].includes(subscription.status || "")) {
    redirect("/vendor/dashboard?message=Your%20membership%20is%20already%20active#membership");
  }

  const founding = vendor.founding_vendor === true;
  const monthlyPrice = founding ? plans.basic.price : plan.price;
  let includedPromoCode = "";
  if (vendor.sales_invite_id && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const admin = createAdminClient();
    const { data: saleInvite } = await admin.from("vendor_sales_invites").select("promo_code,sales_channel").eq("id", vendor.sales_invite_id).maybeSingle();
    if (saleInvite?.sales_channel === "phone_sale" && saleInvite?.promo_code) includedPromoCode = saleInvite.promo_code;
  }

  return <main className="checkoutPage"><AnalyticsEvent name="Vendor Signup Completed" properties={{plan:planKey,founding_vendor:founding}}/><div className="container checkoutContainer">
    <div className="checkoutHeader">
      <span className="eyebrow">Secure membership activation</span>
      <h1>{founding ? "Activate your Founding Vendor membership ✦" : `Activate your ${plan.name} membership`}</h1>
      <p className="meta">Complete payment below without leaving My Portland Wedding. Your listing activates after Stripe confirms your subscription.</p>
      <Link href="/vendor/dashboard#membership" className="textLink">← Back to vendor dashboard</Link>
    </div>
    {founding && <div className="foundingCheckoutBanner">
      <span className="foundingBadgePreview">FOUNDING VENDOR</span>
      <div><strong>Premium benefits. Basic price. Locked in.</strong><p>You’re Founding Vendor #{vendor.founding_vendor_position} in your category. Your Premium membership is <b>${plans.basic.price}/month</b> for as long as the membership remains continuously active.</p></div>
    </div>}
    <div className="checkoutCard">
      <EmbeddedStripeCheckout plan={planKey} planName={founding ? "Founding Vendor · Premium" : plan.name} monthlyPrice={monthlyPrice} foundingVendor={founding} initialPromoCode={includedPromoCode} />
    </div>
  </div></main>;
}
