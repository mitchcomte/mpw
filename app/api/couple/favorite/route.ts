import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export async function POST(request: Request) {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1"){const body=await request.json().catch(()=>({}));return NextResponse.json({favorite:Boolean(body.favorite),preview:true});}
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const body = await request.json();
  const vendorId = String(body.vendor_id || "");
  const favorite = Boolean(body.favorite);
  const source = body.source === "wedding_builder" ? "wedding_builder" : "profile";
  if (!vendorId) return NextResponse.json({ error: "Vendor required" }, { status: 400 });

  if (favorite) {
    const { error } = await supabase.from("favorites").insert({ user_id: user.id, vendor_id: vendorId });
    if (error && error.code !== "23505") return NextResponse.json({ error: error.message }, { status: 400 });
    if (!error && source === "wedding_builder") await supabase.from("analytics_events").insert({ market_slug:"portland", vendor_id:vendorId, event_type:"builder_save" });
  } else {
    const { error } = await supabase.from("favorites").delete().eq("user_id", user.id).eq("vendor_id", vendorId);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ favorite });
}
