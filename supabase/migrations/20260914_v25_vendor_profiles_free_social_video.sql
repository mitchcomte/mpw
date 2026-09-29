-- V25: four-level vendor listings + richer Pro/Premium profiles
alter table public.vendor_profiles
  add column if not exists facebook text,
  add column if not exists tiktok text,
  add column if not exists pinterest text,
  add column if not exists youtube text,
  add column if not exists video_urls text[] not null default '{}';

alter table public.vendor_profiles drop constraint if exists vendor_profiles_plan_check;
alter table public.vendor_profiles
  add constraint vendor_profiles_plan_check
  check (plan in ('free','basic','professional','premium'));

-- Existing vendors keep their current paid plan. New free signups explicitly set plan='free'.

alter table public.vendor_sales_invites drop constraint if exists vendor_sales_invites_plan_check;
alter table public.vendor_sales_invites
  add constraint vendor_sales_invites_plan_check
  check (plan in ('free','basic','professional','premium'));
