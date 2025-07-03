/**
 * Supabase Utilities - Helper functions for working with multiple Supabase clients
 * 
 * This file provides utility functions for:
 * - Email signups and demo enquiries (using supabaseEmail)
 * - Articles and blog content (using supabaseArticles)
 */

import { supabaseArticles, supabaseEmail } from './supabaseClient';

// Types for email signups
export interface EmailSignup {
  id?: string;
  email: string;
  created_at?: string;
}

// Types for demo enquiries
export interface DemoEnquiry {
  id?: string;
  name: string;
  email: string;
  job_title: string;
  created_at?: string;
}

// Types for articles (adjust these based on your articles database schema)
export interface Article {
  id?: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  author?: string;
  tag?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  image_url?: string;
  read_time?: string;
  published?: boolean;
}

/**
 * EMAIL SIGNUPS & DEMO ENQUIRIES (using supabaseEmail client)
 */

// Save email signup
export async function saveEmailSignup(email: string): Promise<{ success: boolean; error?: string }> {
  if (!supabaseEmail) {
    return { success: false, error: 'Email Supabase client not available' };
  }

  try {
    const { error } = await supabaseEmail
      .from('email_signups')
      .insert([{ email }]);

    if (error) {
      console.error('Email signup error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Email signup error:', err);
    return { success: false, error: 'Failed to save email signup' };
  }
}

// Save demo enquiry
export async function saveDemoEnquiry(enquiry: Omit<DemoEnquiry, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  if (!supabaseEmail) {
    return { success: false, error: 'Email Supabase client not available' };
  }

  try {
    const { error } = await supabaseEmail
      .from('demo_enquiries')
      .insert([{
        name: enquiry.name,
        email: enquiry.email,
        job_title: enquiry.job_title
      }]);

    if (error) {
      console.error('Demo enquiry error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Demo enquiry error:', err);
    return { success: false, error: 'Failed to save demo enquiry' };
  }
}

/**
 * ARTICLES (using supabaseArticles client)
 */

// Get all published articles
export async function getPublishedArticles(): Promise<{ articles: Article[]; error?: string }> {
  if (!supabaseArticles) {
    return { articles: [], error: 'Articles Supabase client not available' };
  }

  try {
    const { data, error } = await supabaseArticles
      .from('articles')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Articles fetch error:', error.message);
      return { articles: [], error: error.message };
    }

    return { articles: data || [] };
  } catch (err) {
    console.error('Articles fetch error:', err);
    return { articles: [], error: 'Failed to fetch articles' };
  }
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<{ article: Article | null; error?: string }> {
  if (!supabaseArticles) {
    return { article: null, error: 'Articles Supabase client not available' };
  }

  try {
    const { data, error } = await supabaseArticles
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Article fetch error:', error.message);
      return { article: null, error: error.message };
    }

    return { article: data };
  } catch (err) {
    console.error('Article fetch error:', err);
    return { article: null, error: 'Failed to fetch article' };
  }
}

// Get articles by tag
export async function getArticlesByTag(tag: string): Promise<{ articles: Article[]; error?: string }> {
  if (!supabaseArticles) {
    return { articles: [], error: 'Articles Supabase client not available' };
  }

  try {
    const { data, error } = await supabaseArticles
      .from('articles')
      .select('*')
      .eq('tag', tag)
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Articles by tag fetch error:', error.message);
      return { articles: [], error: error.message };
    }

    return { articles: data || [] };
  } catch (err) {
    console.error('Articles by tag fetch error:', err);
    return { articles: [], error: 'Failed to fetch articles by tag' };
  }
}

// Create new article (for admin use)
export async function createArticle(article: Omit<Article, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; article?: Article; error?: string }> {
  if (!supabaseArticles) {
    return { success: false, error: 'Articles Supabase client not available' };
  }

  try {
    const { data, error } = await supabaseArticles
      .from('articles')
      .insert([article])
      .select()
      .single();

    if (error) {
      console.error('Article creation error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, article: data };
  } catch (err) {
    console.error('Article creation error:', err);
    return { success: false, error: 'Failed to create article' };
  }
}



/**
 * UTILITY FUNCTIONS
 */

// Check if clients are available
export function getClientStatus() {
  return {
    emailClient: !!supabaseEmail,
    articlesClient: !!supabaseArticles,
  };
}

// Test connection to both databases
export async function testConnections(): Promise<{ email: boolean; articles: boolean }> {
  const results = { email: false, articles: false };

  // Test email client
  if (supabaseEmail) {
    try {
      const { error } = await supabaseEmail.from('email_signups').select('count').limit(1);
      results.email = !error;
    } catch {
      results.email = false;
    }
  }

  // Test articles client
  if (supabaseArticles) {
    try {
      const { error } = await supabaseArticles.from('articles').select('count').limit(1);
      results.articles = !error;
    } catch {
      results.articles = false;
    }
  }

  return results;
}
