# V25 — Vendor Profile Refresh + Four-Tier Listings

## Public vendor profiles
- Reassembled profiles around vendor imagery, story, pricing/service details, portfolio and reviews.
- Contact form moved into a compact sticky sidebar so vendor information dominates the page.
- Pro and Premium profiles can show social links.
- Premium profiles can show up to three YouTube/Vimeo video links.
- Free profiles are intentionally minimal and do not show the direct inquiry form.

## Membership structure
- Free — $0
- Basic — $35/month
- Pro — $45/month (internal legacy slug remains `professional` for Stripe/database compatibility)
- Premium — $55/month
- Founding Vendors still receive Premium at the Basic $35/month rate while continuously active.
- Free listings do not reserve a Founding Vendor spot.

## Free listing limits
- One primary category
- One photo
- Basic business/location information
- Short description
- Website or phone
- Standard/lowest directory priority
- No Wedding Builder eligibility
- No direct profile inquiry form
- No social links
- No video

## Dashboard upsells
- Locked social and video sections now explain which plan unlocks them.
- Free vendors see upgrade prompts for photos and paid marketplace features.

## Database
Migration `20260914_v25_vendor_profiles_free_social_video.sql` adds social/video fields and allows `free` as a vendor plan. This migration has already been applied to the production Supabase project.

## Validation
A full local Next.js build was not available because node modules are not installed in the working container. Global TypeScript parsing found no new TS1000-series syntax/parser errors in the V25 files; the remaining typecheck output is dominated by missing Next/React/Node modules and pre-existing strictness warnings. Vercel build remains the definitive deployment check.
