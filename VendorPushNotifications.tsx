"use client";
import {useEffect,useState} from "react";

function urlBase64ToUint8Array(base64String:string){
  const padding="=".repeat((4-base64String.length%4)%4);
  const base64=(base64String+padding).replace(/-/g,"+").replace(/_/g,"/");
  const raw=atob(base64);return Uint8Array.from([...raw].map(c=>c.charCodeAt(0)));
}
export default function VendorPushNotifications({publicKey}:{publicKey:string}){
  const [supported,setSupported]=useState(true);const[enabled,setEnabled]=useState(false);const[busy,setBusy]=useState(false);const[msg,setMsg]=useState("");const[needsInstall,setNeedsInstall]=useState(false);
  useEffect(()=>{(async()=>{
    const ok="serviceWorker" in navigator&&"PushManager" in window&&"Notification" in window;
    setSupported(ok);if(!ok)return;
    const ios=/iPad|iPhone|iPod/.test(navigator.userAgent);const standalone=window.matchMedia("(display-mode: standalone)").matches||(navigator as Navigator & {standalone?:boolean}).standalone===true;
    if(ios&&!standalone)setNeedsInstall(true);
    const reg=await navigator.serviceWorker.register("/sw.js");const sub=await reg.pushManager.getSubscription();setEnabled(!!sub);
  })().catch(()=>setSupported(false))},[]);
  async function enable(){
    if(!publicKey){setMsg("Phone notifications need the VAPID keys added in Vercel first.");return}
    if(needsInstall){setMsg("On iPhone, add My Portland Wedding to your Home Screen first, open it there, then tap Enable.");return}
    setBusy(true);setMsg("");
    try{
      const permission=await Notification.requestPermission();if(permission!=="granted"){setMsg("Notifications weren't allowed. You can enable them later in your browser or phone settings.");return}
      const reg=await navigator.serviceWorker.ready;
      let sub=await reg.pushManager.getSubscription();
      if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(publicKey)});
      const j=sub.toJSON();const r=await fetch("/api/vendor/push/subscribe",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(j)});if(!r.ok)throw new Error("Could not save notification subscription");
      setEnabled(true);setMsg("You're set! Wedding Builder by My Portland Wedding matches can now pop up on this device. ✨");
    }catch(e:any){setMsg(e?.message||"Could not enable notifications") }finally{setBusy(false)}
  }
  async function disable(){setBusy(true);try{const reg=await navigator.serviceWorker.ready;const sub=await reg.pushManager.getSubscription();if(sub){await fetch("/api/vendor/push/unsubscribe",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({endpoint:sub.endpoint})});await sub.unsubscribe()}setEnabled(false);setMsg("Notifications are off on this device.")}finally{setBusy(false)}}
  if(!supported)return <p className="meta">This browser doesn't support website push notifications. Your dashboard notifications will still appear here.</p>;
  return <div className="pushSetup"><div className="pushPhone">📱</div><div><strong>{enabled?"Phone notifications are on":"Get Wedding Builder by My Portland Wedding matches on your phone"}</strong><p className="meta">We'll send a website notification when your business is placed in a couple's personalized Wedding Builder by My Portland Wedding roster, plus a separate alert if they request contact.</p>{needsInstall&&!enabled&&<p className="pushHint"><b>iPhone:</b> use Share → Add to Home Screen, open the saved app, then enable notifications.</p>}{msg&&<p className="pushMessage">{msg}</p>}</div><button className={`btn ${enabled?"light":"primary"}`} disabled={busy} onClick={enabled?disable:enable}>{busy?"One sec…":enabled?"Turn Off":"Enable Phone Notifications"}</button></div>
}
