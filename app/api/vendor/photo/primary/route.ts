import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";

export async function POST(request: Request) {
  if (process.env.VERCEL_ENV === "preview" || process.env.MPW_PREVIEW_MODE === "1") {
    return NextResponse.redirect(new URL("/vendor/photos?preview=1", request.url), 303);
  }

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", request.url), 303);

  const form = await request.formData();
  const photoId = String(form.get("photo_id") || "");
  if (!photoId) return NextResponse.redirect(new URL("/vendor/photos?error=Choose%20a%20photo", request.url), 303);

  const { data: vendor } = await supabase.from("vendor_profiles").select("id").eq("user_id", user.id).single();
  if (!vendor) return NextResponse.redirect(new URL("/vendor/photos?error=Vendor%20profile%20not%20found", request.url), 303);

  const { data: chosen } = await supabase.from("vendor_photos").select("id").eq("id", photoId).eq("vendor_id", vendor.id).maybeSingle();
  if (!chosen) return NextResponse.redirect(new URL("/vendor/photos?error=Photo%20not%20found", request.url), 303);

  // Existing marketplace/profile queries already order vendor_photos by sort_order.
  // A negative value makes this image the first image everywhere without a schema migration.
  const { error: resetError } = await supabase.from("vendor_photos").update({ sort_order: 0 }).eq("vendor_id", vendor.id).lt("sort_order", 0);
  if (resetError) return NextResponse.redirect(new URL(`/vendor/photos?error=${encodeURIComponent(resetError.message)}`, request.url), 303);

  const { error } = await supabase.from("vendor_photos").update({ sort_order: -1000 }).eq("id", photoId).eq("vendor_id", vendor.id);
  return NextResponse.redirect(new URL(error ? `/vendor/photos?error=${encodeURIComponent(error.message)}` : "/vendor/photos?message=Main%20profile%20photo%20updated", request.url), 303);
}
