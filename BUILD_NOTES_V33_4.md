# MPW v33.4 — Contact Flow QA & Hardening

Audited and hardened vendor contact actions, with special focus on Wedding Builder.

- Added a direct **Contact vendor** action to each matched Wedding Builder vendor card; it opens that vendor's contact form with Wedding Builder attribution intact.
- Added a stable `#contact` target on paid vendor profiles.
- Wedding Builder roster lead submission now has a sending state, blocks double-click duplicate submits, and surfaces network failures instead of silently failing.
- Wedding Builder lead API validates vendor IDs, contact method, consent, email, and phone requirements.
- Wedding Builder lead API now enforces Portland + active + paid-vendor eligibility before creating leads.
- Profile inquiry API adds server-side validation and returns the user directly to the contact card with visible success/error feedback.
- Existing vendor notification, push, email, Lead Center, and Wedding Builder attribution behavior is preserved.

Validation: static source assertions passed. A full Next.js production build was not run in this container because project dependencies/node_modules are not installed.
