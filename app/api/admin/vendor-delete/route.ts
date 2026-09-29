import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
export async function POST(req:NextRequest){
 const form=await req.formData(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return NextResponse.redirect(new URL("/admin/login",req.url),303); const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!admin) return new NextResponse("Forbidden",{status:403});
 const vendorId=String(form.get("vendor_id")||""); if(String(form.get("confirm")||"")!=="DELETE") return NextResponse.redirect(new URL(`/admin/vendors/${vendorId}?error=Deletion%20confirmation%20required`,req.url),303);
 const service=createAdminClient(); const {data:vendor}=await service.from("vendor_profiles").select("user_id,business_name").eq("id",vendorId).maybeSingle(); if(!vendor) return NextResponse.redirect(new URL("/admin/vendors?message=Vendor%20not%20found",req.url),303);
 const {data:photoRows}=await service.from("vendor_photos").select("storage_path").eq("vendor_id",vendorId); const paths=(photoRows||[]).map((p:any)=>p.storage_path).filter(Boolean); if(paths.length) await service.storage.from("vendor-media").remove(paths);
 await service.from("favorites").delete().eq("vendor_id",vendorId); await service.from("reviews").delete().eq("vendor_id",vendorId); await service.from("leads").delete().eq("vendor_id",vendorId); await service.from("analytics_events").delete().eq("vendor_id",vendorId); await service.from("vendor_photos").delete().eq("vendor_id",vendorId); await service.from("subscriptions").delete().eq("vendor_id",vendorId); await service.from("founding_vendor_memberships").delete().eq("vendor_id",vendorId);
 const {error}=await service.from("vendor_profiles").delete().eq("id",vendorId); if(error) return NextResponse.redirect(new URL(`/admin/vendors/${vendorId}?error=${encodeURIComponent(error.message)}`,req.url),303);
 if(vendor.user_id && vendor.user_id!==user.id) await service.auth.admin.deleteUser(vendor.user_id);
 return NextResponse.redirect(new URL(`/admin/vendors?message=${encodeURIComponent(`${vendor.business_name||"Vendor"} permanently removed`)}`,req.url),303);
}
