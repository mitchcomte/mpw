import { redirect } from "next/navigation";
import Link from "next/link";
import Stripe from "stripe";
import { createStripe } from "../../../../lib/stripe";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { syncCheckoutSession } from "../../../../lib/stripe-sync";

export const dynamic = "force-dynamic";

export default async function CheckoutReturn({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") redirect("/vendor/dashboard?preview=1#membership");
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/vendor/login?message=Sign%20in%20to%20view%20your%20membership");
  if (!session_id) redirect("/vendor/dashboard?error=Missing%20Stripe%20checkout%20session");

  const stripe = createStripe();
  if (!stripe) redirect("/vendor/dashboard?error=Stripe%20billing%20is%20not%20configured");

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    console.error("Checkout return retrieval error", error);
    redirect("/vendor/dashboard?error=Could%20not%20verify%20your%20Stripe%20checkout");
  }

  if (session.metadata?.user_id !== user.id) {
    redirect("/vendor/dashboard?error=Checkout%20session%20does%20not%20belong%20to%20this%20account");
  }

  if (session.status === "complete") {
    try {
      await syncCheckoutSession(stripe, session);
    } catch (error) {
      console.error("Checkout return sync error", error);
      redirect("/vendor/dashboard?error=Payment%20succeeded%20but%20account%20activation%20needs%20attention");
    }
    redirect("/vendor/dashboard?checkout=success#membership");
  }

  return <main><div className="container"><div className="formCard"><span className="eyebrow">Payment not completed</span><h1>Your checkout is still open</h1><p className="meta">Stripe has not marked this checkout complete. You can return to your dashboard and try again.</p><Link href="/vendor/dashboard#membership" className="btn primary">Return to Dashboard</Link></div></div></main>;
}
