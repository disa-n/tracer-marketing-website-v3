export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Explicitly allow AI/GEO crawlers
User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: bingbot
Allow: /

# Sitemap
Sitemap: https://www.tracer.cloud/sitemap.xml

# Disallow admin and internal paths
Disallow: /admin/
Disallow: /coming-soon
Disallow: /test-*
Disallow: /legacyhome
Disallow: /platform
Disallow: /blog
Disallow: /llms.txt
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}

