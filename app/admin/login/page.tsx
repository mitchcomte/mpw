import Link from "next/link";

export default async function AdminLogin({searchParams}:{searchParams:Promise<{error?:string,message?:string}>}){
  const q=await searchParams;
  return <main className="adminLoginPage">
    <section className="adminLoginShell">
      <div className="adminLoginBrand">
        <Link className="adminBrandLink" href="/" aria-label="My Portland Wedding home">
          <span className="adminHeart" aria-hidden="true">♡</span>
          <span><strong>My Portland Wedding</strong><small>MARKETPLACE ADMINISTRATION</small></span>
        </Link>
        <span className="eyebrow">Private administration</span>
        <h1>Welcome back.</h1>
        <p>Sign in to manage vendor onboarding, approvals, reviews, memberships and marketplace operations.</p>
        <div className="adminSecurityNote"><strong>Administrator access only</strong><span>Only accounts that have been granted administrator access can enter this area.</span></div>
      </div>
      <div className="adminLoginCard">
        <span className="eyebrow">Admin portal</span>
        <h2>Sign in</h2>
        <p className="meta">Use the email and password for your My Portland Wedding administrator account.</p>
        {q.error&&<div className="notice error">{q.error}</div>}
        {q.message&&<div className="notice success">{q.message}</div>}
        <form action="/api/admin/login" method="post" className="adminLoginForm">
          <div className="field"><label>Email</label><input name="email" type="email" autoComplete="email" required/></div>
          <div className="field"><label>Password</label><input name="password" type="password" autoComplete="current-password" required/></div>
          <button className="btn primary adminSignInButton">Sign In to Admin</button>
        </form>
        <div className="adminLoginLinks"><Link href="/vendor/forgot-password">Forgot password?</Link><Link href="/">Return to website</Link></div>
      </div>
    </section>
  </main>
}
