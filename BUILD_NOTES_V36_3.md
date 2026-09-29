# v36.3 — Admin Vendor Account Origin Separation

- Separates paid, Free · Self Listed, and Complimentary · MPW Added vendors in Vendor CRM.
- Uses existing `vendor_profiles.listing_state` plus `plan`; no schema migration required.
- Complimentary includes `unclaimed` and `claim_pending` free listings created for marketplace coverage.
- Self Listed means a claimed free account.
- Adds quick account-type filters and an Account Type column/badges.
- Existing CRM stage, follow-up dates, Manage and Preview workflows remain intact.
- Existing v36.2 social contact analytics and v36.0 mobile color-scheme fix are preserved.
