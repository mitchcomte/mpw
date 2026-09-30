import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { createAdminClient } from "../../../lib/supabase/admin";
import { categories, plans, site } from "../../../lib/site";
import EmbeddedStripeCheckout from "../../../components/EmbeddedStripeCheckout";
import AnalyticsEvent from "../../../components/AnalyticsEvent";

export default async function VendorCheckout({ searchParams }: { searchParams: Promise<{ plan?: string; admin_preview?: string; preview?: string }> }) {
  const q = await searchParams;
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/vendor/login?message=Sign%20in%20to%20activate%20your%20membership");

  const admin = process.env.SUPABASE_SERVICE_ROLE_KEY ? createAdminClient() : null;
  let isAdminPreview = false;
  if (q.admin_preview && admin) {
    const { data: adminUser } = await admin.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
    isAdminPreview = Boolean(adminUser);
  }

  const vendorSelect = "id,business_name,email,primary_category,plan,founding_vendor,founding_vendor_position,founding_vendor_category,sales_invite_id";
  const { data: vendor } = isAdminPreview
    ? await admin!.from("vendor_profiles").select(vendorSelect).eq("id", q.admin_preview!).maybeSingle()
    : await supabase.from("vendor_profiles").select(vendorSelect).eq("user_id", user.id).maybeSingle();
  if (!vendor) redirect(isAdminPreview ? "/admin/vendors?message=Vendor%20not%20found" : "/vendor/dashboard?error=Vendor%20profile%20not%20found");

  const accountPlan = vendor.plan as keyof typeof plans;
  const requestedUpgrade = q.plan && ["basic","professional","premium"].includes(q.plan) ? q.plan as keyof typeof plans : null;
  if (accountPlan === "free" && !requestedUpgrade) redirect("/vendor/dashboard?message=Choose%20a%20paid%20membership%20to%20upgrade#membership");
  const planKey = (accountPlan === "free" ? requestedUpgrade : accountPlan) as "basic" | "professional" | "premium";
  const plan = plans[planKey];
  if (!plan) redirect("/vendor/dashboard?error=Invalid%20membership%20plan");

  const dataClient = isAdminPreview ? admin! : supabase;
  const { data: subscription } = await dataClient
    .from("subscriptions")
    .select("status,stripe_subscription_id")
    .eq("vendor_id", vendor.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (subscription?.stripe_subscription_id && ["active","trialing","past_due","unpaid"].includes(subscription.status || "")) {
    redirect("/vendor/dashboard?message=Your%20membership%20is%20already%20active#membership");
  }

  let founding = vendor.founding_vendor === true && planKey === "premium";
  let foundingPosition = vendor.founding_vendor_position as number | null;

  // Existing Free vendors get the same launch opportunity as new signups:
  // if their category still has one of the five Founding Vendor positions open,
  // preview the upgrade as Premium access at the Basic rate.
  if (accountPlan === "free" && admin && vendor.primary_category) {
    const { data: claimed } = await admin.from("founding_vendor_memberships")
      .select("position,status,reserved_until")
      .eq("market_slug", site.marketSlug)
      .eq("category", vendor.primary_category)
      .in("status", ["reserved","active","forfeited"]);
    const now = Date.now();
    const used = new Set((claimed || []).filter((r:any)=>r.status !== "reserved" || !r.reserved_until || new Date(r.reserved_until).getTime() >= now).map((r:any)=>Number(r.position)));
    const open = [1,2,3,4,5].find(n=>!used.has(n)) || null;
    if (open) {
      founding = true;
      foundingPosition = open;
    }
  }

  const effectivePlanKey = founding ? "premium" : planKey;
  const effectivePlan = plans[effectivePlanKey];
  const monthlyPrice = founding ? plans.basic.price : effectivePlan.price;
  let includedPromoCode = "";
  if (vendor.sales_invite_id && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const saleAdmin = createAdminClient();
    const { data: saleInvite } = await saleAdmin.from("vendor_sales_invites").select("promo_code,sales_channel").eq("id", vendor.sales_invite_id).maybeSingle();
    if (saleInvite?.sales_channel === "phone_sale" && saleInvite?.promo_code) includedPromoCode = saleInvite.promo_code;
  }

  return <main className="checkoutPage"><AnalyticsEvent name={accountPlan==="free"?"Vendor Upgrade Checkout Started":"Vendor Signup Completed"} properties={{plan:effectivePlanKey,founding_vendor:founding,from_plan:accountPlan,admin_preview:isAdminPreview}}/><div className="container checkoutContainer">
    <div className="checkoutHeader">
      <span className="eyebrow">Secure membership activation</span>
      <h1>{founding ? "Activate your Founding Vendor membership ✦" : `Activate your ${effectivePlan.name} membership`}</h1>
      <p className="meta">Complete payment below without leaving My Portland Wedding. Your listing activates after Stripe confirms your subscription.</p>
      <Link href={isAdminPreview?`/vendor/dashboard?admin_preview=${vendor.id}#membership`:"/vendor/dashboard#membership"} className="textLink">← Back to vendor dashboard</Link>
    </div>
    {founding && <div className="foundingCheckoutBanner">
      <span className="foundingBadgePreview">FOUNDING VENDOR</span>
      <div><strong>Premium benefits. Basic price. Locked in.</strong><p>You’re eligible for Founding Vendor #{foundingPosition} in your category. Your Premium membership is <b>${plans.basic.price}/month</b> for as long as the membership remains continuously active.</p></div>
    </div>}
    <div className="checkoutCard">
      {isAdminPreview?<div className="embeddedCheckoutConsent"><div className="notice success"><strong>Admin checkout preview — no payment can be created.</strong><p>This is the offer and coupon step the vendor sees before Stripe.</p></div><div className="recurringDisclosure"><strong>Recurring monthly membership authorization</strong><p>{founding?"Founding Vendor · Premium":effectivePlan.name} is <b>${monthlyPrice}/month</b> and renews automatically until canceled.{founding?" The founding rate remains available only while the membership stays continuously active.":""}</p></div><div className="promoEntry"><label><strong>Have a promo code?</strong><span className="promoInputRow"><input placeholder="Enter code" readOnly/><button type="button" className="btn light" disabled>Apply</button></span></label><small>Second-month-free codes charge month 1 normally and apply a one-time 100% discount to month 2.</small></div><label className="consentCheck checkoutConsent"><input type="checkbox" disabled/><span>I authorize the recurring ${monthlyPrice} monthly charge and agree to the Vendor Terms of Service and Cancellation Policy.</span></label><button className="btn primary checkoutStartButton" disabled>Continue to Secure Payment</button></div>:<EmbeddedStripeCheckout plan={effectivePlanKey} planName={founding ? "Founding Vendor · Premium" : effectivePlan.name} monthlyPrice={monthlyPrice} foundingVendor={founding} initialPromoCode={includedPromoCode} />}
    </div>
  </div></main>;
}
