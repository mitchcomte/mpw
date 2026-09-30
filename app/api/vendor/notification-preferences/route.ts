import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export async function POST(request: Request) {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/dashboard?preview=1#notifications",request.url),303);
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.redirect(new URL("/vendor/login",request.url),303);
  const form=await request.formData();
  const enabled=String(form.get("wedding_builder_match_emails")||"")==="on";
  const {error}=await supabase.from("vendor_profiles").update({wedding_builder_match_emails:enabled,updated_at:new Date().toISOString()}).eq("user_id",user.id);
  const url=error?`/vendor/dashboard?error=${encodeURIComponent(error.message)}#notifications`:`/vendor/dashboard?message=${encodeURIComponent(enabled?"Wedding Builder match emails are on.":"Wedding Builder match emails are off. Lead and inquiry emails stay on.")}#notifications`;
  return NextResponse.redirect(new URL(url,request.url),303);
}
