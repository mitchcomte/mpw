create table if not exists public.wedding_builder_rate_limits (
  fingerprint text primary key,
  window_started_at timestamptz not null default now(),
  match_count integer not null default 0,
  lead_count integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.wedding_builder_rate_limits enable row level security;
drop policy if exists "no client access to wedding builder rate limits" on public.wedding_builder_rate_limits;
create policy "no client access to wedding builder rate limits"
on public.wedding_builder_rate_limits for all to anon, authenticated
using (false) with check (false);

create or replace function public.consume_wedding_builder_quota(
  p_fingerprint text,
  p_kind text,
  p_limit integer
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_count integer;
begin
  if p_kind not in ('match','lead') or p_limit < 1 then return false; end if;

  insert into public.wedding_builder_rate_limits(fingerprint, window_started_at, match_count, lead_count, updated_at)
  values (p_fingerprint, now(), 0, 0, now())
  on conflict (fingerprint) do nothing;

  update public.wedding_builder_rate_limits
     set window_started_at = case when window_started_at < now() - interval '1 hour' then now() else window_started_at end,
         match_count = case when window_started_at < now() - interval '1 hour' then 0 else match_count end,
         lead_count = case when window_started_at < now() - interval '1 hour' then 0 else lead_count end,
         updated_at = now()
   where fingerprint = p_fingerprint;

  if p_kind = 'match' then
    select match_count into current_count from public.wedding_builder_rate_limits where fingerprint = p_fingerprint for update;
    if current_count >= p_limit then return false; end if;
    update public.wedding_builder_rate_limits set match_count = match_count + 1, updated_at = now() where fingerprint = p_fingerprint;
  else
    select lead_count into current_count from public.wedding_builder_rate_limits where fingerprint = p_fingerprint for update;
    if current_count >= p_limit then return false; end if;
    update public.wedding_builder_rate_limits set lead_count = lead_count + 1, updated_at = now() where fingerprint = p_fingerprint;
  end if;
  return true;
end;
$$;

revoke all on function public.consume_wedding_builder_quota(text,text,integer) from public, anon, authenticated;
grant execute on function public.consume_wedding_builder_quota(text,text,integer) to service_role;
