import { createClient } from '@supabase/supabase-js';

// Create Email/Demo Supabase client
function createEmailSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_EMAIL_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_EMAIL_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Email Supabase environment variables not found. Email Supabase client will not be available.');
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
}

// Create Articles Supabase client
function createArticlesSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_ARTICLES_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ARTICLES_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Articles Supabase environment variables not found. Articles Supabase client will not be available.');
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
}



// Named clients for specific purposes
export const supabaseEmail = createEmailSupabaseClient();
export const supabaseArticles = createArticlesSupabaseClient();

// Legacy export for backward compatibility
export const supabase = createEmailSupabaseClient();
