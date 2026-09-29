"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, plans } from "../lib/site";
import { track } from "@vercel/analytics";

type Availability = {
  category: string;
  categoryName: string;
  claimed: number;
  reserved: number;
  remaining: number;
  available: boolean;
};

export default function FoundingVendorSignupForm({ defaultPlan = "professional", referralCode = "" }: { defaultPlan?: string; referralCode?: string }) {
  const [category, setCategory] = useState("venues");
  const [plan, setPlan] = useState(defaultPlan in plans ? defaultPlan : "professional");
  const [requestedPlan, setRequestedPlan] = useState(defaultPlan in plans ? defaultPlan : "professional");
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(`/api/founding-vendors/availability?category=${encodeURIComponent(category)}`, { cache: "no-store" })
      .then(r => r.json())
      .then(body => { if (!ignore) setAvailability(body?.error ? null : body); })
      .catch(() => { if (!ignore) setAvailability(null); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [category]);

  const foundingAvailable = plan !== "free" && !!availability?.available;
  const selectedPlan = foundingAvailable ? "premium" : plan;
  const categoryName = useMemo(() => categories.find(([slug]) => slug === category)?.[1] || "your category", [category]);
  const used = availability ? 5 - availability.remaining : 0;

  return <form action="/api/auth/signup" method="post" className="formGrid foundingSignupForm" onSubmit={() => track("Vendor Signup Started", { category, plan: selectedPlan, founding_vendor: foundingAvailable })}>
    <input type="hidden" name="founding_offer_requested" value={foundingAvailable ? "yes" : "no"}/>
    <input type="hidden" name="plan" value={selectedPlan}/>\n    <input type="hidden" name="requested_plan" value={requestedPlan}/>
    <input type="hidden" name="referral_code" value={referralCode}/>

    {referralCode&&<div className="field full"><div className="notice success"><strong>Vendor referral applied ✓</strong><p>You were invited by a My Portland Wedding vendor. Complete signup normally — their referral reward is handled automatically after your first successful paid month.</p></div></div>}
    <div className="field"><label>Business name</label><input name="business_name" required/></div>
    <div className="field"><label>Primary category</label><select name="category" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(([s,n])=><option key={s} value={s}>{n}</option>)}</select></div>

    <div className="field full">
      {plan!=="free"&&<div className={`foundingOfferCard ${foundingAvailable ? "isAvailable" : "isFull"}`}>
        <div className="foundingOfferTop">
          <div>
            <span className="foundingKicker">✦ Launch exclusive</span>
            <h2>Founding Vendor</h2>
          </div>
          <span className="foundingBadgePreview">FOUNDING VENDOR</span>
        </div>
        {loading ? <p className="meta">Checking founding spots for {categoryName}…</p> : foundingAvailable ? <>
          <p className="foundingPriceLine"><strong>Premium membership for $35/month</strong> <span>instead of ${plans.premium.price}/month</span></p>
          <p>Because you’re joining early, the first <strong>5 vendors in every category</strong> can lock in Premium at the Basic price for as long as their membership remains continuously active.</p>
          <div className="foundingMeter" aria-label={`${used} of 5 founding spots currently reserved or claimed`}>
            {[1,2,3,4,5].map(n=><span key={n} className={n<=used?"filled":""}>{n<=used?"✓":n}</span>)}
          </div>
          <div className="foundingRemaining"><strong>{availability?.remaining}</strong> of 5 founding spot{availability?.remaining===1?"":"s"} remaining in {categoryName}</div>
          <div className="foundingAutoApplied">✓ Your Founding Vendor offer will be applied automatically at signup.</div>
          <small>Founding pricing and badge eligibility continue while the membership remains continuously active. If the membership is canceled, the founding benefit is forfeited and cannot be reclaimed.</small>
        </> : <>
          <p><strong>The 5 founding spots for {categoryName} are currently claimed.</strong></p>
          <p className="meta">You can still join My Portland Wedding with a regular membership below.</p>
        </>}
      </div>}
    </div>

    <div className="field full"><label>Membership</label><select value={plan} onChange={e=>{setPlan(e.target.value);setRequestedPlan(e.target.value)}}>{Object.entries(plans).map(([slug,p])=><option key={slug} value={slug}>{p.name} — {p.price?`$${p.price}/month`:"Free"}</option>)}</select><small>{plan==="free"?"Free listings are intentionally limited and do not reserve a Founding Vendor position.":"Paid plans unlock Wedding Builder by My Portland Wedding visibility and direct inquiries."}</small></div>

    {foundingAvailable && plan!=="free" && <div className="field full foundingIncluded">
      <strong>You’re getting the full Premium package.</strong>
      <span>Homepage rotation · highest search priority · up to 20 photos · Featured Vendor badge · Wedding Builder by My Portland Wedding lead opportunities · all Premium benefits.</span>
    </div>}

    <div className="field"><label>Email</label><input name="email" type="email" required/></div>
    <div className="field"><label>Password</label><input name="password" type="password" minLength={8} required/><small>At least 8 characters</small></div>
    <div className="field"><label>Phone</label><input name="phone"/></div>
    <div className="field"><label>Website</label><input name="website" placeholder="https://"/></div>
    <div className="field full"><label>Business description</label><textarea name="description" rows={5}/></div>
    <div className="field full"><button className="btn primary foundingSignupButton" style={{width:"100%"}}>{plan==="free"?"Create My Free Listing":foundingAvailable ? "Claim My Founding Vendor Spot ✦" : "Create Vendor Account & Continue"}</button></div>
  </form>;
}
