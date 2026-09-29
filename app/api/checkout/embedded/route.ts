import { NextRequest, NextResponse } from "next/server";
import { createStripe, stripePrices } from "../../../../lib/stripe";
import { site } from "../../../../lib/site";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const requestedPlan = String(body?.plan || "professional");
    const recurringConsent = body?.recurring_consent === true;
    const promoCode = String(body?.promo_code || "").trim().toUpperCase();

    if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.json({error:"Billing is disabled on the MPW preview. No payment session was created.",preview:true},{status:409});
    if (!recurringConsent) return NextResponse.json({ error: "You must authorize recurring monthly billing before checkout." }, { status: 400 });
    if (!(requestedPlan in stripePrices)) return NextResponse.json({ error: "Invalid membership plan." }, { status: 400 });

    const plan = requestedPlan as keyof typeof stripePrices;
    const stripe = createStripe();
    if (!stripe) return NextResponse.json({ error: "Stripe billing is not fully configured." }, { status: 503 });

    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Please sign in before activating your membership." }, { status: 401 });

    const { data: vendor } = await supabase
      .from("vendor_profiles")
      .select("id,business_name,email,plan,founding_vendor,founding_vendor_position,founding_vendor_category")
      .eq("user_id", user.id)
      .maybeSingle();
    if (!vendor) return NextResponse.json({ error: "Vendor profile not found." }, { status: 404 });

    if (vendor.plan !== plan) {
      return NextResponse.json({ error: "The selected membership does not match your vendor account. Refresh the page and try again." }, { status: 409 });
    }

    const foundingVendor = vendor.founding_vendor === true && plan === "premium";
    // Founding Vendors receive Premium product access while Stripe bills the Basic recurring Price.
    const price = foundingVendor ? stripePrices.basic : stripePrices[plan];
    if (!price) return NextResponse.json({ error: "Stripe billing is not fully configured for this membership." }, { status: 503 });

    const { data: existing } = await supabase
      .from("subscriptions")
      .select("stripe_customer_id,stripe_subscription_id,status")
      .eq("vendor_id", vendor.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing?.stripe_subscription_id && ["active", "trialing", "past_due", "unpaid"].includes(existing.status || "")) {
      return NextResponse.json({ error: "This vendor already has a subscription. Contact My Portland Wedding if you need billing assistance." }, { status: 409 });
    }

    let secondMonthPromo: any = null;
    if (promoCode) {
      const admin = (await import("../../../../lib/supabase/admin")).createAdminClient();
      const { data: promo } = await admin.from("vendor_promo_codes").select("id,code,stripe_coupon_id,max_redemptions,redemption_count,active,expires_at,discount_type").eq("code", promoCode).maybeSingle();
      const valid = promo?.active === true && promo.discount_type === "second_month_free" && Number(promo.redemption_count || 0) < Number(promo.max_redemptions || 0) && (!promo.expires_at || new Date(promo.expires_at) > new Date());
      if (!valid) return NextResponse.json({ error: "That promo code is invalid, expired or fully redeemed." }, { status: 400 });
      secondMonthPromo = promo;
    }

    const metadata = {
      vendor_id: vendor.id,
      user_id: user.id,
      plan,
      market: site.marketSlug,
      recurring_consent: "yes",
      billing_terms_version: foundingVendor ? "2026-09-v2-founding" : "2026-09-v1",
      founding_vendor: foundingVendor ? "yes" : "no",
      founding_vendor_position: foundingVendor ? String(vendor.founding_vendor_position || "") : "",
      billed_plan: foundingVendor ? "basic" : plan,
      promo_code: secondMonthPromo?.code || "",
      second_month_coupon_id: secondMonthPromo?.stripe_coupon_id || "",
      promo_record_id: secondMonthPromo?.id || ""
    };

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      ui_mode: "embedded",
      line_items: [{ price, quantity: 1 }],
      ...(existing?.stripe_customer_id
        ? { customer: existing.stripe_customer_id }
        : { customer_email: vendor.email || user.email || undefined }),
      allow_promotion_codes: true,
      return_url: `${site.url}/vendor/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      redirect_on_completion: "always",
      metadata,
      subscription_data: { metadata }
    });

    if (!session.client_secret) return NextResponse.json({ error: "Stripe did not return a checkout client secret." }, { status: 502 });
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Embedded checkout error", error);
    return NextResponse.json({ error: "Could not start secure checkout. Please try again." }, { status: 500 });
  }
}
