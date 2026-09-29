create table if not exists vendor_notifications (
  id uuid primary key default uuid_generate_v4(),
  vendor_id uuid references vendor_profiles(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade not null,
  type text not null,
  title text not null,
  body text,
  href text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists vendor_notifications_user_created_idx on vendor_notifications(user_id,created_at desc);
alter table vendor_notifications enable row level security;
create policy "vendors read own notifications" on vendor_notifications for select using (auth.uid()=user_id);
create policy "vendors update own notifications" on vendor_notifications for update using (auth.uid()=user_id) with check (auth.uid()=user_id);
grant select,update on vendor_notifications to authenticated;
-- Qualified Wedding Builder leads are inserted by the server after explicit couple consent.
