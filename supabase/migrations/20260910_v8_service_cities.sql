alter table public.vendor_profiles add column if not exists service_cities text[] not null default '{}';

update public.vendor_profiles
set service_cities = array[city]
where coalesce(array_length(service_cities,1),0)=0
  and city is not null
  and trim(city) <> '';

create index if not exists vendor_profiles_service_cities_gin_idx
on public.vendor_profiles using gin(service_cities);
