/**
 * Minimal Supabase PDF Client
 * 
 * Simple client for accessing PDFs from Supabase Storage
 * Uses the existing articles client for storage access
 */

import { supabaseArticles } from './supabaseClient';

export { supabaseArticles as supabasePdfs };
