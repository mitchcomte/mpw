# My Portland Wedding — V7

## New in this build

### Couple accounts
- Free couple signup, email confirmation, login, logout, password reset and planning dashboard.
- Couple wedding profile with names and wedding date.
- Header and footer entry points for “My Planning”.

### Saved vendors
- Authenticated couples can save/unsave vendors from public vendor profiles.
- Saved vendor shortlist appears in the couple dashboard.

### Planning apps
- Wedding Budget Calculator with cloud-saved budgeted, actual and paid amounts plus notes.
- Guest List & RSVP Tracker with household/party counts, RSVP status, meal choice, group and table assignments.
- Both tools are tied to the authenticated couple account through Supabase RLS.
- Existing interactive checklists remain available and continue to save locally in the browser.

### Reviews
- Signed-in couples can submit 1–5 star vendor reviews.
- New reviews enter a pending moderation state.
- Admin dashboard includes review approval/rejection.
- Approving a review recalculates vendor rating and review count.

### Stripe vendor billing
- Checkout now requires an authenticated vendor and attaches vendor/user metadata.
- Subscription webhook connects Stripe subscription records back to the correct vendor.
- Vendor dashboard includes activation and billing-management controls.
- Existing active subscriptions are sent to Stripe Customer Portal instead of creating duplicate subscriptions.

## Supabase
The production Supabase project was migrated during this build with:
- couple_profiles
- planning_budget_items
- planning_guests
- RLS and authenticated grants for all three tables
- safer vendor signup trigger that does not create vendor profiles for couple accounts
- couple signup trigger
- admin review update policy

Security advisor check after migrations: no security lints.

## Stripe configuration still required
The application code is ready, but live billing requires these server-side Vercel variables:
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- STRIPE_PRICE_BASIC
- STRIPE_PRICE_PROFESSIONAL
- STRIPE_PRICE_PREMIUM
- SUPABASE_SERVICE_ROLE_KEY

Never expose STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET or SUPABASE_SERVICE_ROLE_KEY with NEXT_PUBLIC_ prefixes.
