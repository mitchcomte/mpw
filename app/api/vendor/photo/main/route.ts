import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", request.url), 303);

  const { data: vendor } = await supabase.from("vendor_profiles").select("id").eq("user_id", user.id).single();
  if (!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found#photos", request.url), 303);

  const form = await request.formData();
  const photoId = String(form.get("id") || "");
  if (!photoId) return NextResponse.redirect(new URL("/vendor/dashboard?error=Choose%20a%20photo#photos", request.url), 303);

  const { data: selected } = await supabase.from("vendor_photos").select("id").eq("id", photoId).eq("vendor_id", vendor.id).maybeSingle();
  if (!selected) return NextResponse.redirect(new URL("/vendor/dashboard?error=Photo%20not%20found#photos", request.url), 303);

  const { data: photos, error: readError } = await supabase.from("vendor_photos").select("id,sort_order,created_at").eq("vendor_id", vendor.id).order("sort_order").order("created_at");
  if (readError) return NextResponse.redirect(new URL(`/vendor/dashboard?error=${encodeURIComponent(readError.message)}#photos`, request.url), 303);

  const ordered = [selected, ...(photos || []).filter((photo:any) => photo.id !== photoId)];
  for (let index = 0; index < ordered.length; index++) {
    const { error } = await supabase.from("vendor_photos").update({ sort_order:index }).eq("id", ordered[index].id).eq("vendor_id", vendor.id);
    if (error) return NextResponse.redirect(new URL(`/vendor/dashboard?error=${encodeURIComponent(error.message)}#photos`, request.url), 303);
  }

  return NextResponse.redirect(new URL("/vendor/dashboard?message=Main%20profile%20photo%20updated#photos", request.url), 303);
}
