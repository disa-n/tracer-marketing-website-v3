import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // ✅ Add image remote patterns config here
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'tracer.bio',
      },
      {
        protocol: 'https' as const,
        hostname: 'tracer.cloud',
      },
      {
        protocol: 'https' as const,
        hostname: 'placehold.co',
      },
    ],
  },

  // ✅ Add redirects for SEO consistency
  async redirects() {
    return [
      {
        source: '/resources/:slug',
        destination: '/blog/:slug',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
}

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react"
  }
})

export default withMDX(nextConfig)