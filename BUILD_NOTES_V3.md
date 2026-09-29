# My Portland Wedding — Production Build v3

Implemented in this build:
- Supabase-backed vendor listings and category pages
- Vendor account signup with Supabase Auth
- Email confirmation callback
- Login, logout, forgot password and password reset
- Vendor dashboard using live database data
- Vendor profile editing
- Plan-aware secondary category limits
- Vendor photo uploads to the `vendor-media` bucket
- Plan-aware photo limits (5 / 10 / 20)
- Couple inquiry submission and vendor lead dashboard
- Profile-view analytics event recording
- Admin vendor approval/status dashboard
- URL/display text decoding so encoded characters such as `%26` display correctly
- Current Supabase SSR packages pinned
- Node 24 and Next.js 15.5.24 deployment baseline

Still requires external account setup before full billing/email launch:
- Stripe products/prices, keys and webhook
- Admin user bootstrap
- Custom transactional email provider if desired
- Production custom domain
