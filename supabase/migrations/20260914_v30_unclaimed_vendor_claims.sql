alter table public.vendor_profiles add column if not exists listing_state text not null default 'claimed';
alter table public.vendor_profiles drop constraint if exists vendor_profiles_listing_state_check;
alter table public.vendor_profiles add constraint vendor_profiles_listing_state_check check (listing_state in ('claimed','unclaimed','claim_pending'));
create table if not exists public.vendor_claim_requests (
 id uuid primary key default gen_random_uuid(), vendor_id uuid not null references public.vendor_profiles(id) on delete cascade,
 claimant_name text not null, claimant_email text not null, claimant_phone text not null, verification_note text not null,
 status text not null default 'pending' check(status in ('pending','approved','rejected')), admin_notes text,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index if not exists vendor_claim_requests_vendor_idx on public.vendor_claim_requests(vendor_id,status);
alter table public.vendor_claim_requests enable row level security;
revoke all on public.vendor_claim_requests from anon, authenticated;
