import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // ✅ Add image domains config here
  images: {
    domains: ['tracer.bio', 'tracer.cloud', 'placehold.co'],
  },
}

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react"
  }
})

export default withMDX(nextConfig)