# My Portland Wedding v31 — Connected Wedding Builder + SEO

Implemented from v30.7. Excludes the previously discussed vendor response-time indicator (#8) and two-sided “It’s a Match” mechanic (#18).

Highlights:
- Rich vendor package descriptions/inclusions + Most Popular package.
- Vendor availability and unavailable-date data used by Wedding Builder.
- Category-specific flexible vendor attributes.
- Wedding Builder Match Strength in vendor dashboard.
- “Why we matched you” explanations and recommended packages.
- Request Availability & Quotes language.
- Couple profile now stores budget, guest count, city, style and vendor-discovery opt-in.
- Pro/Premium Match Opportunities with anonymous opted-in couple cards; 5/mo Pro, 15/mo Premium.
- Downloadable promotional vendor badges for Free, Basic, Pro and Premium.
- Budget and guest tools feed Wedding Builder; personalized timeline added.
- Checklist vendor-booking tasks link into Wedding Builder.
- Inspiration guides can hand style intent into Wedding Builder.
- SEO: dynamic vendor metadata, LocalBusiness structured data, category metadata, clean category+city landing pages, internal area links, dynamic sitemap, robots, improved global metadata.
- Existing internal routes/API identifiers preserved where possible.

Database migration applied to the connected My Portland Wedding Supabase project: wedding_builder_experience_v31.

- Coupon fix: Stripe promotion display names are now automatically kept within Stripe's 40-character limit.
- Admin custom promo codes are browser-validated to 32 characters and safe code characters.
- Phone-sale second-month-free coupons use the same safe short-name strategy.

- Admin console cleanup: compact function launcher and expandable operational windows reduce page scrolling.
- Vendor accounts are separated into Paid and Free sections.
- Pending vendors now show an admin-facing reason based on onboarding/setup information (payment/setup pending, incomplete profile, or final activation review).

- Admin review workflow: pending review moderation was removed from the main admin workspace.
- Each vendor's pending reviews are now approved/rejected from that vendor's CRM detail record.
- Admin Home now has a To Do / Notifications section that links pending vendor onboarding items and pending reviews to the exact vendor requiring attention.
