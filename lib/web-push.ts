import webpush from "web-push";
import { createAdminClient } from "./supabase/admin";

let configured = false;
function configure(){
  if(configured) return true;
  const publicKey=process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey=process.env.VAPID_PRIVATE_KEY;
  const subject=process.env.VAPID_SUBJECT || "mailto:hello@myportlandwedding.com";
  if(!publicKey || !privateKey) return false;
  webpush.setVapidDetails(subject,publicKey,privateKey);
  configured=true;
  return true;
}

export async function sendVendorPush(userId:string,payload:{title:string;body:string;url?:string;tag?:string}){
  if(!configure()) return {sent:0,configured:false};
  const admin=createAdminClient();
  const {data:subs}=await admin.from("vendor_push_subscriptions").select("id,endpoint,p256dh,auth").eq("user_id",userId);
  let sent=0;
  for(const sub of subs||[]){
    try{
      await webpush.sendNotification({endpoint:sub.endpoint,keys:{p256dh:sub.p256dh,auth:sub.auth}},JSON.stringify(payload),{TTL:60*60});
      sent++;
    }catch(err:any){
      if(err?.statusCode===404 || err?.statusCode===410){
        await admin.from("vendor_push_subscriptions").delete().eq("id",sub.id);
      }
    }
  }
  return {sent,configured:true};
}
