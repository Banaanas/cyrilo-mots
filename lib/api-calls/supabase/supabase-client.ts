import { createClient } from "@supabase/supabase-js";

// Used to get supabaseClient outside the Functional Components (where you can use useSupabaseClient(), etc.)
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);
