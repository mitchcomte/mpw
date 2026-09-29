import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/couple/login", request.url), 303);

  const payload = {
    user_id: user.id,
    market_slug: "portland",
    first_name: String(form.get("first_name") || "").trim() || null,
    partner_name: String(form.get("partner_name") || "").trim() || null,
    wedding_date: String(form.get("wedding_date") || "").trim() || null,
    wedding_budget: Number(form.get("wedding_budget")||0)||null,
    guest_count: Number(form.get("guest_count")||0)||null,
    wedding_city: String(form.get("wedding_city")||"Portland").trim()||"Portland",
    wedding_style: String(form.get("wedding_style")||"").trim()||null,
    vendor_discoverable: form.get("vendor_discoverable")==="on",
    updated_at: new Date().toISOString()
  };
  const { error } = await supabase.from("couple_profiles").upsert(payload, { onConflict: "user_id" });
  const target = error ? `/couple/dashboard?error=${encodeURIComponent(error.message)}` : "/couple/dashboard?message=Planning%20profile%20updated";
  return NextResponse.redirect(new URL(target, request.url), 303);
}
