create table if not exists vendor_push_subscriptions (
  id uuid primary key default uuid_generate_v4(),
  vendor_id uuid references vendor_profiles(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists vendor_push_subscriptions_user_idx on vendor_push_subscriptions(user_id);
create index if not exists vendor_push_subscriptions_vendor_idx on vendor_push_subscriptions(vendor_id);
alter table vendor_push_subscriptions enable row level security;
drop policy if exists "vendors read own push subscriptions" on vendor_push_subscriptions;
create policy "vendors read own push subscriptions" on vendor_push_subscriptions for select using ((select auth.uid())=user_id);
drop policy if exists "vendors delete own push subscriptions" on vendor_push_subscriptions;
create policy "vendors delete own push subscriptions" on vendor_push_subscriptions for delete using ((select auth.uid())=user_id);
grant select,delete on vendor_push_subscriptions to authenticated;

create table if not exists wedding_builder_match_events (
  id uuid primary key default uuid_generate_v4(),
  builder_session_id text not null,
  vendor_id uuid references vendor_profiles(id) on delete cascade not null,
  roster_mode text not null default 'match',
  city text,
  wedding_budget numeric,
  guest_count integer,
  wedding_style text,
  created_at timestamptz not null default now(),
  unique(builder_session_id,vendor_id)
);
create index if not exists wedding_builder_match_events_vendor_created_idx on wedding_builder_match_events(vendor_id,created_at desc);
alter table wedding_builder_match_events enable row level security;

create index if not exists vendor_notifications_vendor_idx on vendor_notifications(vendor_id);
drop policy if exists "vendors read own notifications" on vendor_notifications;
create policy "vendors read own notifications" on vendor_notifications for select using ((select auth.uid())=user_id);
drop policy if exists "vendors update own notifications" on vendor_notifications;
create policy "vendors update own notifications" on vendor_notifications for update using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
