# V17 — Wedding Builder

Adds a fun, interactive consumer Wedding Builder at `/wedding-builder`.

Flow: wedding basics → style → top priorities → personalized budget blueprint → active local vendor matches → explicit opt-in qualified lead request.

Qualified lead privacy behavior:
- Only vendors the couple selects receive a lead.
- Contact consent is required.
- Phone is only shared when the couple chooses phone or text.
- Vendor notifications are created for qualified Wedding Builder leads.

Adds Wedding Builder links to the main navigation, Planning Tools, and Couple Dashboard.

Database migration: `supabase/migrations/20260911_v17_wedding_builder.sql` adds `vendor_notifications` with vendor-only RLS.
