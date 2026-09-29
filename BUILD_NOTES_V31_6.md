# v31.6 — Site Health + Technical Cleanup

Built from the uploaded/current v31.4 baseline, retaining the v31.5 Site Health scanner.

## Technical cleanup
- Expanded homepage title for stronger Portland wedding search relevance.
- Added canonical metadata to the homepage and major public discovery pages.
- Added page-specific titles, descriptions and Open Graph metadata to Vendors, Planning Tools, Inspiration, About and For Vendors.
- Added a default Open Graph/Twitter share image using the approved MPW heart-with-sprig mark.
- Replaced the old generic heart favicon/app icons with the approved MPW heart-with-sprig mark.
- Updated the internal brand tagline to `Plan Local. Love Always.`.
- Added security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and COOP.
- Removed the Next.js `X-Powered-By` response header.
- Added noindex response headers for Admin, authenticated dashboards and API routes.
- Added long-lived caching for static image assets and enabled AVIF/WebP support through Next Image.
- Added permanent redirects for `/index.html` and `/index.php` to the canonical homepage.
- Kept robots.txt and sitemap generation in place; sitemap continues to include public categories, city/category landing pages and active vendor profiles.

## Deliberately not automated in this pass
- No destructive JavaScript/CSS removal without a successful production build and browser smoke test.
- No aggressive image replacement/compression of vendor-uploaded media.
- CSP is intentionally compatible with current Stripe/Supabase/Vercel usage and should be verified in Preview before Production.
