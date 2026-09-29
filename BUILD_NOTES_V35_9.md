# v35.9 — Vendor Contact Action Analytics

- Tracks vendor phone, email, and website clicks from public vendor profiles.
- Preserves Wedding Builder attribution when a vendor profile was opened from Wedding Builder.
- Adds Contact Actions, Phone, Email, and Website columns to Admin Analytics.
- Adds vendor-facing Contact Intent summary to Vendor Dashboard / Admin Preview.
- Existing contact-form submissions remain leads and are not double-counted as click actions.
- Clicks represent contact intent, not confirmed calls, emails, bookings, or off-site conversions.
- Uses existing analytics_events table; no Supabase migration required.
