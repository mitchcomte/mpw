import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createStripe } from "../../../../lib/stripe";
import { syncCheckoutSession, syncInvoicePayment, syncSubscription } from "../../../../lib/stripe-sync";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.json({received:true,preview:true});
  const stripe = createStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers.get("stripe-signature");
  if (!stripe || !sig || !secret) return new NextResponse("Missing webhook configuration", { status: 400 });

  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch (error) {
    console.error("Invalid Stripe webhook signature", error);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return new NextResponse("Database not configured", { status: 503 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await syncCheckoutSession(stripe, event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncSubscription(event.data.object as Stripe.Subscription);
        break;
      case "invoice.paid":
        await syncInvoicePayment(stripe, event.data.object as Stripe.Invoice, true);
        break;
      case "invoice.payment_failed":
        await syncInvoicePayment(stripe, event.data.object as Stripe.Invoice, false);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(`Stripe webhook handler failed for ${event.type}`, error);
    return new NextResponse("Webhook processing failed", { status: 500 });
  }

  return NextResponse.json({ received: true });
}
