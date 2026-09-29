# My Portland Wedding — V16 Cleanup & Reliability Pass

## Changes
- Removed recurring-billing language and consent from the sales-assisted setup page. Vendors now create a password, then continue to `/vendor/checkout`, where all recurring billing disclosures and authorization remain.
- Simplified `/admin/login` so it no longer performs Supabase auth/database queries during page rendering. Authentication now happens only when the login form is submitted.
- Hardened Stripe invoice status synchronization: `invoice.payment_failed` pauses the vendor listing/CRM stage, and `invoice.paid` reactivates it.
- Removed fictional/sample featured vendors from the homepage. An honest “Featured Portland vendors are joining now” empty state is shown until real Premium vendors are active.
- Made the vendor dashboard cancellation instructions explicit by linking `hello@myportlandwedding.com` and referencing the published customer-service phone number.
- Added styling for the new homepage empty state.

## Notes
- Recurring billing consent remains required at the secure Stripe payment step.
- No database migration is required for V16.
