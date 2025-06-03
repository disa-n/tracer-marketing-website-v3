# Blog Management Guide

## How to Add New Blog Posts

### Method 1: Using MDX files (Recommended)

MDX allows you to write blog posts in Markdown with React components and use templates for consistent design.

1. **Create a new MDX file** in `src/components/content/blog/your-post-slug.mdx`

2. **Add frontmatter and metadata**:

```mdx
---
title: 'Your Blog Post Title'
date: 'Mon, 15 June'
description: 'A brief description of your blog post.'
author: 'Your Name'
tag: 'Category'
readTime: '5 min read'
ogImage: '/Blog/your-image.webp'
template: 'default'
---

export const metadata = {
  title: 'Your Blog Post Title',
  date: 'Mon, 15 June',
  description: 'A brief description of your blog post.',
  author: 'Your Name',
  tag: 'Category',
  readTime: '5 min read',
  ogImage: '/Blog/your-image.webp',
  template: 'default'
};

# Your Blog Post Title

Your content goes here in Markdown format.

## Section Title

You can use all Markdown features:

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

You can also include React components:

<div style={{ background: '#f5f5f5', padding: '20px' }}>
  Custom JSX content!
</div>

```javascript
// Code blocks work too
console.log('Hello, world!');
```
```

3. **Add your image** to the `public/Blog/` directory

4. **Add the slug to generateStaticParams** in `src/app/blog/[slug]/page.tsx`:

```typescript
const mdxParams = [
  // ... existing slugs
  { slug: 'your-post-slug' },
];
```

### Method 2: Using the centralized data file (Legacy)

For simple HTML-based posts, you can still use `src/data/blogPosts.ts`, but MDX is recommended for new posts.

## How to Change Blog Post Template Design

### Option 1: Use Built-in Templates

**For MDX posts**: Specify the template in your MDX file's metadata:

```mdx
export const metadata = {
  // ... other metadata
  template: 'minimal' // Choose your template here
};
```

**For static posts**: Change the template in `src/app/blog/[slug]/static-content.tsx`:

```typescript
return <BlogPostTemplate post={post} template="minimal" />;
```

Available templates:
- `"default"` - Current design with hero image, metadata, and content
- `"minimal"` - Clean, typography-focused design
- `"magazine"` - Two-column layout with sidebar metadata
- `"technical"` - Monospace fonts, code-friendly design

### Option 2: Customize Existing Templates

Edit the templates in `src/components/blog/BlogPostTemplate.tsx`:

1. **Find the template you want to modify** (e.g., `if (template === 'default')`)
2. **Update the JSX and Tailwind classes** to match your desired design
3. **Save the file** - changes will apply to all blog posts using that template

### Option 3: Create a New Template

1. **Add a new template option** to the `BlogPostTemplate` component:

```typescript
// Add to the template type
template?: 'default' | 'minimal' | 'magazine' | 'technical' | 'your-new-template';

// Add the new template logic
if (template === 'your-new-template') {
  return (
    <div className="your-custom-classes">
      {/* Your custom design */}
    </div>
  );
}
```

2. **Use your new template**:

```typescript
return <BlogPostTemplate post={post} template="your-new-template" />;
```

## Styling Guidelines

### Colors
- Background: `#FCFCFC`
- Text: `#202020`
- Secondary text: `#888888`
- Accent: `#E8E8E8`

### Fonts
- Headings: `font-britti-sans`
- Body text: Default or `font-britti-sans`
- Technical/Code: `font-chakra-petch` or `font-mono`

### Common Classes
- Container: `max-w-4xl mx-auto px-4 py-12`
- Hero image: `w-full h-[400px] relative mb-8 rounded-lg overflow-hidden`
- Meta text: `text-[#888888] text-sm font-chakra-petch uppercase tracking-wider`
- Content: `prose prose-lg max-w-none`

## File Structure

```
src/
├── data/
│   └── blogPosts.ts              # Centralized blog data
├── app/blog/
│   ├── [slug]/
│   │   ├── page.tsx              # Dynamic route handler
│   │   └── static-content.tsx    # Blog post renderer
│   └── page.tsx                  # Blog listing page
├── components/blog/
│   ├── BlogPostTemplate.tsx      # Template system
│   ├── BlogCard.tsx              # Blog preview cards
│   └── Kenya/
│       └── KenyaGrid.tsx         # Kenya page grid
└── public/Blog/                  # Blog images
```

## Tips

1. **Image optimization**: Use WebP format for better performance
2. **SEO**: Fill in all metadata fields (title, description, author, etc.)
3. **Responsive design**: All templates are mobile-responsive
4. **Content formatting**: Use semantic HTML in the content field
5. **Testing**: Test your blog posts on localhost before deploying

## Troubleshooting

- **Blog post not showing**: Check that the slug matches exactly
- **Image not loading**: Verify the image path in `public/Blog/`
- **Styling issues**: Check Tailwind classes and template structure
- **TypeScript errors**: Ensure all required fields are provided in the blog post object
