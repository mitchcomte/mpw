import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
export async function POST(req: NextRequest){
 const form=await req.formData(); const supabase=await createSupabaseServerClient();
 const {error}=await supabase.auth.signInWithPassword({email:String(form.get("email")||"").trim(),password:String(form.get("password")||"")});
 if(error) return NextResponse.redirect(new URL(`/vendor/login?error=${encodeURIComponent(error.message)}`,req.url),303);
 return NextResponse.redirect(new URL("/vendor/dashboard",req.url),303);
}
