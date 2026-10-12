"use client";

import { useEffect, useState } from "react";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const key=process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY||"";
const stripePromise=key?loadStripe(key):null;

function UpdateForm({onSaved}:{onSaved:()=>void}){
 const stripe=useStripe();
 const elements=useElements();
 const [saving,setSaving]=useState(false);
 const [error,setError]=useState("");
 async function submit(e:React.FormEvent){
  e.preventDefault(); if(!stripe||!elements||saving)return; setSaving(true);setError("");
  const result=await stripe.confirmSetup({elements,redirect:"if_required"});
  if(result.error){setError(result.error.message||"Could not update payment method.");setSaving(false);return}
  if(!result.setupIntent){setError("Could not verify the updated payment method.");setSaving(false);return}
  const r=await fetch("/api/stripe/payment-method/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({setupIntentId:result.setupIntent.id})});
  const body=await r.json().catch(()=>({}));
  if(!r.ok){setError(body.error||"Could not save payment method.");setSaving(false);return}
  setSaving(false);onSaved();
 }
 return <form onSubmit={submit} className="embeddedPaymentUpdate"><PaymentElement options={{layout:"tabs"}}/>{error&&<div className="notice error">{error}</div>}<button className="btn primary" disabled={!stripe||saving} type="submit">{saving?"Saving…":"Save New Payment Method"}</button><p className="meta">Payment details are entered directly into Stripe's secure fields and are never stored by My Portland Wedding.</p></form>;
}

export default function EmbeddedPaymentMethodUpdate(){
 const [open,setOpen]=useState(false); const [secret,setSecret]=useState(""); const [loading,setLoading]=useState(false); const [error,setError]=useState(""); const [saved,setSaved]=useState(false);
 useEffect(()=>{if(!open||secret||loading)return;setLoading(true);fetch("/api/stripe/payment-method/setup",{method:"POST"}).then(async r=>{const b=await r.json().catch(()=>({}));if(!r.ok)throw new Error(b.error||"Could not load secure payment form.");setSecret(b.clientSecret)}).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[open,secret,loading]);
 if(!key||!stripePromise)return <div className="notice error">Secure payment updates are not configured. Please contact My Portland Wedding.</div>;
 if(saved)return <div className="notice success"><strong>Payment method updated.</strong><p>Your new payment method will be used for future membership charges.</p><button className="btn light" type="button" onClick={()=>{setSaved(false);setSecret("");setOpen(false)}}>Done</button></div>;
 return <div className="billingManageBox"><h2>Payment method</h2><p>Update the payment method used for future membership charges without leaving your vendor dashboard.</p>{!open?<button className="btn primary" type="button" onClick={()=>setOpen(true)}>Update Payment Method →</button>:<>{loading&&<p className="meta">Loading secure payment form…</p>}{error&&<div className="notice error">{error}</div>}{secret&&<Elements stripe={stripePromise} options={{clientSecret:secret,appearance:{theme:"stripe"}}}><UpdateForm onSaved={()=>setSaved(true)}/></Elements>}<button className="btn light" type="button" onClick={()=>{setOpen(false);setSecret("");setError("")}}>Cancel</button></>}</div>;
}
