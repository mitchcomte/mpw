import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const runtime = "nodejs";

// Backward-compatible route from earlier builds. Checkout now happens on-site at /vendor/checkout.
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login?message=Sign%20in%20to%20manage%20billing", req.url), 303);
  return NextResponse.redirect(new URL("/vendor/checkout", req.url), 303);
}
