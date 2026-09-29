import Stripe from "stripe";
import { createAdminClient } from "./supabase/admin";
import { sendEmailOnce, emailButton, siteUrl } from "./email";

function idOf(value: string | { id: string } | null | undefined) {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

async function vendorContact(db:ReturnType<typeof createAdminClient>,vendorId:string){
  const {data}=await db.from("vendor_profiles").select("business_name,email,founding_vendor,founding_vendor_position").eq("id",vendorId).maybeSingle(); return data;
}

async function activateFoundingVendor(db: ReturnType<typeof createAdminClient>, vendorId: string) {
  const now = new Date().toISOString();
  const { data: vendor } = await db.from("vendor_profiles")
    .select("founding_vendor,founding_vendor_category,founding_vendor_position")
    .eq("id", vendorId).maybeSingle();
  if (!vendor?.founding_vendor) return;

  await db.from("vendor_profiles").update({ founding_vendor_activated_at: now, founding_vendor_forfeited_at: null }).eq("id", vendorId);
  await db.from("founding_vendor_memberships").update({ status: "active", activated_at: now, reserved_until: null, updated_at: now })
    .eq("vendor_id", vendorId).eq("status", "reserved");
}

async function forfeitFoundingVendor(db: ReturnType<typeof createAdminClient>, vendorId: string, releaseIfNeverActivated = false) {
  const now = new Date().toISOString();
  const { data: vendor } = await db.from("vendor_profiles")
    .select("founding_vendor,founding_vendor_activated_at")
    .eq("id", vendorId).maybeSingle();
  if (!vendor?.founding_vendor) return;

  if (releaseIfNeverActivated && !vendor.founding_vendor_activated_at) {
    await db.from("founding_vendor_memberships").delete().eq("vendor_id", vendorId).eq("status", "reserved");
  } else {
    await db.from("founding_vendor_memberships").update({ status: "forfeited", forfeited_at: now, updated_at: now })
      .eq("vendor_id", vendorId).in("status", ["reserved", "active"]);
  }
  await db.from("vendor_profiles").update({ founding_vendor: false, founding_vendor_forfeited_at: now, updated_at: now }).eq("id", vendorId);
}

export async function syncCheckoutSession(stripe: Stripe, session: Stripe.Checkout.Session) {
  const vendorId = session.metadata?.vendor_id || null;
  const plan = session.metadata?.plan || "professional";
  const subscriptionId = idOf(session.subscription as any);
  if (!vendorId || !subscriptionId) return;

  let subscription: Stripe.Subscription | null = null;
  try { subscription = await stripe.subscriptions.retrieve(subscriptionId); } catch {}

  const db = createAdminClient();
  const status = subscription?.status || "active";
  const currentPeriodEnd = subscription?.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  const promoRecordId = session.metadata?.promo_record_id || null;
  const secondMonthCouponId = session.metadata?.second_month_coupon_id || null;
  if (promoRecordId && secondMonthCouponId) {
    const { data: promo } = await db.from("vendor_promo_codes").select("id,max_redemptions,redemption_count,active").eq("id", promoRecordId).maybeSingle();
    if (promo?.active && Number(promo.redemption_count || 0) < Number(promo.max_redemptions || 0)) {
      try {
        await stripe.subscriptions.update(subscriptionId, { discounts: [{ coupon: secondMonthCouponId }] } as any);
        await db.from("vendor_promo_redemptions").insert({ promo_code_id: promoRecordId, vendor_id: vendorId, stripe_subscription_id: subscriptionId, applied_at: new Date().toISOString() });
        await db.from("vendor_promo_codes").update({ redemption_count: Number(promo.redemption_count || 0) + 1, updated_at: new Date().toISOString() }).eq("id", promoRecordId);
      } catch (promoError) {
        console.error("Could not apply second-month-free promotion", promoError);
      }
    }
  }

  await db.from("subscriptions").upsert({
    vendor_id: vendorId,
    stripe_customer_id: idOf(session.customer as any),
    stripe_subscription_id: subscriptionId,
    plan,
    status,
    market_slug: session.metadata?.market || "portland",
    current_period_end: currentPeriodEnd,
    billing_consent_at: session.metadata?.recurring_consent === "yes" ? new Date().toISOString() : null,
    billing_terms_version: session.metadata?.billing_terms_version || null,
    cancellation_policy_acknowledged: session.metadata?.recurring_consent === "yes",
    updated_at: new Date().toISOString()
  }, { onConflict: "stripe_subscription_id" });

  if (["active", "trialing"].includes(status)) {
    await db.from("vendor_profiles").update({ plan, status: "active", crm_stage: "active", updated_at: new Date().toISOString() }).eq("id", vendorId);
    if (session.metadata?.founding_vendor === "yes") await activateFoundingVendor(db, vendorId);
  } else {
    await db.from("vendor_profiles").update({ plan, updated_at: new Date().toISOString() }).eq("id", vendorId);
  }

  const { data: vendor } = await db.from("vendor_profiles").select("sales_invite_id").eq("id", vendorId).maybeSingle();
  if (vendor?.sales_invite_id && ["active", "trialing"].includes(status)) {
    await db.from("vendor_sales_invites").update({ status: "active", completed_at: new Date().toISOString(), updated_at: new Date().toISOString() }).eq("id", vendor.sales_invite_id);
  }
  if (["active","trialing"].includes(status)) { const contact=await vendorContact(db,vendorId); if(contact?.email) await sendEmailOnce({eventKey:`membership_activated:${session.id}`,to:contact.email,subject:"Your My Portland Wedding membership is active",title:"Your listing is activated ✦",body:`<p>Your ${plan} membership is active and your vendor dashboard is ready.</p>${contact.founding_vendor?`<p><strong>Founding Vendor #${contact.founding_vendor_position}</strong> is active. Keep your membership continuously active to retain the founding rate and badge.</p>`:""}<p>Complete your pricing, service area, wedding styles and gallery so Wedding Builder by My Portland Wedding can make stronger matches.</p>${emailButton("Complete My Vendor Profile",`${siteUrl}/vendor/dashboard#onboarding`)}`}); }
}

export async function syncSubscription(subscription: Stripe.Subscription) {
  const db = createAdminClient();
  const vendorId = subscription.metadata?.vendor_id || null;
  const plan = subscription.metadata?.plan || null;
  const currentPeriodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  await db.from("subscriptions").update({
    status: subscription.status,
    current_period_end: currentPeriodEnd,
    ...(plan ? { plan } : {}),
    updated_at: new Date().toISOString()
  }).eq("stripe_subscription_id", subscription.id);

  if (vendorId) {
    const active = ["active", "trialing"].includes(subscription.status);
    const inactive = ["canceled", "unpaid", "incomplete_expired"].includes(subscription.status);
    const profileUpdate: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (plan) profileUpdate.plan = plan;
    if (active) { profileUpdate.status = "active"; profileUpdate.crm_stage = "active"; }
    if (inactive) { profileUpdate.status = "suspended"; profileUpdate.crm_stage = "paused"; }
    await db.from("vendor_profiles").update(profileUpdate).eq("id", vendorId);

    if (active && subscription.metadata?.founding_vendor === "yes") await activateFoundingVendor(db, vendorId);
    if (subscription.status === "canceled") { await forfeitFoundingVendor(db, vendorId, false); const contact=await vendorContact(db,vendorId); if(contact?.email) await sendEmailOnce({eventKey:`membership_canceled:${subscription.id}`,to:contact.email,subject:"My Portland Wedding membership cancellation confirmed",title:"Your membership has been canceled",body:`<p>Your My Portland Wedding membership cancellation is confirmed. Your paid listing will no longer remain active after cancellation takes effect.</p>${contact.founding_vendor?"<p>Your Founding Vendor rate and badge have been permanently forfeited under the Founding Vendor terms.</p>":""}<p>If you believe this was an error, contact <a href="mailto:hello@myportlandwedding.com">hello@myportlandwedding.com</a>.</p>`}); }
    if (subscription.status === "incomplete_expired") await forfeitFoundingVendor(db, vendorId, true);
  }
}

export async function syncInvoicePayment(stripe: Stripe, invoice: Stripe.Invoice, paid: boolean) {
  const subscriptionId = idOf((invoice as any).subscription);
  if (!subscriptionId) return;
  const db = createAdminClient();
  const now = new Date().toISOString();

  const { data: subscription } = await db
    .from("subscriptions")
    .select("vendor_id,plan")
    .eq("stripe_subscription_id", subscriptionId)
    .maybeSingle();

  await db.from("subscriptions").update({
    status: paid ? "active" : "past_due",
    updated_at: now
  }).eq("stripe_subscription_id", subscriptionId);

  if (subscription?.vendor_id) {
    const profileUpdate: Record<string, unknown> = {
      status: paid ? "active" : "suspended",
      crm_stage: paid ? "active" : "paused",
      updated_at: now
    };
    if (subscription.plan) profileUpdate.plan = subscription.plan;
    await db.from("vendor_profiles").update(profileUpdate).eq("id", subscription.vendor_id);

    // A referral qualifies on the referred vendor's first successful paid invoice.
    // Reward = one month of the REFERRER'S current Stripe membership, credited to future invoices.
    if (paid && Number((invoice as any).amount_paid || 0) > 0) {
      const { data: referral } = await db.from("vendor_referrals").select("id,referrer_vendor_id,status").eq("referred_vendor_id", subscription.vendor_id).in("status",["signed_up","qualified"]).maybeSingle();
      if (referral) {
        const { data: refSub } = await db.from("subscriptions").select("stripe_subscription_id,stripe_customer_id,status").eq("vendor_id",referral.referrer_vendor_id).in("status",["active","trialing"]).order("created_at",{ascending:false}).limit(1).maybeSingle();
        if (refSub?.stripe_subscription_id && refSub?.stripe_customer_id) {
          try {
            const stripeSub = await stripe.subscriptions.retrieve(refSub.stripe_subscription_id);
            const monthlyAmount = stripeSub.items.data.reduce((sum,item)=>sum + Number(item.price.unit_amount || 0) * Number(item.quantity || 1),0);
            if (monthlyAmount > 0) {
              const credit = await stripe.customers.createBalanceTransaction(refSub.stripe_customer_id,{amount:-monthlyAmount,currency:"usd",description:"My Portland Wedding vendor referral — one free membership month"},{idempotencyKey:`mpw-referral-${referral.id}`});
              await db.from("vendor_referrals").update({status:"rewarded",qualified_at:new Date().toISOString(),rewarded_at:new Date().toISOString(),reward_amount_cents:monthlyAmount,reward_stripe_transaction_id:credit.id,updated_at:new Date().toISOString()}).eq("id",referral.id);
              const refContact=await vendorContact(db,referral.referrer_vendor_id);
              if(refContact?.email) await sendEmailOnce({eventKey:`referral_reward:${referral.id}`,to:refContact.email,subject:"You earned a free month on My Portland Wedding ♡",title:"Your next membership month is on us!",body:`<p>A vendor you referred joined My Portland Wedding and completed their first paid month.</p><p><strong>We added a $${(monthlyAmount/100).toFixed(2)} credit to your membership account</strong> — equal to one month of your current membership. It will automatically apply to a future Stripe invoice.</p><p>Keep sharing your referral link. Referral rewards stack.</p>${emailButton("Open My Referral Center",`${siteUrl}/vendor/dashboard#referrals`)}`});
            }
          } catch (rewardError) { console.error("Could not issue vendor referral reward", rewardError); }
        }
      }
    }
    const contact=await vendorContact(db,subscription.vendor_id); if(contact?.email){
      if(paid) await sendEmailOnce({eventKey:`payment_paid:${invoice.id}`,to:contact.email,subject:"My Portland Wedding payment received",title:"Payment received",body:`<p>We received your monthly My Portland Wedding membership payment. Your listing remains active.</p>${emailButton("Open Vendor Dashboard",`${siteUrl}/vendor/dashboard`)}`});
      else await sendEmailOnce({eventKey:`payment_failed:${invoice.id}`,to:contact.email,subject:"Action needed: My Portland Wedding payment failed",title:"We couldn't process your membership payment",body:`<p>Your latest membership payment did not go through, so your listing may be temporarily suspended.</p><p>Please review your billing information or contact <a href="mailto:hello@myportlandwedding.com">hello@myportlandwedding.com</a> for help.</p>${emailButton("Open Vendor Dashboard",`${siteUrl}/vendor/dashboard#membership`)}`});
    }
  }
}
