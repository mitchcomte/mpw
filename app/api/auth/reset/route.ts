import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { site } from "../../../../lib/site";
export async function POST(request: Request) {
  const form = await request.formData(); const email = String(form.get("email") || "").trim(); const portal=String(form.get("portal")||"vendor")==="couple"?"couple":"vendor";
  const supabase = await createSupabaseServerClient();
  await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${site.url}/auth/callback?next=/${portal}/reset-password` });
  return NextResponse.redirect(new URL(`/${portal}/login?message=If%20that%20email%20exists,%20a%20reset%20link%20has%20been%20sent`, request.url), 303);
}
