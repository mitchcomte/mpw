import { createAdminClient } from "./supabase/admin";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.myportlandwedding.com";
const from = process.env.EMAIL_FROM || "My Portland Wedding <hello@myportlandwedding.com>";

function shell(title:string, body:string){
  return `<!doctype html><html><body style="margin:0;background:#fbf7f3;font-family:Arial,sans-serif;color:#302b2b"><div style="max-width:620px;margin:0 auto;padding:32px 18px"><div style="background:#fff;border:1px solid #eadfd8;border-radius:20px;padding:30px"><div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#8b6f68">My Portland Wedding</div><h1 style="font-family:Georgia,serif;font-size:28px;margin:10px 0 18px">${title}</h1>${body}<p style="margin-top:28px;font-size:12px;color:#837874">My Portland Wedding · Plan Local. Love Always.</p></div></div></body></html>`;
}
export function emailButton(label:string, href:string){return `<p style="margin:24px 0"><a href="${href}" style="display:inline-block;background:#5f6f61;color:white;text-decoration:none;padding:13px 20px;border-radius:999px;font-weight:700">${label}</a></p>`}
export function escapeHtml(v:string){return v.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]||c))}

export async function sendEmailOnce(args:{eventKey:string,to:string,subject:string,title:string,body:string}){
  const apiKey=process.env.RESEND_API_KEY;
  if(!apiKey||!args.to) return {sent:false,reason:"not_configured"};
  const db=createAdminClient();
  const {error:claimError}=await db.from("transactional_email_events").insert({event_key:args.eventKey,recipient:args.to,email_type:args.eventKey.split(":")[0]});
  if(claimError?.code==="23505") return {sent:false,reason:"already_sent"};
  if(claimError) throw claimError;
  try{
    const res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[args.to],subject:args.subject,html:shell(args.title,args.body)})});
    if(!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    const payload=await res.json().catch(()=>({}));
    await db.from("transactional_email_events").update({provider_id:payload?.id||null,sent_at:new Date().toISOString()}).eq("event_key",args.eventKey);
    return {sent:true};
  }catch(error){
    await db.from("transactional_email_events").delete().eq("event_key",args.eventKey);
    console.error("Transactional email failed",args.eventKey,error);
    return {sent:false,reason:"send_failed"};
  }
}
export {siteUrl};
