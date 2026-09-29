import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/vendor/dashboard";
  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(next, request.url));
  }
  const errorTarget = next.startsWith("/couple") ? "/couple/login?error=Could%20not%20confirm%20your%20account" : "/vendor/login?error=Could%20not%20confirm%20your%20account";
  return NextResponse.redirect(new URL(errorTarget, request.url));
}
