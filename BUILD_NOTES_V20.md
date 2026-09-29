# V20 — Vendor Phone Notifications

- Vendors can opt into website push notifications from the Vendor Dashboard.
- When a vendor is placed into a couple's Wedding Builder roster, the site records a deduplicated anonymous match event, creates an in-dashboard notification, and sends a web push to subscribed vendor devices.
- A separate push is sent when the couple explicitly requests contact, preserving the distinction between a roster appearance and a qualified lead.
- Added installable web-app manifest/service worker support so phone notifications can work from the site. On iPhone/iPad, the vendor must first add My Portland Wedding to the Home Screen before Safari allows web push.
- Added Vendor Dashboard notification history and an Enable Phone Notifications control.
- Added `vendor_push_subscriptions` and `wedding_builder_match_events` tables, plus notification-policy/index cleanup.
- Requires Vercel env vars: `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, and optional `VAPID_SUBJECT`.
