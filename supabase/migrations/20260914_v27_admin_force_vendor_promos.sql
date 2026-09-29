-- V27: admin-created payment-exempt vendors + second-month-free promo codes.
alter table public.vendor_profiles add column if not exists admin_payment_exempt boolean not null default false;

create table if not exists public.vendor_promo_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_type text not null check (discount_type in ('second_month_free')),
  stripe_coupon_id text not null,
  max_redemptions integer not null default 1 check (max_redemptions > 0),
  redemption_count integer not null default 0 check (redemption_count >= 0),
  active boolean not null default true,
  expires_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists vendor_promo_codes_code_idx on public.vendor_promo_codes(code);

create table if not exists public.vendor_promo_redemptions (
  id uuid primary key default gen_random_uuid(),
  promo_code_id uuid not null references public.vendor_promo_codes(id) on delete cascade,
  vendor_id uuid not null references public.vendor_profiles(id) on delete cascade,
  stripe_subscription_id text not null,
  applied_at timestamptz not null default now(),
  unique(promo_code_id,vendor_id)
);

alter table public.vendor_promo_codes enable row level security;
alter table public.vendor_promo_redemptions enable row level security;
drop policy if exists "no client access to vendor promo codes" on public.vendor_promo_codes;
create policy "no client access to vendor promo codes" on public.vendor_promo_codes for all to anon,authenticated using(false) with check(false);
drop policy if exists "no client access to vendor promo redemptions" on public.vendor_promo_redemptions;
create policy "no client access to vendor promo redemptions" on public.vendor_promo_redemptions for all to anon,authenticated using(false) with check(false);
