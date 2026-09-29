-- MPW v35.2 — vendor referral rewards
create table if not exists public.vendor_referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_vendor_id uuid not null references public.vendor_profiles(id) on delete cascade,
  referred_vendor_id uuid references public.vendor_profiles(id) on delete set null,
  referred_email text not null,
  referral_code text not null,
  status text not null default 'signed_up' check (status in ('signed_up','qualified','rewarded','ineligible')),
  qualified_at timestamptz,
  rewarded_at timestamptz,
  reward_amount_cents integer,
  reward_stripe_transaction_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists vendor_referrals_referred_email_unique on public.vendor_referrals(lower(referred_email));
create unique index if not exists vendor_referrals_referred_vendor_unique on public.vendor_referrals(referred_vendor_id) where referred_vendor_id is not null;
create index if not exists vendor_referrals_referrer_idx on public.vendor_referrals(referrer_vendor_id, created_at desc);
alter table public.vendor_referrals enable row level security;
-- Service-role/admin code manages rewards. Vendors see referral data through server-rendered dashboard only.
