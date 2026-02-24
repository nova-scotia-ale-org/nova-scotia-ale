import { createClient } from "@supabase/supabase-js";
import { env } from "../config/env.js";

// For auth signUp/signIn (safe)
export const supabaseAuth = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

// For DB inserts/updates from backend (server only)
export const supabaseAdmin = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);