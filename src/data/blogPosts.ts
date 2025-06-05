export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  imageSrc: string;
  description: string;
  content: string;
  author?: string;
  tag?: string;
  readTime?: string;
}

export const blogPosts: Record<string, BlogPost> = {
  'kenya-day-one': {
    slug: 'kenya-day-one',
    title: 'Hackathon Day One: Monday, June 2nd',
    date: 'Mon, 2 June',
    imageSrc: '/Blog/day1-city-view.webp',
    description: 'A hackathon kick-off note from Laura, our COO, and records from our first day in Nairobi, Kenya.',
    author: 'Team Tracer',
    tag: 'Blog',
    readTime: '5 min read',
    content: '' // This will be ignored since MDX file exists
  },
  'kenya-day-two': {
    slug: 'kenya-day-two',
    title: 'Hackathon Day Two: Tuesday, June 3rd',
    date: 'Tue, 03 June',
    imageSrc: '/Blog/day2-tracer-working.webp',
    description: 'Kenya Day Two: Tracer runs natively on Mac ARM, the blog goes live, and we\'re learning why having the right foundation matters.',
    author: 'Team Tracer',
    tag: 'Backend',
    readTime: '8 min read',
    content: ``
  },
  'kenya-day-three': {
    slug: 'kenya-day-three',
    title: 'Hackathon Day Three: Wednesday, June 4th',
    date: 'Wed, 04 June',
    imageSrc: '/Blog/day3-tracer-rooftop.webp',
    description: 'Kenya Day Three: A well-earned break, a tour through Nairobi\'s rich history, and rooftop views before diving back into build mode.',
    author: 'Team Tracer',
    tag: 'Culture',
    readTime: '5 min read',
    content: ``
  },
  'kenya-day-four': {
    slug: 'kenya-day-four',
    title: 'Hackathon Day Four: Thursday, June 5th',
    date: 'Thu, 05 June',
    imageSrc: '/Blog/Thurs-superconductor.webp',
    description: 'Notes from the fourth day of our Kenya hackathon.',
    author: 'Team Tracer',
    tag: 'Testing',
    readTime: '7 min read',
    content: ``
  },
  'kenya-day-five': {
    slug: 'kenya-day-five',
    title: 'Hackathon Day Five: Thursday, June 5th',
    date: 'Fri, 06 June',
    imageSrc: '/Blog/Fri-wheel.webp',
    description: 'Notes from the fifth day of our Kenya hackathon.',
    author: 'Team Tracer',
    tag: 'DevOps',
    readTime: '9 min read',
    content: ``
  }
};

// Helper function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

// Helper function to get a blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

// Helper function to add a new blog post
export function addBlogPost(post: BlogPost): void {
  blogPosts[post.slug] = post;
}
