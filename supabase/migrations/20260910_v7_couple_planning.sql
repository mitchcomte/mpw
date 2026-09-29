-- This migration has already been applied to production project fsucdzeksqwtpvzoxaws.
-- Kept here so the codebase documents the V7 database changes.

create table if not exists public.couple_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  market_slug text not null default 'portland' references public.markets(slug),
  first_name text,
  partner_name text,
  wedding_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.planning_budget_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null,
  budgeted numeric(12,2) not null default 0 check (budgeted >= 0),
  actual numeric(12,2) not null default 0 check (actual >= 0),
  paid numeric(12,2) not null default 0 check (paid >= 0),
  notes text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.planning_guests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  email text,
  phone text,
  party_size integer not null default 1 check (party_size between 1 and 20),
  rsvp_status text not null default 'pending' check (rsvp_status in ('pending','yes','no')),
  meal_choice text,
  group_name text,
  table_name text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
