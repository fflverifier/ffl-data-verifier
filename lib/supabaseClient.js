import { createClient } from "@supabase/supabase-js";

// These come from the environment variables you added in Azure
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create a single Supabase client for the whole app
export const supabase = createClient(supabaseUrl, supabaseKey);
