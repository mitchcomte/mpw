import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
export async function POST(request: Request) {
  const form = await request.formData(); const password = String(form.get("password") || ""); const portal=String(form.get("portal")||"vendor")==="couple"?"couple":"vendor";
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL(`/${portal}/reset-password?preview=1`,request.url),303);
  if (password.length < 8) return NextResponse.redirect(new URL(`/${portal}/reset-password?error=Password%20must%20be%20at%20least%208%20characters`, request.url), 303);
  const supabase = await createSupabaseServerClient(); const { error } = await supabase.auth.updateUser({ password });
  if (error) return NextResponse.redirect(new URL(`/${portal}/reset-password?error=${encodeURIComponent(error.message)}`, request.url), 303);
  return NextResponse.redirect(new URL(`/${portal}/dashboard?message=Password%20updated`, request.url), 303);
}
