const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  // Your existing Next.js config
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});