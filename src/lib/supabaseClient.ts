import { createClient } from '@supabase/supabase-js';

// Create Supabase client only if environment variables are available
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables not found. Supabase client will not be available.');
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
}

export const supabase = createSupabaseClient();
