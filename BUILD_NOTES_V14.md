# Build Notes V14 — Embedded Stripe Subscriptions

This build turns the existing Stripe groundwork into an on-site recurring membership checkout.

## Added
- Embedded Stripe Checkout at `/vendor/checkout` so vendors can complete card entry without leaving My Portland Wedding.
- Required recurring billing authorization immediately before the Stripe form is mounted.
- New authenticated JSON endpoint at `/api/checkout/embedded` that creates Stripe Checkout Sessions with `mode=subscription` and `ui_mode=embedded`.
- Return handler at `/vendor/checkout/return` that verifies the session belongs to the signed-in vendor and synchronizes successful initial activation to Supabase.
- Shared Stripe synchronization helpers for Checkout Sessions, subscriptions and invoice payment events.
- Expanded webhook handling for checkout completion, subscription create/update/delete, invoice paid and invoice payment failed.
- Successful active/trialing subscriptions activate the vendor listing and CRM stage automatically.
- Canceled/unpaid/expired subscriptions pause the vendor listing automatically.
- Vendor dashboard activation button now opens the embedded checkout page instead of redirecting to a Stripe-hosted Checkout page.
- Added `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `.env.example`.

## Required Vercel variables
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_PRICE_BASIC`
- `STRIPE_PRICE_PROFESSIONAL`
- `STRIPE_PRICE_PREMIUM`
- `STRIPE_WEBHOOK_SECRET` (add after creating the Stripe webhook destination)

## Stripe webhook destination after deploy
`https://www.myportlandwedding.com/api/stripe/webhook`

Recommended events:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

No database migration is required for V14 because it uses the existing subscription consent/status fields and CRM fields.
