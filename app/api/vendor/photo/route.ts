import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
const limits: Record<string,number> = { free:1, basic:5, professional:10, premium:20 };
export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", request.url), 303);
  const { data: vendor } = await supabase.from("vendor_profiles").select("id,plan").eq("user_id", user.id).single();
  if (!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found", request.url), 303);
  const { count } = await supabase.from("vendor_photos").select("id", { count:"exact", head:true }).eq("vendor_id", vendor.id);
  if ((count || 0) >= (limits[vendor.plan] || 5)) return NextResponse.redirect(new URL("/vendor/dashboard?error=Photo%20limit%20reached", request.url), 303);
  const form = await request.formData(); const file = form.get("photo");
  if (!(file instanceof File) || !file.size) return NextResponse.redirect(new URL("/vendor/dashboard?error=Choose%20an%20image", request.url), 303);
  if (file.size > 10*1024*1024 || !["image/jpeg","image/png","image/webp"].includes(file.type)) return NextResponse.redirect(new URL("/vendor/dashboard?error=Use%20a%20JPG,%20PNG%20or%20WebP%20under%2010MB", request.url), 303);
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${user.id}/${crypto.randomUUID()}.${ext}`;
  const { error: uploadError } = await supabase.storage.from("vendor-media").upload(path, file, { contentType:file.type, upsert:false });
  if (uploadError) return NextResponse.redirect(new URL(`/vendor/dashboard?error=${encodeURIComponent(uploadError.message)}`, request.url), 303);
  const { error } = await supabase.from("vendor_photos").insert({ vendor_id:vendor.id, storage_path:path, alt_text:String(form.get("alt_text")||"") });
  if (error) await supabase.storage.from("vendor-media").remove([path]);
  return NextResponse.redirect(new URL(error?`/vendor/dashboard?error=${encodeURIComponent(error.message)}`:"/vendor/dashboard?message=Photo%20uploaded", request.url), 303);
}
