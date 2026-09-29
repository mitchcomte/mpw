import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";
export async function POST(request: Request) {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/dashboard?preview=1",request.url),303);
  const supabase = await createSupabaseServerClient(); const { data:{user} } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", request.url),303);
  const form=await request.formData(); const id=String(form.get("id")||"");
  const { data: photo } = await supabase.from("vendor_photos").select("id,storage_path,vendor_profiles!inner(user_id)").eq("id",id).single();
  if (!photo) return NextResponse.redirect(new URL("/vendor/dashboard",request.url),303);
  const owner = Array.isArray((photo as any).vendor_profiles) ? (photo as any).vendor_profiles[0]?.user_id : (photo as any).vendor_profiles?.user_id;
  if (owner !== user.id) return new NextResponse("Forbidden",{status:403});
  await supabase.storage.from("vendor-media").remove([photo.storage_path]); await supabase.from("vendor_photos").delete().eq("id",id);
  return NextResponse.redirect(new URL("/vendor/dashboard?message=Photo%20removed",request.url),303);
}
