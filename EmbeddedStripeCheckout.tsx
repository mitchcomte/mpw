"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

type Props = {
  plan: "basic" | "professional" | "premium";
  planName: string;
  monthlyPrice: number;
  foundingVendor?: boolean;
  initialPromoCode?: string;
};

export default function EmbeddedStripeCheckout({ plan, planName, monthlyPrice, foundingVendor = false, initialPromoCode = "" }: Props) {
  const [consent, setConsent] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");
  const [promoCode, setPromoCode] = useState(initialPromoCode);
  const [promoApplied, setPromoApplied] = useState(initialPromoCode);
  const [promoStatus, setPromoStatus] = useState(initialPromoCode ? "✓ Second month free — included in your phone-sale offer" : "");

  const fetchClientSecret = useCallback(async () => {
    setError("");
    const response = await fetch("/api/checkout/embedded", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, recurring_consent: consent, founding_vendor: foundingVendor, promo_code: promoApplied || undefined })
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok || !body.clientSecret) {
      const message = body.error || "Could not start secure checkout.";
      setError(message);
      throw new Error(message);
    }
    return body.clientSecret as string;
  }, [plan, consent, foundingVendor, promoApplied]);

  const options = useMemo(() => ({ fetchClientSecret }), [fetchClientSecret]);

  if (!publishableKey || !stripePromise) {
    return <div className="notice error">Stripe checkout is not fully configured. Please contact My Portland Wedding.</div>;
  }

  if (!started) {
    return <div className="embeddedCheckoutConsent">
      <div className="recurringDisclosure">
        <strong>Recurring monthly membership authorization</strong>
        <p>Your {planName} membership is <b>${monthlyPrice}/month</b> and renews automatically each month until canceled.{foundingVendor ? " This founding rate remains available only while the membership stays continuously active; cancellation permanently forfeits the founding rate and badge eligibility." : ""} To cancel, you must notify My Portland Wedding by phone or email. Cancellation is effective after our team confirms your request.</p>
      </div>
      <label className="consentCheck checkoutConsent">
        <input type="checkbox" checked={consent} onChange={(e)=>setConsent(e.target.checked)} />
        <span>I authorize the recurring ${monthlyPrice} monthly charge and agree to the <Link href="/vendor-terms" target="_blank">Vendor Terms of Service</Link> and <Link href="/vendor-terms#cancellation" target="_blank">Cancellation Policy</Link>.</span>
      </label>
      <div className="promoEntry"><label><strong>Have a promo code?</strong><span className="promoInputRow"><input value={promoCode} onChange={(e)=>{setPromoCode(e.target.value.toUpperCase());setPromoStatus("")}} placeholder="Enter code" disabled={Boolean(promoApplied)}/><button type="button" className="btn light" onClick={async()=>{setPromoStatus("Checking…");const r=await fetch("/api/promotions/validate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:promoCode})});const j=await r.json().catch(()=>({}));if(r.ok&&j.valid){setPromoApplied(j.code);setPromoStatus(`✓ ${j.label}`)}else{setPromoApplied("");setPromoStatus(j.error||"Invalid promo code")}}}>{promoApplied?"Applied":"Apply"}</button></span></label>{promoStatus&&<small className={promoApplied?"promoSuccess":"promoError"}>{promoStatus}</small>}{promoApplied&&<small>Your first month is charged normally. The 100% discount is applied to your next monthly invoice.</small>}</div>
      {error && <div className="notice error">{error}</div>}
      <button className="btn primary checkoutStartButton" disabled={!consent} onClick={()=>setStarted(true)}>
        Continue to Secure Payment
      </button>
      <p className="meta checkoutSecurityNote">Your card information is entered securely into Stripe and is not stored by My Portland Wedding.</p>
    </div>;
  }

  return <div className="embeddedCheckoutShell">
    <div className="checkoutPlanSummary"><strong>{planName} Membership</strong><span>${monthlyPrice}/month · recurring{foundingVendor ? " · founding rate" : ""}</span></div>
    {error && <div className="notice error">{error}</div>}
    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  </div>;
}
