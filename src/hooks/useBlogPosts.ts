import { useState, useEffect } from 'react';
import { getBlogPostsForClient } from '@/lib/blog-registry';
import { BLOG_CONFIG } from '@/lib/constants';

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
};

export type BlogData = {
  directories: BlogPost[];
  posts: BlogPost[];
};

export function useBlogPosts() {
  const [data, setData] = useState<BlogData>({ directories: [], posts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const blogPosts = await getBlogPostsForClient();
        
        // Create directory posts
        const kenyaHackathonPost: BlogPost = BLOG_CONFIG.kenyaHackathonPost;
        const biweeklyRoundupsPost: BlogPost = BLOG_CONFIG.biweeklyRoundupsPost;

        // Filter to only show specific posts (Kenya days 1-4 and bi-weekly roundups)
        const allowedSlugs = [...BLOG_CONFIG.allowedSlugs, ...(BLOG_CONFIG.allowedBiweeklySlugs || [])];
        const filteredPosts = blogPosts.filter(post =>
          allowedSlugs.includes(post.slug) &&
          post.slug !== 'kenya-hackathon' &&
          post.slug !== 'biweekly-roundups'
        );
        
        // Format dates to ensure consistent style (date, month, year)
        const formattedPosts = filteredPosts.map(post => {
          let formattedDate = post.metadata.date;
          try {
            let dateObj;
            
            // Handle formats like "Mon, 2 June" or "Monday, 2 June"
            const dayDateMatch = post.metadata.date.match(/(?:\w+,\s*)?(\d+)\s+(\w+)(?:\s+(\d{4}))?/);
            if (dayDateMatch) {
              const day = parseInt(dayDateMatch[1]);
              const monthName = dayDateMatch[2];
              const year = dayDateMatch[3] || '2025';
              
              const months = ['january', 'february', 'march', 'april', 'may', 'june', 
                             'july', 'august', 'september', 'october', 'november', 'december'];
              const monthIndex = months.findIndex(m => m.toLowerCase() === monthName.toLowerCase());
              
              if (monthIndex !== -1) {
                dateObj = new Date(parseInt(year), monthIndex, day);
              }
            }
            
            if (!dateObj || isNaN(dateObj.getTime())) {
              dateObj = new Date(post.metadata.date);
            }
            
            if (dateObj && !isNaN(dateObj.getTime())) {
              const date = dateObj.getDate().toString().padStart(2, '0');
              const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              const month = months[dateObj.getMonth()];
              const year = dateObj.getFullYear();
              formattedDate = `${date} ${month} ${year}`;
            }
          } catch (e) {
            console.error('Error formatting date:', e);
          }
          
          return {
            ...post,
            metadata: {
              ...post.metadata,
              date: formattedDate
            }
          };
        });
        
        // Sort filtered posts by date (newest to oldest for individual posts)
        formattedPosts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

        // Separate directories and individual posts
        const directories = [biweeklyRoundupsPost, kenyaHackathonPost]; // Newest first
        const posts = formattedPosts;

        setData({ directories, posts });
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return { data, loading, error };
}
