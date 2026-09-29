import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { sendVendorPush } from "../../../../lib/web-push";
import { consumeBuilderQuota } from "../../../../lib/wedding-builder-guard";
import { sendEmailOnce, emailButton, escapeHtml, siteUrl } from "../../../../lib/email";

const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(req:NextRequest){
  try{
    if(!(await consumeBuilderQuota(req,"lead"))) return NextResponse.json({error:"Too many contact requests. Please wait a bit and try again."},{status:429});
    const b=await req.json();
    if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1")return NextResponse.json({ok:true,count:0,preview:true});
    const name=String(b?.name||"").trim().slice(0,120), email=String(b?.email||"").trim().toLowerCase().slice(0,254), phone=String(b?.phone||"").trim().slice(0,40);
    const vendorIds=Array.isArray(b?.vendor_ids)?[...new Set(b.vendor_ids.map(String).filter((x:string)=>uuid.test(x)))].slice(0,10):[];
    const contactMethod=String(b?.contact_method||"");
    if(!b?.consent||!vendorIds.length||!name||!emailPattern.test(email))return NextResponse.json({error:"Missing required consent or valid contact information"},{status:400});
    if(!["email","phone","text"].includes(contactMethod))return NextResponse.json({error:"Invalid contact method"},{status:400});
    if((contactMethod==="phone"||contactMethod==="text")&&!phone)return NextResponse.json({error:"Phone number required"},{status:400});
    const db=createAdminClient();
    const {data:vendors,error:vendorError}=await db.from("vendor_profiles").select("id,slug,business_name,user_id,email,plan").in("id",vendorIds).eq("market_slug","portland").eq("status","active").neq("plan","free");
    if(vendorError)throw vendorError;
    if(!vendors?.length)return NextResponse.json({error:"No active contactable vendors"},{status:404});
    const message=`Wedding Builder by My Portland Wedding qualified lead · ${b.city||"Portland"} · ${b.guests||"?"} guests · $${Number(b.budget||0).toLocaleString()} budget · ${b.style||"Style not specified"} · Preferred contact: ${contactMethod}. Couple explicitly requested contact from this vendor.`;
    const rows=vendors.map((v:any)=>({vendor_id:v.id,vendor_slug:v.slug,market_slug:"portland",name,email,phone:contactMethod==="email"?null:phone||null,wedding_date:b.wedding_date||null,message,status:"new",source:"wedding_builder",contact_method:contactMethod}));
    const {data:leads,error}=await db.from("leads").insert(rows).select("id,vendor_id");if(error)throw error;
    const notifyRows=vendors.filter((v:any)=>v.user_id).map((v:any)=>({vendor_id:v.id,user_id:v.user_id,type:"wedding_builder_lead",title:"New Wedding Builder by My Portland Wedding lead 💍",body:`${name} requested information from ${v.business_name}.`,href:"/vendor/dashboard#leads"}));
    if(notifyRows.length)await db.from("vendor_notifications").insert(notifyRows);
    await Promise.all(vendors.filter((v:any)=>v.user_id).map((v:any)=>sendVendorPush(v.user_id,{title:"New Wedding Builder by My Portland Wedding lead 💌",body:`${name} requested information from ${v.business_name}.`,url:"/vendor/dashboard#leads",tag:`lead-${v.id}`})));
    await Promise.all(vendors.map(async(v:any)=>{const lead=(leads||[]).find((l:any)=>l.vendor_id===v.id); if(!lead)return; const {data:account}=v.user_id?await db.auth.admin.getUserById(v.user_id):{data:{user:null}}; const notificationEmail=account?.user?.email||v.email; if(!notificationEmail)return; await sendEmailOnce({eventKey:`builder_lead:${lead.id}`,to:notificationEmail,subject:`New Wedding Builder by My Portland Wedding lead for ${v.business_name}`,title:"A couple wants to hear from you 💌",body:`<p><strong>${escapeHtml(name)}</strong> explicitly requested contact from your business after building a personalized wedding roster.</p><p><strong>Wedding:</strong> ${escapeHtml(String(b.city||"Portland"))} · ${escapeHtml(String(b.guests||"?"))} guests · $${Number(b.budget||0).toLocaleString()} budget<br><strong>Preferred contact:</strong> ${escapeHtml(contactMethod)}</p><p><strong>Email:</strong> ${escapeHtml(email)}${contactMethod!=="email"&&phone?`<br><strong>Phone:</strong> ${escapeHtml(phone)}`:""}</p>${emailButton("Open Lead Center",`${siteUrl}/vendor/dashboard#leads`)}`})}));
    return NextResponse.json({ok:true,count:vendors.length});
  }catch(e:any){return NextResponse.json({error:e?.message||"Unable to send requests"},{status:500})}
}
