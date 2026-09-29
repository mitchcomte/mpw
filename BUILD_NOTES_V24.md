# V24 — Vercel Analytics & Conversion Tracking

## Added
- Added `@vercel/analytics` and the global `<Analytics />` component so Vercel Web Analytics can collect production page views and visitors.
- Added privacy-conscious custom conversion events (no email, phone, or other couple/vendor PII is sent to Vercel Analytics):
  - `Wedding Builder Started`
  - `Wedding Builder Completed`
  - `Wedding Builder Vendor Viewed`
  - `Wedding Builder Contact Opened`
  - `Wedding Builder Lead Submitted`
  - `Founding Vendor CTA Clicked`
  - `Vendor Plan CTA Clicked`
  - `Vendor Signup Started`
  - `Vendor Signup Completed`
  - `Vendor Profile Viewed`
- Vendor-profile event data is limited to public/non-sensitive attributes such as slug, plan, and Founding Vendor status.

## Deployment
Deploy this build to the V23 Vercel project as Production. After deployment, visit the public site and navigate through several pages. Vercel page-view data can take a short period to appear. Custom event visibility depends on the Vercel plan/features enabled for the project.
