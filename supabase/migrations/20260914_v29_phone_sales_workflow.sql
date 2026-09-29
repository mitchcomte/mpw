-- V29: admin phone-sale workflow metadata.
alter table public.vendor_sales_invites
  add column if not exists sales_channel text,
  add column if not exists founding_vendor_requested boolean,
  add column if not exists promo_code text;

create index if not exists vendor_sales_invites_sales_channel_idx
  on public.vendor_sales_invites(sales_channel);
create index if not exists vendor_sales_invites_promo_code_idx
  on public.vendor_sales_invites(promo_code);
