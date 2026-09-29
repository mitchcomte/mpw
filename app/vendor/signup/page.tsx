import FoundingVendorSignupForm from "../../../components/FoundingVendorSignupForm";

export default async function Signup({searchParams}:{searchParams:Promise<{plan?:string,error?:string,ref?:string}>}){
 const q=await searchParams;
 return <main className="vendorSignupPage"><div className="container"><div className="formCard foundingSignupCard"><span className="eyebrow">Vendor signup</span><h1>Join My Portland Wedding</h1><p className="meta">Choose your category first. If one of the five Founding Vendor spots is still open, your Premium-for-Basic launch offer appears automatically.</p>{q.error&&<div className="notice error">{q.error}</div>}<FoundingVendorSignupForm defaultPlan={q.plan||"professional"} referralCode={q.ref||""}/></div></div></main>
}
