/**
 * Example component demonstrating how to use the new supabaseArticles client
 *
 * This component shows how to:
 * - Fetch articles from the articles database
 * - Display them in a list
 * - Handle loading and error states
 * - Use the utility functions from supabase-utils.ts
 */

'use client';


import { Article, getArticlesByTag, getPublishedArticles } from '@/lib/supabase-utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ArticlesExampleProps {
  tag?: string; // Optional tag filter
}

export default function ArticlesExample({ tag }: ArticlesExampleProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      setError(null);

      try {
        let result;

        if (tag) {
          // Fetch articles by specific tag
          result = await getArticlesByTag(tag);
        } else {
          // Fetch all published articles
          result = await getPublishedArticles();
        }

        if (result.error) {
          setError(result.error);
        } else {
          setArticles(result.articles);
        }
      } catch (err) {
        setError('Failed to load articles');
        console.error('Articles loading error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [tag]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-[#202020]">Loading articles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-[#202020]">
          {tag ? `No articles found with tag "${tag}"` : 'No articles found'}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium font-britti-sans mb-8 text-[#202020]">
        {tag ? `Articles tagged "${tag}"` : 'Latest Articles'}
      </h2>

      <div className="space-y-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="border-b border-[#E8E8E8] pb-8 last:border-b-0"
          >
            {/* Article Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-medium font-britti-sans mb-2 text-[#202020]">
                <a
                  href={`/blog/${article.slug}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {article.title}
                </a>
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                {article.author && (
                  <span>By {article.author}</span>
                )}
                {article.published_at && (
                  <span>
                    {new Date(article.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
                {article.read_time && (
                  <span>{article.read_time}</span>
                )}
                {article.tag && (
                  <span className="px-2 py-1 bg-[#E8E8E8] rounded text-xs">
                    {article.tag}
                  </span>
                )}
              </div>
            </div>

            {/* Article Image */}
            {article.image_url && (
              <div className="mb-4">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  width={800}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            )}

            {/* Article Description */}
            <p className="text-[#202020] leading-relaxed mb-4">
              {article.description}
            </p>

            {/* Read More Link */}
            <a
              href={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 text-[#202020] hover:text-gray-600 transition-colors font-medium"
            >
              Read more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

// Example usage in different scenarios:

// 1. Show all articles
// <ArticlesExample />

// 2. Show articles with specific tag
// <ArticlesExample tag="technical" />

// 3. Show articles with specific tag
// <ArticlesExample tag="blog" />
