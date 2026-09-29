# v13 — Admin Vendor CRM

Adds a dedicated `/admin/vendors` CRM and `/admin/vendors/[id]` account-management screen.

## Included
- Search/filter vendors by business, email, phone, plan, listing status and CRM stage.
- Vendor detail page with editable business/contact data, plan, listing status, category, Oregon service cities, sales stage, last contact, next follow-up and internal notes.
- Account snapshots for subscriptions, leads, reviews and photo counts.
- Permanent vendor deletion from the admin panel with explicit confirmation.
- Deletion removes vendor media and marketplace records; dedicated vendor Auth user is also deleted when present.
- Admin dashboard now links directly to Vendor CRM.
- CRM fields: `crm_stage`, `admin_notes`, `last_contact_at`, `next_follow_up_at`.

## Payment note
Billing controls remain informational until Global Payments/Genius replaces the legacy Stripe layer.
