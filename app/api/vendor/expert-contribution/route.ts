import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";

export async function POST(req: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", req.url), 303);

  const form = await req.formData();
  const questionId = String(form.get("question_id") || "");
  const response = String(form.get("response") || "").trim();
  if (!questionId || response.length < 20 || response.length > 1200) {
    return NextResponse.redirect(new URL("/vendor/dashboard?error=Expert%20tip%20must%20be%2020%E2%80%931200%20characters%23expert-contributions", req.url), 303);
  }

  const admin = createAdminClient();
  const { data: vendor } = await admin.from("vendor_profiles")
    .select("id,primary_category")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found", req.url), 303);

  const { data: question } = await admin.from("expert_questions")
    .select("id,category,status")
    .eq("id", questionId)
    .eq("status", "active")
    .maybeSingle();
  if (!question || question.category !== vendor.primary_category) {
    return NextResponse.redirect(new URL("/vendor/dashboard?error=That%20expert%20question%20is%20not%20available%20for%20your%20category%23expert-contributions", req.url), 303);
  }

  const { error } = await admin.from("vendor_expert_contributions").upsert({
    question_id: questionId,
    vendor_id: vendor.id,
    response,
    status: "pending",
    editor_note: null,
    reviewed_at: null
  }, { onConflict: "question_id,vendor_id" });

  if (error) return NextResponse.redirect(new URL("/vendor/dashboard?error=We%20couldn%27t%20save%20your%20expert%20tip%23expert-contributions", req.url), 303);
  return NextResponse.redirect(new URL("/vendor/dashboard?message=Expert%20tip%20submitted%20for%20MPW%20editorial%20review%23expert-contributions", req.url), 303);
}
