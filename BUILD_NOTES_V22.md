# V22 — Flow Audit & Wedding Builder Hardening

- Expanded Wedding Builder vendor pool from 100 to 1000 active vendors so growth does not silently exclude vendors.
- Expanded homepage Premium rotation pool from 12 to 100 so the same small set is not permanently favored.
- Corrected Wedding Builder category slugs for Rentals and Content Creation.
- Wedding Builder now penalizes missing pricing and clearly labels roster totals as incomplete when any matched vendor has not supplied pricing; it no longer presents an understated cushion as if it were complete.
- Added visible error feedback when a qualified-lead submission fails.
- Added server-side hourly rate limiting for anonymous Wedding Builder match notifications and lead requests to reduce notification/lead spam risk.
- Added production migration `v22_builder_guardrails` for the rate-limit table/function.
