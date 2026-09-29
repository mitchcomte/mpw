import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
export async function POST(request:Request){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/admin?message=Preview%20mode%3A%20vendor%20status%20change%20simulated",request.url),303);
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return NextResponse.redirect(new URL("/vendor/login",request.url),303);
 const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!admin) return new NextResponse("Forbidden",{status:403});
 const form=await request.formData(); const vendorId=String(form.get("vendor_id")||""); const status=String(form.get("status")||"pending"); if(!["draft","pending","active","suspended"].includes(status)) return new NextResponse("Invalid status",{status:400});
 const {error}=await supabase.from("vendor_profiles").update({status,updated_at:new Date().toISOString()}).eq("id",vendorId); if(error) return new NextResponse(error.message,{status:400}); return NextResponse.redirect(new URL("/admin",request.url),303);
}
