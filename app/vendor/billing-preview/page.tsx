import Link from "next/link";
import styles from "../billing/billing.module.css";

export const metadata={robots:{index:false,follow:false}};

export default function VendorBillingVisualPreview(){
 return <main className={styles.page}><div className={styles.card}>
  <Link className={`${styles.back} textLink`} href="/">← Back to My Portland Wedding</Link>
  <span className="eyebrow">Preview only · Account & billing</span>
  <h1>Billing & Payment</h1>
  <p className="meta">This is a visual preview of the vendor payment-update experience. No account is required and nothing on this page can change billing information.</p>
  <div className={styles.summary}>
   <div><span>Membership</span><strong>Founding Vendor Premium</strong></div>
   <div><span>Monthly rate</span><strong>$35/month</strong></div>
   <div><span>Billing status</span><strong>Active</strong></div>
   <div><span>Current period ends</span><strong>November 12, 2026</strong></div>
  </div>
  <div className="billingManageBox">
   <h2>Payment method</h2>
   <p>Update the payment method used for future membership charges without leaving your vendor dashboard.</p>
   <div className="embeddedPaymentUpdate">
    <div style={{padding:"18px",border:"1px solid rgba(74,92,77,.18)",borderRadius:12,background:"#fff"}}>
     <div style={{fontSize:12,fontWeight:800,letterSpacing:".06em",marginBottom:8}}>CARD INFORMATION</div>
     <div style={{display:"grid",gap:10}}>
      <div style={{padding:"12px 14px",border:"1px solid #c9cec9",borderRadius:8,color:"#737a75"}}>4242 4242 4242 4242</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><div style={{padding:"12px 14px",border:"1px solid #c9cec9",borderRadius:8,color:"#737a75"}}>MM / YY</div><div style={{padding:"12px 14px",border:"1px solid #c9cec9",borderRadius:8,color:"#737a75"}}>CVC</div></div>
      <div style={{padding:"12px 14px",border:"1px solid #c9cec9",borderRadius:8,color:"#737a75"}}>Name on card</div>
     </div>
    </div>
    <button className="btn primary" type="button" disabled>Save New Payment Method</button>
    <p className="meta">Payment details are entered directly into Stripe's secure fields and are never stored by My Portland Wedding.</p>
   </div>
   <button className="btn light" type="button" disabled>Cancel</button>
  </div>
  <div className={styles.help}><h2>Need help?</h2><p>For membership or billing questions, email <a href="mailto:hello@myportlandwedding.com">hello@myportlandwedding.com</a>.</p></div>
 </div></main>;
}
