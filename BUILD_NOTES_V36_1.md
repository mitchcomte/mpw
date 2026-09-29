# v36.1 — Social Contact Action Analytics

- Adds vendor social-link clicks to Contact Actions analytics.
- Tracks Instagram, Facebook, TikTok, Pinterest, and YouTube separately in event names while rolling them into Social Clicks totals.
- Preserves profile vs Wedding Builder attribution.
- Adds Social Clicks to Admin Analytics vendor table and Contact Actions summary.
- Adds Social Clicks to Vendor Dashboard contact-intent metrics.
- Existing Phone, Email, Website, lead, save, and Wedding Builder tracking remains unchanged.
- No Supabase migration required; uses existing analytics_events table.
