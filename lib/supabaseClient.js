import { createClient } from "@supabase/supabase-js";

// Use the PUBLIC env vars (safe for browser + build)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't crash build; we'll log and still export a client with empty strings
  console.warn("Missing Supabase env vars. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
