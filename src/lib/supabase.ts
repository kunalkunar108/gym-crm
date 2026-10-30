import { createClient, type SupabaseClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
let client: SupabaseClient | null = null
/** Browser client only. Never expose service-role keys or database passwords in VITE_* variables. */
export function getSupabaseClient(): SupabaseClient {
  if (!isSupabaseConfigured) throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.')
  if (!client) client = createClient(supabaseUrl!, supabaseAnonKey!, { auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } })
  return client
}