# V28 — Couple Account CRM

Adds an admin-only Couple CRM before V27 deployment.

## Admin features
- `/admin/couples` searchable/filterable couple-account list.
- `/admin/couples/[user_id]` detailed couple account view.
- Shows account email, join date, last sign-in, wedding date, countdown, planning budget summary, guest-count summary, favorites, vendor inquiries and reviews.
- Internal couple lifecycle stage, account status, admin notes, last-contact and next-follow-up fields.
- Admin home now includes Couple Account count and a direct Couple CRM button.
- Guest-list privacy: admin overview shows aggregate guest counts/RSVP totals, not individual guest contact details.

## Database
Migration `20260914_v28_couple_admin_crm.sql` adds:
- `account_status`
- `couple_stage`
- `admin_notes`
- `last_contact_at`
- `next_follow_up_at`

This build includes all V27 admin vendor/promo functionality plus the Couple CRM.
