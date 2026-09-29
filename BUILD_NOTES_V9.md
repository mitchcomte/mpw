# My Portland Wedding v9 — Sales Onboarding + Recurring Billing Consent

- Every vendor signup now explicitly discloses that memberships are recurring monthly subscriptions.
- Vendors must affirmatively accept recurring billing and the cancellation policy before account creation and again before payment activation.
- Cancellation language states vendors must notify My Portland Wedding by phone or email; cancellation is effective after team confirmation. Self-service cancellation is intentionally not offered in the vendor dashboard.
- Added admin-assisted cold-call sales onboarding: prefill business/contact/category/plan/service cities, create a secure 30-day setup link, copy it, or open a prewritten email to the customer.
- Vendor finish-setup page shows the exact monthly amount and recurring/cancellation terms before password creation.
- Added sales onboarding pipeline statuses and links in Admin.
- Supabase production migrations add vendor_sales_invites, billing consent audit fields, and vendor profile linkage to sales invites.
- Existing Oregon city search, couple tools, favorites, reviews, vendor profiles, and bubbly v6 design remain.

## Deployment note
The assisted setup flow requires `SUPABASE_SERVICE_ROLE_KEY` as a server-only Vercel environment variable. Never prefix it with NEXT_PUBLIC and never expose it in browser code. Existing payment webhooks also use this server-only variable.
