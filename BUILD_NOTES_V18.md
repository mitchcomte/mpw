# My Portland Wedding — v18

## Wedding Builder-first homepage
- Reworked the landing-page hero so Wedding Builder is the primary first-screen experience.
- Added an interactive Wedding Builder starter directly in the hero with budget slider, guest counter, Oregon service-area selector, optional wedding date, live per-guest insight, and a prominent Build My Wedding CTA.
- Browsing vendors is now a secondary path rather than the main hero action.
- Starter answers are passed into `/wedding-builder` through query parameters and preserved.
- Wedding Builder detects starter answers and skips the redundant basics step, opening on the fun wedding-vibe step.
- Existing v17 Wedding Builder, lead consent, vendor matching, notifications foundation, and Supabase migration remain intact.
- No additional database migration is required for v18.
