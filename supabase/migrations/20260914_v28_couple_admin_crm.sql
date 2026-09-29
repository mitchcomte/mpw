alter table public.couple_profiles
  add column if not exists account_status text not null default 'active',
  add column if not exists couple_stage text not null default 'new',
  add column if not exists admin_notes text,
  add column if not exists last_contact_at date,
  add column if not exists next_follow_up_at date;

do $$ begin
  alter table public.couple_profiles add constraint couple_profiles_account_status_check
    check (account_status in ('active','paused','archived'));
exception when duplicate_object then null; end $$;

do $$ begin
  alter table public.couple_profiles add constraint couple_profiles_couple_stage_check
    check (couple_stage in ('new','planning','contacting_vendors','booked_vendors','married','inactive'));
exception when duplicate_object then null; end $$;

create index if not exists couple_profiles_admin_status_idx on public.couple_profiles(account_status, couple_stage);
create index if not exists couple_profiles_next_follow_up_idx on public.couple_profiles(next_follow_up_at) where next_follow_up_at is not null;
