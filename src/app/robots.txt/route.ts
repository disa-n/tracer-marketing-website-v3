export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.tracer.cloud/sitemap.xml

# Disallow admin and internal paths
Disallow: /admin/
Disallow: /_next/
Disallow: /api/
Disallow: /coming-soon
Disallow: /test-*
Disallow: /legacyhome
Disallow: /platform
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
