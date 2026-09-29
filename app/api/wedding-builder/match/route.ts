import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { sendVendorPush } from "../../../../lib/web-push";
import { consumeBuilderQuota } from "../../../../lib/wedding-builder-guard";
import { sendEmailOnce, emailButton, siteUrl } from "../../../../lib/email";

const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export async function POST(req:NextRequest){
  try{
    if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.json({ok:true,count:0,preview:true});
    if(!(await consumeBuilderQuota(req,"match"))) return NextResponse.json({error:"Too many Wedding Builder by My Portland Wedding requests. Please try again shortly."},{status:429});
    const b=await req.json();
    const sessionId=String(b?.builder_session_id||"").slice(0,120);
    const vendorIds=Array.isArray(b?.vendor_ids)?[...new Set(b.vendor_ids.map(String).filter((x:string)=>uuid.test(x)))].slice(0,12):[];
    if(!sessionId||!vendorIds.length) return NextResponse.json({ok:true,count:0});
    const admin=createAdminClient();
    const {data:vendors,error}=await admin.from("vendor_profiles").select("id,user_id,business_name,email").in("id",vendorIds).eq("status","active");
    if(error) throw error;
    let created=0;
    for(const v of vendors||[]){
      if(!v.user_id) continue;
      const event={builder_session_id:sessionId,vendor_id:v.id,roster_mode:String(b?.roster_mode||"match").slice(0,30),city:String(b?.city||"Portland").slice(0,80),wedding_budget:Number(b?.budget||0)||null,guest_count:Number(b?.guests||0)||null,wedding_style:String(b?.style||"").slice(0,80)||null};
      const {error:insertError}=await admin.from("wedding_builder_match_events").insert(event);
      if(insertError){if(insertError.code==="23505") continue; throw insertError}
      created++;
      const city=event.city||"Portland";
      const body=`A couple planning in ${city} has ${v.business_name} in a personalized Wedding Builder by My Portland Wedding roster.`;
      await admin.from("vendor_notifications").insert({vendor_id:v.id,user_id:v.user_id,type:"wedding_builder_match",title:"You're in a Wedding Builder by My Portland Wedding roster 💍",body,href:"/vendor/dashboard#notifications"});
      await sendVendorPush(v.user_id,{title:"You're in a Wedding Builder by My Portland Wedding roster 💍",body,url:"/vendor/dashboard#notifications",tag:`builder-${v.id}`});
      const {data:account}=await admin.auth.admin.getUserById(v.user_id);
      const notificationEmail=account?.user?.email||v.email;
      if(notificationEmail) await sendEmailOnce({eventKey:`builder_match:${sessionId}:${v.id}`,to:notificationEmail,subject:"You appeared in a Wedding Builder by My Portland Wedding roster",title:"A couple matched with your business 💍",body:`<p>${body}</p><p>This is a private match signal, not a qualified lead yet. No couple contact information is shared unless they explicitly request contact.</p>${emailButton("View Vendor Performance",`${siteUrl}/vendor/dashboard#performance`)}`});
    }
    return NextResponse.json({ok:true,count:created});
  }catch(e:any){return NextResponse.json({error:e?.message||"Unable to record Wedding Builder by My Portland Wedding matches"},{status:500})}
}
