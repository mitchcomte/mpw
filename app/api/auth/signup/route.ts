import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { categories, site } from "../../../../lib/site";
import { sendEmailOnce, emailButton, escapeHtml } from "../../../../lib/email";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim();
  const password = String(form.get("password") || "");
  const businessName = String(form.get("business_name") || "").trim();
  const requestedPlan = String(form.get("plan") || "professional");
  const primaryCategory = String(form.get("category") || "venues");
  const phone = String(form.get("phone") || "").trim();
  const website = String(form.get("website") || "").trim();
  const description = String(form.get("description") || "").trim();
  const foundingRequested = String(form.get("founding_offer_requested") || "") === "yes";
  const referralCode = String(form.get("referral_code") || "").trim();
  const validCategory = categories.some(([slug]) => slug === primaryCategory);
  const validPlan = ["free", "basic", "professional", "premium"].includes(requestedPlan);

  if (!email || password.length < 8 || !businessName || !validCategory || !validPlan) {
    return NextResponse.redirect(new URL("/vendor/signup?error=Please%20complete%20all%20required%20fields", request.url), 303);
  }

  let foundingPosition: number | null = null;
  const db = process.env.SUPABASE_SERVICE_ROLE_KEY ? createAdminClient() : null;

  // Reserve the founding spot BEFORE creating the auth account so a simultaneous signup
  // cannot accidentally be promised the same category position.
  if (foundingRequested && requestedPlan !== "free") {
    if (!db) return NextResponse.redirect(new URL("/vendor/signup?error=The%20Founding%20Vendor%20offer%20is%20temporarily%20unavailable.%20Please%20try%20again.", request.url), 303);
    const { data, error } = await db.rpc("reserve_founding_vendor_offer", {
      p_market_slug: site.marketSlug,
      p_category: primaryCategory,
      p_email: email
    });
    if (error) {
      console.error("Founding vendor reservation error", error);
      return NextResponse.redirect(new URL("/vendor/signup?error=We%20could%20not%20reserve%20your%20Founding%20Vendor%20spot.%20Please%20try%20again.", request.url), 303);
    }
    foundingPosition = typeof data === "number" ? data : Number(data || 0) || null;
    if (!foundingPosition) {
      return NextResponse.redirect(new URL(`/vendor/signup?error=${encodeURIComponent("Those five Founding Vendor spots were just claimed. Choose another category or a regular membership.")}`, request.url), 303);
    }
  }

  const plan = foundingPosition ? "premium" : requestedPlan;
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${site.url}/auth/callback?next=/vendor/dashboard`,
      data: {
        account_type: "vendor",
        business_name: businessName,
        plan,
        primary_category: primaryCategory,
        phone,
        website,
        description,
        founding_vendor: foundingPosition ? "yes" : "no",
        founding_vendor_position: foundingPosition ? String(foundingPosition) : ""
      }
    }
  });

  if (error || !data.user) {
    if (foundingPosition && db) {
      await db.rpc("release_founding_vendor_offer", { p_market_slug: site.marketSlug, p_category: primaryCategory, p_email: email });
    }
    return NextResponse.redirect(new URL(`/vendor/signup?error=${encodeURIComponent(error?.message || "Could not create your vendor account.")}`, request.url), 303);
  }

  if (foundingPosition && db) {
    const { data: vendor } = await db.from("vendor_profiles").select("id").eq("user_id", data.user.id).maybeSingle();
    if (!vendor) {
      await db.rpc("release_founding_vendor_offer", { p_market_slug: site.marketSlug, p_category: primaryCategory, p_email: email });
      return NextResponse.redirect(new URL("/vendor/dashboard?error=Your%20account%20was%20created%20but%20we%20could%20not%20attach%20the%20Founding%20Vendor%20offer.%20Please%20contact%20us.", request.url), 303);
    }

    await db.from("founding_vendor_memberships").update({
      vendor_id: vendor.id,
      reservation_email: email.toLowerCase(),
      reserved_until: null,
      updated_at: new Date().toISOString()
    }).eq("market_slug", site.marketSlug).eq("category", primaryCategory).eq("position", foundingPosition).eq("status", "reserved");

    await db.from("vendor_profiles").update({
      plan: "premium",
      founding_vendor: true,
      founding_vendor_position: foundingPosition,
      founding_vendor_category: primaryCategory,
      founding_vendor_forfeited_at: null,
      updated_at: new Date().toISOString()
    }).eq("id", vendor.id);
  }

  if (requestedPlan === "free" && db) {
    await db.from("vendor_profiles").update({ plan:"free", status:"active", updated_at:new Date().toISOString() }).eq("user_id", data.user.id);
  }

  // Record a valid vendor referral. Qualification/reward happens only after the referred vendor's first paid invoice.
  if (referralCode && db) {
    const match = referralCode.match(/^(.+)-([0-9a-f]{8})$/i);
    if (match) {
      const refSlug = match[1]; const idPrefix = match[2].toLowerCase();
      const { data: referrer } = await db.from("vendor_profiles").select("id,user_id,slug,plan,status").eq("slug", refSlug).maybeSingle();
      const { data: referred } = await db.from("vendor_profiles").select("id").eq("user_id", data.user.id).maybeSingle();
      if (referrer && referred && referrer.id.toLowerCase().startsWith(idPrefix) && referrer.user_id !== data.user.id && referrer.plan !== "free") {
        await db.from("vendor_referrals").upsert({referrer_vendor_id:referrer.id,referred_vendor_id:referred.id,referred_email:email.toLowerCase(),referral_code:referralCode,status:"signed_up",updated_at:new Date().toISOString()},{onConflict:"referred_email"});
      }
    }
  }

  await sendEmailOnce({eventKey:`vendor_welcome:${data.user.id}`,to:email,subject:"Welcome to My Portland Wedding",title:"Welcome — your vendor account is ready",body: requestedPlan === "free" ? `<p>Hi ${escapeHtml(businessName)},</p><p>Your free vendor listing is ready. Complete your basic profile now, or upgrade anytime to unlock Wedding Builder by My Portland Wedding eligibility, direct inquiries, more photos, social links and more.</p>${emailButton("Open Vendor Dashboard",`${site.url}/vendor/dashboard`)}` : `<p>Hi ${escapeHtml(businessName)},</p><p>Your vendor account has been created. Your next step is to activate your membership, then complete the profile details Wedding Builder by My Portland Wedding uses to match you with couples.</p>${emailButton("Continue to Membership",`${site.url}/vendor/checkout`)}${foundingPosition?`<p><strong>Founding Vendor #${foundingPosition}:</strong> your Premium membership is reserved at the Basic rate while your membership remains continuously active.</p>`:""}`});
  if (data.session) return NextResponse.redirect(new URL(requestedPlan === "free" ? "/vendor/dashboard?message=Your%20free%20listing%20is%20live" : "/vendor/checkout", request.url), 303);
  return NextResponse.redirect(new URL(requestedPlan === "free" ? "/vendor/login?message=Sign%20in%20to%20manage%20your%20free%20listing" : "/vendor/login?message=Please%20confirm%20your%20email%20before%20continuing%20to%20payment", request.url), 303);
}
