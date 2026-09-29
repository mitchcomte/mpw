drop policy if exists "no client access to wedding builder match events" on public.wedding_builder_match_events;
create policy "no client access to wedding builder match events"
on public.wedding_builder_match_events
for all
to anon, authenticated
using (false)
with check (false);
