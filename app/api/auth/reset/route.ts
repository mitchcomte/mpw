import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { site } from "../../../../lib/site";
export async function POST(request: Request) {
  const form = await request.formData(); const email = String(form.get("email") || "").trim(); const portal=String(form.get("portal")||"vendor")==="couple"?"couple":"vendor";
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL(`/${portal}/login?message=Preview%20mode%3A%20password%20reset%20email%20was%20not%20sent`,request.url),303);
  const supabase = await createSupabaseServerClient();
  await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${site.url}/auth/callback?next=/${portal}/reset-password` });
  return NextResponse.redirect(new URL(`/${portal}/login?message=If%20that%20email%20exists,%20a%20reset%20link%20has%20been%20sent`, request.url), 303);
}
