# Deployment & Domain Implementation

## Recommended stack
- Hosting: Vercel
- Database/Auth/Storage: Supabase
- Billing: Stripe
- Transactional email: Resend
- DNS/domain: wherever you purchase myportlandwedding.com

## What I can implement in code
- App deployment configuration
- Environment variables
- Database schema
- Stripe products/price mapping
- Webhook endpoint
- Auth flows
- Vendor/admin permissions
- Search and market routing
- Email templates
- Image upload/storage integration
- Production SEO

## What requires your account authorization
1. Purchase/control the domain.
2. Create or connect Vercel, Supabase, Stripe and email-service accounts.
3. Add the DNS records shown by your hosting provider.
4. Paste the private keys into your deployment environment.

## Domain flow
Once the app is deployed on Vercel:
1. Add `myportlandwedding.com` and `www.myportlandwedding.com` to the Vercel project.
2. Vercel provides DNS records.
3. Add those records at the domain registrar.
4. Set `NEXT_PUBLIC_SITE_URL=https://www.myportlandwedding.com`.
5. Configure Stripe webhook endpoint:
   `https://www.myportlandwedding.com/api/stripe/webhook`
6. Configure Supabase redirect URLs for the production domain.
7. Verify the sending domain for transactional email.

## Future city sites
The schema contains `markets` and `market_slug` on core tables. New sites can share one backend while serving different domains and vendor inventories.
