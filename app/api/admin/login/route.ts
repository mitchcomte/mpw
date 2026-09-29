import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export async function POST(req: NextRequest){
  const form=await req.formData();
  const email=String(form.get("email")||"").trim();
  const password=String(form.get("password")||"");
  const supabase=await createSupabaseServerClient();

  const {data,error}=await supabase.auth.signInWithPassword({email,password});
  if(error || !data.user){
    return NextResponse.redirect(new URL(`/admin/login?error=${encodeURIComponent(error?.message||"Unable to sign in.")}`,req.url),303);
  }

  const {data:isAdmin,error:adminError}=await supabase.from("admin_users").select("user_id").eq("user_id",data.user.id).maybeSingle();
  if(adminError || !isAdmin){
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL("/admin/login?error=This%20account%20does%20not%20have%20administrator%20access.",req.url),303);
  }

  return NextResponse.redirect(new URL("/admin",req.url),303);
}
