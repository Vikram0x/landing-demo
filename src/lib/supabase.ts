import { createClient } from "@supabase/supabase-js";

// Support multiple env var names
const supabaseUrl =
  (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_SUPABASE_URL) as string;

// Prefer server-side service role; otherwise fall back to anon key names
const serviceKey = (
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_SUPABASE_ANON_KEY
) as string;

if (!supabaseUrl || !serviceKey) {
  // eslint-disable-next-line no-console
  console.warn(
    "Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL or NEXT_SUPABASE_URL, and either SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY/NEXT_SUPABASE_ANON_KEY."
  );
}

export const supabaseServer = createClient(supabaseUrl || "", serviceKey || "", {
  auth: { persistSession: false },
});

