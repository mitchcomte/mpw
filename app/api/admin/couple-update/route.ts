import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";

export async function POST(req:NextRequest){
 const form=await req.formData(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser();
 if(!user) return NextResponse.redirect(new URL("/admin/login",req.url),303);
 const {data:isAdmin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!isAdmin) return new NextResponse("Forbidden",{status:403});
 const userId=String(form.get("user_id")||""); if(!userId) return NextResponse.redirect(new URL("/admin/couples",req.url),303);
 const statuses=["active","paused","archived"], stages=["new","planning","contacting_vendors","booked_vendors","married","inactive"];
 const status=String(form.get("account_status")||"active"), stage=String(form.get("couple_stage")||"new");
 const update={
  account_status:statuses.includes(status)?status:"active",
  couple_stage:stages.includes(stage)?stage:"new",
  first_name:String(form.get("first_name")||"").trim()||null,
  partner_name:String(form.get("partner_name")||"").trim()||null,
  wedding_date:String(form.get("wedding_date")||"")||null,
  last_contact_at:String(form.get("last_contact_at")||"")||null,
  next_follow_up_at:String(form.get("next_follow_up_at")||"")||null,
  admin_notes:String(form.get("admin_notes")||"").trim()||null,
  updated_at:new Date().toISOString()
 };
 const admin=createAdminClient(); const {error}=await admin.from("couple_profiles").update(update).eq("user_id",userId);
 const url=error?`/admin/couples/${userId}?error=${encodeURIComponent(error.message)}`:`/admin/couples/${userId}?message=${encodeURIComponent("Couple record updated")}`;
 return NextResponse.redirect(new URL(url,req.url),303);
}
