# V27 — Admin test/comp vendor creation, Founding reset support, signup color hardening, second-month-free promos

- Added admin "Force Create Vendor · Skip Payment" workflow.
- Admin chooses whether a forced vendor consumes a Founding Vendor position.
- Forced vendors are active and payment-exempt, so their dashboard does not ask them to activate Stripe billing.
- Founding forced vendors immediately claim/activate one of the five category spots; non-founding forced vendors do not touch Founding inventory.
- Added admin-generated "2nd month free" promo codes. First invoice bills normally; after successful checkout, a one-time 100% Stripe coupon is attached to the subscription for the next invoice.
- Added promo-code validation and entry before embedded Stripe checkout.
- Hardened signup/checkout color scheme to light and explicitly set form backgrounds/text to prevent unexpected red/black browser/system-theme styling.
- Wedding Venues accidental reserved Founding spot was reset directly in production before this build.
- Admin deletion now also releases any Founding Vendor membership row tied to that vendor, so accidental/test accounts restore the category spot.
