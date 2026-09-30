-- Vendors can silence anonymous Wedding Builder roster-match emails without disabling qualified lead/inquiry notifications.
alter table public.vendor_profiles
  add column if not exists wedding_builder_match_emails boolean not null default true;
