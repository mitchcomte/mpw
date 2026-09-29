"use client";
import { useMemo, useState } from "react";

type Referral = { id:string; referred_email:string; status:string; created_at:string; rewarded_at?:string|null; reward_amount_cents?:number|null };
export default function VendorReferralCenter({code, referrals}:{code:string;referrals:Referral[]}){
 const [copied,setCopied]=useState(false);
 const link=useMemo(()=>`https://www.myportlandwedding.com/vendor/signup?ref=${encodeURIComponent(code)}`,[code]);
 const rewarded=referrals.filter(r=>r.status==="rewarded").length;
 const pending=referrals.filter(r=>r.status==="signed_up"||r.status==="qualified").length;
 async function copy(){await navigator.clipboard.writeText(link);setCopied(true);setTimeout(()=>setCopied(false),1800)}
 const mail=`mailto:?subject=${encodeURIComponent("Join me on My Portland Wedding")}&body=${encodeURIComponent(`I thought you'd be a great fit for My Portland Wedding. It's a local wedding planning platform built around Wedding Builder by My Portland Wedding, which matches couples with local vendors based on their budget, style and priorities.\n\nJoin here: ${link}`)}`;
 return <div className="referralCenter">
  <div className="referralHero"><div><span className="eyebrow">Vendor referral program</span><h2>Refer a Vendor. Get a Month on Us. ♡</h2><p>Know another great local wedding pro? When a vendor joins a paid My Portland Wedding membership through your referral link and completes their first successful paid month, <strong>your next membership month is on us.</strong></p></div><div className="referralReward"><strong>1</strong><span>FREE MONTH</span><small>for every qualified referral</small></div></div>
  <div className="referralLinkBox"><label>Your personal referral link</label><div><input readOnly value={link}/><button type="button" className="btn primary" onClick={copy}>{copied?"Copied ✓":"Copy Link"}</button><a className="btn light" href={mail}>Email a Vendor</a></div></div>
  <div className="grid stats referralStats"><div className="stat"><span className="meta">Referrals</span><strong>{referrals.length}</strong></div><div className="stat"><span className="meta">In progress</span><strong>{pending}</strong></div><div className="stat"><span className="meta">Free months earned</span><strong>{rewarded}</strong></div></div>
  <div className="referralRules"><strong>How it works</strong><p>Share your personal link. The referred business must be a new My Portland Wedding vendor and activate a paid membership. After their first successful paid month, we automatically credit one month of your current paid membership to your Stripe account. Rewards stack — refer 5 qualified vendors and earn 5 free months.</p><small>No self-referrals. One reward per new vendor. The referring vendor must have an active paid membership when the reward is issued. Credits have no cash value and are applied to future membership invoices.</small></div>
  {referrals.length>0&&<div className="referralHistory"><h3>Your referrals</h3>{referrals.slice(0,10).map(r=><div className="referralRow" key={r.id}><span>{r.referred_email}</span><strong>{r.status==="rewarded"?"Free month earned ✓":r.status==="ineligible"?"Not eligible":"In progress"}</strong></div>)}</div>}
 </div>
}
