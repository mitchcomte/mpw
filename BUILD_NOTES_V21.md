# V21 — Founding Vendor Launch Offer

## What changed
- Added automatic Founding Vendor promotion for the first 5 vendors in every primary category.
- Founding Vendors receive the full Premium membership while Stripe bills the Basic recurring price ($35/month).
- Promotion is category-specific and concurrency-safe; signup reservations are serialized in Postgres so two vendors cannot receive the same founding position.
- Vendor signup now shows a live category counter, five-position meter, remaining spots, Founding Vendor badge preview, and automatic offer application.
- If a category is full, signup falls back to normal Basic / Professional / Premium membership selection.
- Sales-assisted vendor setup also checks founding availability automatically and upgrades eligible vendors to the Founding Vendor offer.
- Added Founding Vendor badge across public vendor profiles, vendor search/category results, homepage featured cards, Wedding Builder rosters, and vendor dashboard.
- Added an admin Founding Vendor tracker showing claimed/remaining spots in every category.
- Checkout clearly discloses Premium-at-Basic founding pricing and continuous-membership requirement.
- Stripe metadata preserves product access as Premium while using the Basic Stripe Price for billing.
- Stripe webhook sync marks founding slots active after payment and forfeits the benefit on cancellation.
- A never-activated founding membership is released if Stripe reports `incomplete_expired`.
- Corrected vendor listing status handling from the invalid `paused` value to the existing `suspended` status while keeping CRM stage `paused`.
- Updated Vendor Terms with the Founding Vendor promotion rules.

## Founding promotion rule
The first 5 qualifying vendors in each primary category can receive Premium membership for $35/month. The rate and Founding Vendor badge eligibility remain while the membership stays continuously active. Cancellation permanently forfeits the founding benefit; rejoining does not restore it.

## Database
Production migrations applied:
- `v21_founding_vendors`
- `v21_founding_vendor_client_policy`
- `v21_match_events_client_policy`

No manual SQL is required when deploying this build to the already-migrated production project.

## Build verification
The ZIP is integrity-tested. A complete local Next.js build was not run because dependencies are not installed in the working copy and the package fetch attempt timed out. Vercel remains the definitive production build check.
