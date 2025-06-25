import { getAllBlogPosts } from '@/lib/blog-registry';

// Static URLs with their priorities and change frequencies
const staticUrls = [
  {
    url: 'https://www.tracer.cloud/',
    priority: 1.0,
    changefreq: 'daily',
  },
  {
    url: 'https://www.tracer.cloud/technology',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: 'https://www.tracer.cloud/why-monitoring',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: 'https://www.tracer.cloud/product',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: 'https://www.tracer.cloud/about',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: 'https://www.tracer.cloud/resources',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    url: 'https://www.tracer.cloud/demo',
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    url: 'https://www.tracer.cloud/terms-and-conditions',
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    url: 'https://www.tracer.cloud/privacy-policy',
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    url: 'https://www.tracer.cloud/cookies-policy',
    priority: 0.5,
    changefreq: 'yearly',
  },
];

// Tool URLs
const toolUrls = [
  {
    url: 'https://www.tracer.cloud/tools/reverse-complement',
    priority: 0.6,
    changefreq: 'yearly',
  },
];

function formatDate(dateString: string): string {
  try {
    // Handle various date formats that might be in the blog posts
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If the date is invalid, return current date
      return new Date().toISOString().split('T')[0] || new Date().toISOString();
    }
    return date.toISOString().split('T')[0] || new Date().toISOString();
  } catch {
    // Fallback to current date if parsing fails
    return new Date().toISOString().split('T')[0] || new Date().toISOString();
  }
}

function generateSitemapXml(urls: Array<{
  url: string;
  priority: number;
  changefreq: string;
  lastmod?: string;
}>): string {
  const urlEntries = urls.map(({ url, priority, changefreq, lastmod }) => {
    const lastmodEntry = lastmod ? `    <lastmod>${lastmod}</lastmod>` : '';
    return `  <url>
    <loc>${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>${lastmodEntry ? '\n' + lastmodEntry : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export async function GET() {
  try {
    // Get all published blog posts
    const blogPosts = await getAllBlogPosts();

    // Create dynamic URLs for blog posts, whitepapers, and tools under /resources
    const dynamicUrls = blogPosts
      .filter(post => post.published !== false) // Only include published posts
      .map(post => ({
        url: `https://www.tracer.cloud/resources/${post.slug}`,
        priority: 0.6,
        changefreq: 'weekly',
        lastmod: formatDate(post.date),
      }));

    // Combine all URLs
    const allUrls = [
      ...staticUrls,
      ...toolUrls,
      ...dynamicUrls,
    ];

    // Generate the sitemap XML
    const sitemapXml = generateSitemapXml(allUrls);

    // Return the sitemap with proper headers
    return new Response(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch {
    // Error generating sitemap - use fallback

    // Return a basic sitemap with just static URLs if there's an error
    const fallbackSitemap = generateSitemapXml(staticUrls);

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300', // Shorter cache for error case
      },
    });
  }
}
