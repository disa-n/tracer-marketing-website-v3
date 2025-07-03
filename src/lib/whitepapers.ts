/**
 * Whitepaper Data Management
 * 
 * Centralized data structure and management for whitepapers
 */

export interface Whitepaper {
  slug: string;
  title: string;
  summary: string;
  description: string;
  fileName: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author?: string;
  coverImage?: string;
  tags: string[];
  featured?: boolean;
}

// Whitepaper database - add new whitepapers here
export const whitepapers: Whitepaper[] = [
  {
    slug: 'cloud-costs',
    title: 'Optimizing Cloud Costs in HPC Environments',
    summary: 'A comprehensive guide to reducing cloud infrastructure costs while maintaining high-performance computing capabilities.',
    description: 'This whitepaper explores proven strategies for optimizing cloud costs in high-performance computing environments. Learn how to implement cost-effective resource allocation, leverage spot instances, and optimize workload scheduling to reduce your cloud spend by up to 40% without compromising performance.',
    fileName: 'cloud-costs-optimization.pdf',
    category: 'Cost Optimization',
    publishedDate: '2024-01-15',
    readTime: '12 min read',
    author: 'Tracer Research Team',
    coverImage: '/images/whitepapers/cloud-costs-cover.jpg',
    tags: ['Cloud Computing', 'Cost Optimization', 'HPC', 'AWS', 'Azure'],
    featured: true
  },
  {
    slug: 'hpc-observability',
    title: 'The Complete Guide to HPC Observability',
    summary: 'Master the art of monitoring and observing high-performance computing workloads for optimal performance.',
    description: 'Discover how to implement comprehensive observability in your HPC environment. This guide covers monitoring strategies, performance metrics, alerting systems, and troubleshooting techniques that help you maintain peak performance and quickly identify bottlenecks in complex computational workflows.',
    fileName: 'hpc-observability-guide.pdf',
    category: 'Observability',
    publishedDate: '2024-02-01',
    readTime: '15 min read',
    author: 'Tracer Engineering Team',
    coverImage: '/images/whitepapers/hpc-observability-cover.jpg',
    tags: ['HPC', 'Monitoring', 'Observability', 'Performance', 'DevOps'],
    featured: true
  },
  {
    slug: 'bioinformatics-performance',
    title: 'Accelerating Bioinformatics Pipelines',
    summary: 'Optimize computational biology workflows for faster research outcomes and reduced time-to-insight.',
    description: 'Learn how to accelerate bioinformatics pipelines through advanced optimization techniques. This whitepaper covers pipeline parallelization, resource optimization, data management strategies, and performance tuning specifically designed for genomics, proteomics, and other computational biology workloads.',
    fileName: 'bioinformatics-performance.pdf',
    category: 'Bioinformatics',
    publishedDate: '2024-02-15',
    readTime: '18 min read',
    author: 'Tracer Life Sciences Team',
    coverImage: '/images/whitepapers/bioinformatics-cover.jpg',
    tags: ['Bioinformatics', 'Genomics', 'Pipeline Optimization', 'Performance'],
    featured: false
  },
  {
    slug: 'container-orchestration',
    title: 'Container Orchestration for Scientific Computing',
    summary: 'Implement scalable container orchestration strategies for scientific and research workloads.',
    description: 'Explore best practices for deploying and managing containerized scientific applications at scale. This guide covers Kubernetes optimization for HPC workloads, container security, resource management, and workflow orchestration patterns that ensure reliable and efficient scientific computing.',
    fileName: 'container-orchestration-scientific.pdf',
    category: 'DevOps',
    publishedDate: '2024-03-01',
    readTime: '14 min read',
    author: 'Tracer Platform Team',
    coverImage: '/images/whitepapers/container-orchestration-cover.jpg',
    tags: ['Containers', 'Kubernetes', 'Scientific Computing', 'DevOps'],
    featured: false
  }
];

// Utility functions
export function getWhitepaperBySlug(slug: string): Whitepaper | undefined {
  return whitepapers.find(wp => wp.slug === slug);
}

export function getFeaturedWhitepapers(): Whitepaper[] {
  return whitepapers.filter(wp => wp.featured);
}

export function getWhitepapersByCategory(category: string): Whitepaper[] {
  return whitepapers.filter(wp => wp.category === category);
}

export function getAllCategories(): string[] {
  const categories = whitepapers.map(wp => wp.category);
  return [...new Set(categories)];
}

export function getWhitepapersByTag(tag: string): Whitepaper[] {
  return whitepapers.filter(wp => wp.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = whitepapers.flatMap(wp => wp.tags);
  return [...new Set(tags)];
}

// SEO and metadata helpers
export function generateWhitepaperMetadata(whitepaper: Whitepaper) {
  return {
    title: `${whitepaper.title} | Tracer Whitepapers`,
    description: whitepaper.summary,
    keywords: whitepaper.tags.join(', '),
    openGraph: {
      title: whitepaper.title,
      description: whitepaper.summary,
      type: 'article',
      publishedTime: whitepaper.publishedDate,
      authors: whitepaper.author ? [whitepaper.author] : undefined,
      tags: whitepaper.tags,
      images: whitepaper.coverImage ? [
        {
          url: whitepaper.coverImage,
          width: 1200,
          height: 630,
          alt: whitepaper.title
        }
      ] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: whitepaper.title,
      description: whitepaper.summary,
      images: whitepaper.coverImage ? [whitepaper.coverImage] : undefined
    }
  };
}
