"use client";
import { useState } from "react";
export default function SetupLinkActions({url,email,business}:{url:string,email:string,business:string}){
 const [copied,setCopied]=useState(false);
 const subject=encodeURIComponent(`Finish your My Portland Wedding vendor setup`);
 const body=encodeURIComponent(`Hi,\n\nThanks for joining My Portland Wedding. Use the secure link below to finish your vendor profile and activate your recurring monthly membership.\n\n${url}\n\nYour selected membership renews automatically each month until canceled. Cancellation requires contacting My Portland Wedding by phone or email and is effective after confirmation. The full terms are shown before payment.\n\nWe’re excited to feature ${business}!`);
 return <div className="inviteActions"><button type="button" className="btn light" onClick={async()=>{await navigator.clipboard.writeText(url);setCopied(true);setTimeout(()=>setCopied(false),1600)}}>{copied?"Copied!":"Copy Setup Link"}</button><a className="btn primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>Email Setup Link</a></div>
}
