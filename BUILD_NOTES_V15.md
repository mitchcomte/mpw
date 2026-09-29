# My Portland Wedding — V15

## Vendor signup / payment flow
- Removed recurring-billing disclosure and recurring-consent checkbox from the initial vendor signup form.
- Initial signup now collects account/listing information only.
- Membership dropdown shows plan names without monthly-billing language.
- Recurring price, automatic-renewal disclosure, cancellation policy, and affirmative recurring-payment authorization remain on the secure Stripe payment step.
- When Supabase Confirm Email is disabled, a new vendor is signed in immediately and sent directly to `/vendor/checkout`.
- If Confirm Email remains enabled, the app falls back to the email-confirmation flow.
- Payment checkout remains blocked until the vendor affirmatively authorizes recurring billing.

## Recommended Supabase setting
For the intended frictionless flow, disable **Authentication → Providers → Email → Confirm email** in Supabase. With Confirm Email disabled, Supabase returns a session at signup and the vendor continues directly to payment.
