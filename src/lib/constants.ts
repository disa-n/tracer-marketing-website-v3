// Design System Constants
export const COLORS = {
  background: {
    white: '#FCFCFC',
    dark: '#202020',
    gray: '#F8F8F8',
  },
  text: {
    primary: '#202020',
    secondary: '#666666',
    accent: '#FB82E9',
  },
  border: {
    light: '#E8E8E8',
    gray: '#D8D8D8',
  }
} as const;

export const FONTS = {
  primary: 'Britti Sans',
  secondary: 'Chakra Petch',
} as const;

export const BREAKPOINTS = {
  xs: '320px',   // XS mobile
  sm: '481px',   // S mobile  
  md: '601px',   // S tablets
  lg: '769px',   // L tablets
  xl: '1025px',  // S desktops
  '2xl': '1281px', // L desktops
  '3xl': '1441px', // XL desktops
} as const;

export const CONTAINER_SIZES = {
  full: 'w-full',
  container: 'lg:max-w-[1400px] mx-auto',
  narrow: 'max-w-4xl mx-auto',
} as const;

export const SPACING = {
  section: {
    none: '',
    small: 'pt-8 pb-8',
    medium: 'pt-16 pb-16', 
    large: 'pt-24 pb-24',
  },
  padding: {
    responsive: 'px-4 md:px-8 lg:px-12',
    mobile: 'px-4',
    tablet: 'px-8',
    desktop: 'px-12',
  }
} as const;

// Content Constants
export const TOOLS = [
  {
    href: '/tools/reverse-complement',
    title: 'Reverse Complement Generator',
    description: 'Paste a sequence and get its reverse, complement, or both.',
    imageSrc: '/images/blog/posts/T-DNA-Pink.webp',
    imageAlt: 'DNA asset preview',
    category: 'Tool',
  },
  // Add more tools here as they're created
] as const;

export const BLOG_CONFIG = {
  allowedSlugs: ['kenya-day-one', 'kenya-day-two', 'kenya-day-three', 'kenya-day-four'] as string[],
  allowedBiweeklySlugs: ['biweekly-roundup-1'] as string[],
  allowedArticleSlugs: ['cloud-cost-monitoring'] as string[],
  kenyaHackathonPost: {
    slug: 'kenya-hackathon',
    metadata: {
      title: 'Kenya Hackathon 2025',
      date: '02 Jun 2025',
      description: "We flew to Kenya for a week-long hackathon to accelerate Tracer's growth. The goal? Drive verified user activations through a Reddit launch. From back-end tooling to interface polish, we're all-in - coding, designing, and shipping, with a 'swing for the fences' mindset.",
      tag: 'SERIES',
      ogImage: '/images/blog/series/kenya-hackathon/kenya.webp',
      author: 'Team Tracer',
    },
  },
  biweeklyRoundupsPost: {
    slug: 'biweekly-roundups',
    metadata: {
      title: 'Bi-weekly Roundups',
      date: '19 Jun 2025',
      description: "Stay up to date with Tracer's latest company and product updates through our bi-weekly roundups. Get insights into our product evolution, company milestones, and behind-the-scenes updates from the team.",
      tag: 'SERIES',
      ogImage: '/images/blog/posts/T-Asset-Organic_Shape.png',
      author: 'Team Tracer',
    },
  },
} as const;
