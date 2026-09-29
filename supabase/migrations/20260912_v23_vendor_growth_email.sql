-- V23: transactional email dedupe + richer lead center.
create table if not exists public.transactional_email_events (
  id uuid primary key default uuid_generate_v4(),
  event_key text not null unique,
  recipient text not null,
  email_type text not null,
  provider_id text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.transactional_email_events enable row level security;
revoke all on table public.transactional_email_events from anon, authenticated;
drop policy if exists "no client access to transactional email events" on public.transactional_email_events;
create policy "no client access to transactional email events" on public.transactional_email_events for all to anon, authenticated using (false) with check (false);

alter table public.leads add column if not exists source text not null default 'profile';
alter table public.leads add column if not exists contact_method text;
alter table public.leads add column if not exists vendor_notes text;
alter table public.leads add column if not exists updated_at timestamptz not null default now();
create index if not exists leads_vendor_source_idx on public.leads(vendor_id, source, created_at desc);
create index if not exists leads_vendor_status_idx on public.leads(vendor_id, status, created_at desc);
