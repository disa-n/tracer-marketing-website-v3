/**
 * Centralized Blog Registry - Single Source of Truth for all blog posts
 *
 * This file automatically discovers and manages all blog posts from:
 * - MDX files in src/components/content/blog/
 */

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  tag?: string;
  readTime?: string;
  ogImage?: string;
  template?: 'default' | 'minimal' | 'magazine' | 'technical';
  imageSrc?: string; // For backward compatibility
  published?: boolean; // Controls visibility on blog pages
}

/**
 * JSON-LD Schema Types for SEO
 */
export interface BlogSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  publisher: {
    "@type": string;
    name: string;
    url: string;
  };
  inLanguage: string;
}

export interface BlogPostSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image?: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    url: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  url: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  articleSection: string;
  keywords?: string;
}

export interface BlogPost extends BlogPostMetadata {
  type: 'mdx' | 'static'; // Keep static for backward compatibility
  content?: string; // For backward compatibility with templates
  author: string; // Required for BlogPost
  tag: string; // Required for BlogPost
  imageSrc: string; // Required for BlogPost
}

// Registry of all available MDX blog posts
// This is the ONLY place where MDX slugs should be listed
const MDX_BLOG_POSTS = [
  'introducing-tracer-pt-1',
  'introducing-tracer-pt-2',
  'experimenting-with-tracer-pt-3',
  'error-detection-with-tracer-pt-4',
  'tracer-use-case101',

  'kenya-day-one',
  'kenya-day-two',
  'kenya-day-three',
  'kenya-day-four',
  'biweekly-roundup-1',
  'cloud-cost-monitoring',
  'cloud-cost-management',
] as const;

// Type for MDX blog post slugs
export type MDXBlogSlug = typeof MDX_BLOG_POSTS[number];

/**
 * Check if a slug corresponds to an MDX blog post
 */
export function isMDXBlogPost(slug: string): slug is MDXBlogSlug {
  return MDX_BLOG_POSTS.includes(slug as MDXBlogSlug);
}

/**
 * Get all MDX blog post slugs
 */
export function getAllMDXSlugs(): readonly string[] {
  return MDX_BLOG_POSTS;
}

/**
 * Static metadata for MDX posts (to avoid server-side import issues)
 */
const MDX_METADATA: Record<string, BlogPostMetadata> = {
  'introducing-tracer-pt-1': {
    slug: 'introducing-tracer-pt-1',
    title: 'Introducing Tracer (Part 1)',
    date: 'January 21, 2024',
    description: 'We\'re working in stealth on a new startup called Tracer. We wanted to share more about the product, the journey so far, and the "why" behind it.',
    author: 'Team Tracer',
    tag: 'product',
    readTime: '5 min read',
    ogImage: '/images/blog/posts/T-DNA-Pink.webp',
    template: 'default'
  },
  'introducing-tracer-pt-2': {
    slug: 'introducing-tracer-pt-2',
    title: 'Introducing Tracer (Part 2)',
    date: 'February 15, 2024',
    description: 'Software complexity sparks hard-to-solve questions in computational biology. Observability should be tailor-made to biology.',
    author: 'Team Tracer',
    tag: 'product',
    readTime: '6 min read',
    ogImage: '/images/blog/posts/T-Asset-DNA-Pink.webp',
    template: 'default'
  },
  'experimenting-with-tracer-pt-3': {
    slug: 'experimenting-with-tracer-pt-3',
    title: 'Experimenting with Tracer (Part 3)',
    date: 'March 10, 2024',
    description: 'Tracer provides real-time insights into ChIP-Seq data analysis. Data size gradients allow thresholding of data-sizes and tools with Tracer.',
    author: 'Team Tracer',
    tag: 'experiment',
    readTime: '8 min read',
    ogImage: '/images/blog/posts/terminal.webp',
    template: 'default'
  },
  'error-detection-with-tracer-pt-4': {
    slug: 'error-detection-with-tracer-pt-4',
    title: 'Error Detection with Tracer (Part 4)',
    date: 'March 25, 2024',
    description: 'Tracer is able to assess and pin-point errors in tools involved in ChIP-Seq analysis. Use of an incorrect genome file disrupts the creation of a complete genome index.',
    author: 'Team Tracer',
    tag: 'experiment',
    readTime: '7 min read',
    ogImage: '/images/blog/posts/grafana-oom.webp',
    template: 'default'
  },
  'tracer-use-case101': {
    slug: 'tracer-use-case101',
    title: 'Tracer Use Case 101',
    date: 'April 5, 2024',
    description: 'A bioinformatician\'s tale: How Tracer helps track, log, and visualize bioinformatics workflows in real-time, identifying pipeline issues and pinpointing errors.',
    author: 'Team Tracer',
    tag: 'use-case',
    readTime: '6 min read',
    ogImage: '/images/blog/posts/onboarding.webp',
    template: 'default'
  },

  'kenya-day-one': {
    slug: 'kenya-day-one',
    title: 'Hackathon Day One: Monday, June 2nd',
    date: '02 Jun 2025',
    description: 'A hackathon kick-off note from Laura, our COO, and records from our first day in Nairobi, Kenya.',
    author: 'Laura',
    tag: 'blog',
    readTime: '5 min read',
    ogImage: '/images/blog/series/kenya-hackathon/day1-city-view.webp',
    template: 'default'
  },
  'kenya-day-two': {
    slug: 'kenya-day-two',
    title: 'Hackathon Day Two: Tuesday, June 3rd',
    date: '03 Jun 2025',
    description: 'Kenya Day Two: Tracer runs natively on Mac ARM, the blog goes live, and we\'re learning why having the right foundation matters.',
    author: 'Paul',
    tag: 'blog',
    readTime: '8 min read',
    ogImage: '/images/blog/series/kenya-hackathon/day2-tracer-working.webp',
    template: 'default'
  },
  'kenya-day-three': {
    slug: 'kenya-day-three',
    title: 'Hackathon Day Three: Wednesday, June 4th',
    date: '04 Jun 2025',
    description: 'Kenya Day Three: A well-earned break, a tour through Nairobi\'s rich history, and rooftop views before diving back into build mode.',
    author: 'Paul',
    tag: 'blog',
    readTime: '5 min read',
    ogImage: '/images/blog/series/kenya-hackathon/day3-tracer-rooftop.webp',
    template: 'default'
  },
  'kenya-day-four': {
    slug: 'kenya-day-four',
    title: 'Hackathon Day Four: Thursday, June 5th',
    date: '05 Jun 2025',
    description: 'Tracer\'s beta launch is nearly here - today we shipped onboarding, fallback tracing, branch-based installs, and better OOM insights.',
    author: 'Isolde',
    tag: 'blog',
    readTime: '7 min read',
    ogImage: '/images/blog/series/kenya-hackathon/day4-tracer-hardwork.webp',
    template: 'default'
  },
  'biweekly-roundup-1': {
    slug: 'biweekly-roundup-1',
    title: 'Roundup #1',
    date: 'June 20, 2025',
    description: 'Our first bi-weekly roundup covering product updates, team milestones, and technical insights from the Tracer team.',
    author: 'Isolde',
    tag: 'blog',
    readTime: '4 min read',
    ogImage: '/images/blog/series/biweekly-roundups/Header-Roundup1.jpeg',
    template: 'default'
  },
  'cloud-cost-monitoring': {
    slug: 'cloud-cost-monitoring',
    title: 'Cloud cost monitoring in bioinformatics',
    date: 'June 20, 2025',
    description: 'Monitoring and understanding costs for scientific workloads running on cloud technology infrastructure such as AWS, remains a persistent challenge that current tools fail to solve.',
    author: 'Team Tracer',
    tag: 'article',
    readTime: '8 min read',
    ogImage: '/images/blog/posts/T-chip.webp',
    template: 'default'
  },
  'cloud-cost-management': {
    slug: 'cloud-cost-management',
    title: 'Cloud Cost Management for Scientific Computing',
    date: 'June 26, 2025',
    description: 'Effective strategies and tools for managing cloud costs in scientific computing environments, from resource optimization to budget monitoring.',
    author: 'Team Tracer',
    tag: 'cloud',
    readTime: '8 min read',
    ogImage: '/images/blog/posts/dna-blog-costs.webp',
    template: 'default'
  },
};

/**
 * Load metadata from an MDX file (server-safe)
 */
export async function loadMDXMetadata(slug: string): Promise<BlogPostMetadata | null> {
  // Use static metadata to avoid server-side import issues
  const metadata = MDX_METADATA[slug];

  if (!metadata) {
    // No metadata found for MDX post
    return null;
  }

  return {
    ...metadata,
    imageSrc: metadata.ogImage || '/icons/icon-placeholder.svg', // For backward compatibility
  };
}



/**
 * Get all blog posts (both MDX and static) with their metadata
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  const processedSlugs = new Set<string>();

  // Load MDX posts first (they take priority)
  for (const slug of MDX_BLOG_POSTS) {
    const metadata = await loadMDXMetadata(slug);
    if (metadata) {
      allPosts.push({
        ...metadata,
        type: 'mdx',
        author: metadata.author || 'Team Tracer',
        tag: metadata.tag || 'general',
        imageSrc: metadata.imageSrc || metadata.ogImage || '/placeholder-icon.svg',
      });
      processedSlugs.add(slug);
    }
  }

  // Note: Legacy static posts have been removed - all posts are now MDX

  // Sort by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a specific blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Check if it's an MDX post
  if (isMDXBlogPost(slug)) {
    const metadata = await loadMDXMetadata(slug);
    if (metadata) {
      return {
        ...metadata,
        type: 'mdx',
        author: metadata.author || 'Team Tracer',
        tag: metadata.tag || 'general',
        imageSrc: metadata.imageSrc || metadata.ogImage || '/placeholder-icon.svg',
      };
    }
  }

  // No static posts - all posts are now MDX
  return null;
}

/**
 * Get blog posts for static generation
 */
export async function getBlogPostsForStaticGeneration(): Promise<{ slug: string }[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.map(post => ({ slug: post.slug }));
}

/**
 * Get blog posts formatted for the blog page client
 */
export async function getBlogPostsForClient(): Promise<Array<{
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
}>> {
  // Use getAllBlogPosts which already handles deduplication
  const allPosts = await getAllBlogPosts();

  // Filter out unpublished posts (published: false)
  const publishedPosts = allPosts.filter(post => {
    // If published field is explicitly set to false, hide the post
    if (post.published === false) {
      return false;
    }
    // Default to published if not specified
    return true;
  });

  return publishedPosts.map(post => ({
    slug: post.slug,
    metadata: {
      title: post.title,
      date: post.date,
      description: post.description,
      tag: post.tag || 'general',
      ogImage: post.ogImage || '/placeholder-icon.svg',
      author: post.author || 'Team Tracer',
    },
  }));
}

/**
 * Get the base URL for the application
 */
function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'production') {
    return 'https://tracer.cloud';
  }

  // For development, use NEXT_PUBLIC_BASE_URL if set, otherwise default to localhost:3000
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

/**
 * Generate JSON-LD schema for the main blog/resources page
 */
export function generateBlogSchema(): BlogSchema {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tracer Resources",
    "url": `${baseUrl}/resources`,
    "description": "Insights, updates, technical articles, and tools related to HPC observability, bioinformatics, and scientific computing",
    "publisher": {
      "@type": "Organization",
      "name": "Tracer",
      "url": baseUrl
    },
    "inLanguage": "en-US"
  };
}

/**
 * Generate JSON-LD schema for individual blog posts
 */
export function generateBlogPostSchema(post: BlogPost): BlogPostSchema {
  const baseUrl = getBaseUrl();
  const postUrl = `${baseUrl}/blog/${post.slug}`; // Use canonical blog URL

  // Format date to ISO 8601
  const publishDate = new Date(post.date).toISOString();

  // Use author or default to "Tracer Team"
  const authorName = post.author && typeof post.author === 'string' ? post.author :
    post.author && Array.isArray(post.author) ? post.author.join(', ') :
      'Tracer Team';

  // Generate keywords from tag and title
  const keywords = [
    post.tag,
    'HPC',
    'observability',
    'scientific computing',
    'performance monitoring'
  ].filter(Boolean).join(', ');

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.ogImage || post.imageSrc || '/placeholder-icon.svg',
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tracer",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate, // Use same date for now, can be enhanced later
    "url": postUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "articleSection": "Technology",
    "keywords": keywords
  };
}
