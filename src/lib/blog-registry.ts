/**
 * Centralized Blog Registry - Single Source of Truth for all blog posts
 * 
 * This file automatically discovers and manages all blog posts from both:
 * - MDX files in src/components/content/blog/
 * - Static posts in blogPosts.ts (legacy)
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

export interface BlogPost extends BlogPostMetadata {
  type: 'mdx' | 'static';
  content?: string; // Only for static posts
}

// Registry of all available MDX blog posts
// This is the ONLY place where MDX slugs should be listed
const MDX_BLOG_POSTS = [
  'introducing-tracer-pt-1',
  'introducing-tracer-pt-2',
  'experimenting-with-tracer-pt-3',
  'error-detection-with-tracer-pt-4',
  'tracer-use-case101',
  'test-post-1',
  'test-post-2',
  'sample-mdx-post',
  'kenya-day-one',
  'kenya-day-two',
  'kenya-day-three',
  'kenya-day-four',
  'biweekly-roundup-1',
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
    template: 'default'
  },
  'test-post-1': {
    slug: 'test-post-1',
    title: 'Test Post 1',
    date: 'January 1, 2024',
    description: 'Description for test post 1',
    author: 'Team Tracer',
    tag: 'test',
    readTime: '2 min read',
    template: 'default'
  },
  'test-post-2': {
    slug: 'test-post-2',
    title: 'Test Post 2',
    date: 'January 2, 2024',
    description: 'Description for test post 2',
    author: 'Team Tracer',
    tag: 'test',
    readTime: '3 min read',
    template: 'default'
  },
  'sample-mdx-post': {
    slug: 'sample-mdx-post',
    title: 'Sample MDX Blog Post with Template',
    date: 'Mon, 25 June',
    description: 'This is a sample MDX blog post demonstrating how to use templates with MDX content.',
    author: 'Team Tracer',
    tag: 'development',
    readTime: '3 min read',
    ogImage: '/Blog/globe-preview-image.webp',
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
    ogImage: '/Blog/day1-city-view.webp',
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
    ogImage: '/Blog/day2-tracer-working.webp',
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
    ogImage: '/Blog/day3-tracer-rooftop.webp',
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
    ogImage: '/Blog/day4-tracer-hardwork.webp',
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
    ogImage: '/Blog/Header-Roundup1.jpeg',
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
    console.warn(`No metadata found for MDX post: ${slug}`);
    return null;
  }

  return {
    ...metadata,
    imageSrc: metadata.ogImage, // For backward compatibility
  };
}

/**
 * Load metadata from static blog posts (legacy)
 */
export async function loadStaticBlogPosts(): Promise<BlogPost[]> {
  try {
    const { getAllBlogPosts } = await import('@/data/blogPosts');
    const staticPosts = getAllBlogPosts();
    
    return staticPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
      author: post.author,
      tag: post.tag,
      readTime: post.readTime,
      ogImage: post.imageSrc,
      imageSrc: post.imageSrc,
      type: 'static' as const,
      content: post.content,
    }));
  } catch (error) {
    console.error('Error loading static blog posts:', error);
    return [];
  }
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
      });
      processedSlugs.add(slug);
    }
  }

  // Load static posts, but skip any that already exist as MDX
  const staticPosts = await loadStaticBlogPosts();
  for (const staticPost of staticPosts) {
    if (!processedSlugs.has(staticPost.slug)) {
      allPosts.push(staticPost);
      processedSlugs.add(staticPost.slug);
    }
  }

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
      };
    }
  }

  // Check static posts
  const staticPosts = await loadStaticBlogPosts();
  const staticPost = staticPosts.find(post => post.slug === slug);
  
  return staticPost || null;
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

  return allPosts.map(post => ({
    slug: post.slug,
    metadata: {
      title: post.title,
      date: post.date,
      description: post.description,
      tag: post.tag,
      ogImage: post.ogImage,
      author: post.author,
    },
  }));
}
