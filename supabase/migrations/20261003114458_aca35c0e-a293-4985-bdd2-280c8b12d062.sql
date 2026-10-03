-- Trip agent, step 2: memory.
-- The customer's own trip profile, one conversation thread per customer and
-- trip, and the messages in it. Customers read their own rows; all writes to
-- threads and messages happen server-side through the service role.

-- ---------------------------------------------------------------------------
-- trip_profiles: what the customer told us about their own trip
-- ---------------------------------------------------------------------------
CREATE TABLE public.trip_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  itinerary_slug text not null,
  travel_start date,
  travel_end date,
  -- Free text, e.g. "2 adults", "family with kids 6 and 9"
  party text,
  -- 'relaxed' | 'balanced' | 'full'
  pace text,
  -- 'save' | 'as_planned' | 'splurge'
  budget text,
  -- Dietary needs, mobility, must-dos, anything else
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, itinerary_slug)
);

GRANT SELECT, INSERT, UPDATE ON public.trip_profiles TO authenticated;
GRANT ALL ON public.trip_profiles TO service_role;
ALTER TABLE public.trip_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own trip profile"
ON public.trip_profiles FOR ALL TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can read all trip profiles"
ON public.trip_profiles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- chat_threads: one conversation per customer and trip
-- ---------------------------------------------------------------------------
CREATE TABLE public.chat_threads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  itinerary_slug text not null,
  lang text not null default 'en',
  -- Number of customer messages so far; drives the per-trip budget
  user_message_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, itinerary_slug)
);

GRANT SELECT ON public.chat_threads TO authenticated;
GRANT ALL ON public.chat_threads TO service_role;
ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own threads"
ON public.chat_threads FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can read all threads"
ON public.chat_threads FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- chat_messages
-- ---------------------------------------------------------------------------
CREATE TABLE public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.chat_threads (id) on delete cascade,
  user_id uuid not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

CREATE INDEX chat_messages_thread_created_idx ON public.chat_messages (thread_id, created_at);
CREATE INDEX chat_messages_user_created_idx ON public.chat_messages (user_id, created_at);

GRANT SELECT ON public.chat_messages TO authenticated;
GRANT ALL ON public.chat_messages TO service_role;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own messages"
ON public.chat_messages FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can read all messages"
ON public.chat_messages FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));