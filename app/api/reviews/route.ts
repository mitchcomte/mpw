import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export async function POST(request: Request){
  const form=await request.formData(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser();
  const slug=String(form.get("vendor_slug")||"");
  if(!user) return NextResponse.redirect(new URL(`/couple/login?message=${encodeURIComponent("Sign in to leave a review")}`,request.url),303);
  const vendorId=String(form.get("vendor_id")||""); const rating=Math.max(1,Math.min(5,Number(form.get("rating")||5)));
  const title=String(form.get("title")||"").trim(); const body=String(form.get("body")||"").trim();
  if(!vendorId || !body) return NextResponse.redirect(new URL(`/vendor/${slug}?review=error`,request.url),303);
  const {error}=await supabase.from("reviews").insert({vendor_id:vendorId,reviewer_user_id:user.id,rating,title:title||null,body,status:"pending"});
  return NextResponse.redirect(new URL(`/vendor/${slug}?review=${error?"error":"submitted"}`,request.url),303);
}
