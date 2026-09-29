import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { site } from "../../../../lib/site";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim();
  const password = String(form.get("password") || "");
  const firstName = String(form.get("first_name") || "").trim();
  const partnerName = String(form.get("partner_name") || "").trim();
  const weddingDate = String(form.get("wedding_date") || "").trim();
  const consumerTermsConsent = String(form.get("consumer_terms_consent") || "");

  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/couple/signup?preview=1",request.url),303);

  if (!email || password.length < 8 || !firstName || consumerTermsConsent !== "yes") {
    return NextResponse.redirect(new URL("/couple/signup?error=Please%20complete%20all%20required%20fields", request.url), 303);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${site.url}/auth/callback?next=/couple/dashboard`,
      data: { account_type: "couple", first_name: firstName, partner_name: partnerName, wedding_date: weddingDate, consumer_terms_consent: "yes", consumer_terms_version: "2026-09-v1" }
    }
  });

  if (error) return NextResponse.redirect(new URL(`/couple/signup?error=${encodeURIComponent(error.message)}`, request.url), 303);
  if (data.session) return NextResponse.redirect(new URL("/couple/dashboard", request.url), 303);
  return NextResponse.redirect(new URL("/couple/login?message=Check%20your%20email%20to%20confirm%20your%20account", request.url), 303);
}
