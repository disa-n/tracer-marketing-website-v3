# JSON-LD Schema Implementation Guide

## Overview

This guide explains the JSON-LD schema implementation for the Tracer blog/resources section. The implementation includes two main schema types:

1. **Blog Schema** - For the main resources page (`/resources`)
2. **BlogPosting Schema** - For individual blog posts (`/resources/[slug]`)

## Implementation Details

### Files Modified

- `src/lib/blog-registry.ts` - Added schema generation functions and TypeScript interfaces
- `src/app/resources/page.tsx` - Added Blog schema to main resources page
- `src/app/resources/[slug]/page.tsx` - Added BlogPosting schema to individual posts
- `src/app/blog/[slug]/page.tsx` - Added BlogPosting schema to blog route (legacy)

### Schema Types

#### Blog Schema (Main Resources Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Tracer Resources",
  "url": "https://tracer.cloud/resources",
  "description": "Insights, updates, and technical articles on HPC observability and scientific computing.",
  "publisher": {
    "@type": "Organization",
    "name": "Tracer",
    "url": "https://tracer.cloud"
  },
  "inLanguage": "en-US"
}
```

#### BlogPosting Schema (Individual Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "description": "Post description",
  "image": "https://tracer.cloud/Blog/image.webp",
  "author": {
    "@type": "Organization",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tracer",
    "url": "https://tracer.cloud",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tracer.cloud/logo.png"
    }
  },
  "datePublished": "2024-01-01T00:00:00.000Z",
  "dateModified": "2024-01-01T00:00:00.000Z",
  "url": "https://tracer.cloud/resources/post-slug",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://tracer.cloud/resources/post-slug"
  },
  "articleSection": "Technology",
  "keywords": "tag, HPC, observability, scientific computing, performance monitoring"
}
```

## Testing the Implementation

### 1. Visual Testing in Browser

**Main Resources Page:**
- Visit: `http://localhost:3003/resources`
- View page source (Ctrl+U / Cmd+U)
- Search for `application/ld+json` to see the Blog schema

**Individual Blog Posts:**
- Visit any blog post: `http://localhost:3003/resources/test-post-1`
- View page source
- Search for `application/ld+json` to see the BlogPosting schema

### 2. Schema Validation Tools

**Google's Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter your blog post URL
3. Check for schema validation results

**Schema.org Validator:**
1. Go to: https://validator.schema.org/
2. Paste the JSON-LD code or enter URL
3. Validate against schema.org standards

### 3. Browser Developer Tools

1. Open Developer Tools (F12)
2. Go to Console tab
3. Run this JavaScript to extract JSON-LD:
```javascript
// Extract all JSON-LD scripts
const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
jsonLdScripts.forEach((script, index) => {
  console.log(`Schema ${index + 1}:`, JSON.parse(script.textContent));
});
```

## Configuration

### Environment Variables

The schema generation uses a flexible base URL system:

- **Production**: Uses `https://tracer.cloud`
- **Development**: Uses `NEXT_PUBLIC_BASE_URL` if set, otherwise defaults to `http://localhost:3000`

To set a custom development URL:
```bash
# In .env.local
NEXT_PUBLIC_BASE_URL=http://localhost:3003
```

### Customizing Schema Data

The schema generation functions are in `src/lib/blog-registry.ts`:

- `generateBlogSchema()` - Customize main blog page schema
- `generateBlogPostSchema(post)` - Customize individual post schema

## SEO Benefits

This implementation provides:

1. **Rich Snippets** - Enhanced search result appearance
2. **Article Cards** - Better social media sharing
3. **Search Engine Understanding** - Improved content categorization
4. **Knowledge Graph** - Potential inclusion in Google's knowledge panels

## Troubleshooting

### Common Issues

1. **Schema not appearing**: Check browser developer tools for JavaScript errors
2. **Invalid dates**: Ensure blog post dates are in a parseable format
3. **Missing images**: Verify ogImage paths are correct and accessible
4. **Validation errors**: Use schema.org validator to identify issues

### Debug Commands

```bash
# Check for TypeScript errors
pnpm build

# Run development server
pnpm dev

# Check specific blog post data
# (Add this to a test file if needed)
import { getBlogPost } from '@/lib/blog-registry';
const post = await getBlogPost('test-post-1');
console.log(post);
```

## Future Enhancements

Potential improvements:

1. **dateModified tracking** - Track actual modification dates
2. **Author schema** - Expand author information with Person schema
3. **Article series** - Link related blog posts
4. **Reading time calculation** - Auto-calculate reading time
5. **Category taxonomy** - More detailed article categorization

## Support

For questions or issues with the JSON-LD implementation:
1. Check this guide first
2. Validate schemas using online tools
3. Test in multiple browsers
4. Check browser console for errors
