-- V21 Founding Vendor launch promotion
-- First five vendors in each category can lock Premium membership at the Basic rate
-- for as long as the subscription remains continuously active.

alter table public.vendor_profiles
  add column if not exists founding_vendor boolean not null default false,
  add column if not exists founding_vendor_position smallint,
  add column if not exists founding_vendor_category text,
  add column if not exists founding_vendor_activated_at timestamptz,
  add column if not exists founding_vendor_forfeited_at timestamptz;

alter table public.vendor_profiles
  drop constraint if exists vendor_profiles_founding_vendor_position_check;
alter table public.vendor_profiles
  add constraint vendor_profiles_founding_vendor_position_check
  check (founding_vendor_position is null or founding_vendor_position between 1 and 5);

create table if not exists public.founding_vendor_memberships (
  id uuid primary key default gen_random_uuid(),
  market_slug text not null default 'portland' references public.markets(slug) on update cascade on delete restrict,
  category text not null,
  position smallint not null check (position between 1 and 5),
  reservation_email text,
  vendor_id uuid unique references public.vendor_profiles(id) on delete set null,
  status text not null default 'reserved' check (status in ('reserved','active','forfeited')),
  reserved_until timestamptz,
  activated_at timestamptz,
  forfeited_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (market_slug, category, position)
);

create index if not exists founding_vendor_memberships_category_idx
  on public.founding_vendor_memberships (market_slug, category, status);
create index if not exists founding_vendor_memberships_email_idx
  on public.founding_vendor_memberships (lower(reservation_email))
  where reservation_email is not null;

alter table public.founding_vendor_memberships enable row level security;

-- No public RLS policies are intentionally created. Reads/writes are performed through
-- server-side application routes using the server key so reservation details are not exposed.

create or replace function public.reserve_founding_vendor_offer(
  p_market_slug text,
  p_category text,
  p_email text
) returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_position integer;
  v_email text := lower(trim(p_email));
begin
  -- Serialize reservations within a market/category so two simultaneous signups
  -- cannot receive the same founding position.
  perform pg_advisory_xact_lock(hashtext(coalesce(p_market_slug,'') || ':' || coalesce(p_category,'')));

  delete from public.founding_vendor_memberships
   where market_slug = p_market_slug
     and category = p_category
     and status = 'reserved'
     and reserved_until is not null
     and reserved_until < now();

  -- Re-use an existing live reservation for the same email/category.
  select position into v_position
    from public.founding_vendor_memberships
   where market_slug = p_market_slug
     and category = p_category
     and status = 'reserved'
     and lower(reservation_email) = v_email
     and (reserved_until is null or reserved_until >= now())
   limit 1;

  if v_position is not null then
    update public.founding_vendor_memberships
       set reserved_until = now() + interval '30 minutes', updated_at = now()
     where market_slug = p_market_slug and category = p_category and position = v_position;
    return v_position;
  end if;

  select gs into v_position
    from generate_series(1,5) gs
   where not exists (
     select 1 from public.founding_vendor_memberships f
      where f.market_slug = p_market_slug
        and f.category = p_category
        and f.position = gs
   )
   order by gs
   limit 1;

  if v_position is null then
    return null;
  end if;

  insert into public.founding_vendor_memberships (
    market_slug, category, position, reservation_email, status, reserved_until
  ) values (
    p_market_slug, p_category, v_position, v_email, 'reserved', now() + interval '30 minutes'
  );

  return v_position;
end;
$$;

revoke all on function public.reserve_founding_vendor_offer(text,text,text) from public, anon, authenticated;
grant execute on function public.reserve_founding_vendor_offer(text,text,text) to service_role;

create or replace function public.release_founding_vendor_offer(
  p_market_slug text,
  p_category text,
  p_email text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.founding_vendor_memberships
   where market_slug = p_market_slug
     and category = p_category
     and status = 'reserved'
     and lower(reservation_email) = lower(trim(p_email));
end;
$$;

revoke all on function public.release_founding_vendor_offer(text,text,text) from public, anon, authenticated;
grant execute on function public.release_founding_vendor_offer(text,text,text) to service_role;

drop policy if exists "no client access to founding vendor memberships" on public.founding_vendor_memberships;
create policy "no client access to founding vendor memberships"
on public.founding_vendor_memberships
for all
to anon, authenticated
using (false)
with check (false);
