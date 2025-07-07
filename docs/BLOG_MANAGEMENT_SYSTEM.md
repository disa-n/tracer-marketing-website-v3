# Blog Upload and Management System

## 📖 **Overview**

The Tracer marketing website uses a modern MDX-based blog system that combines the simplicity of Markdown with the power of React components. All blog posts are managed through MDX files with a centralized registry system.

## 🏗️ **System Architecture**

```
src/
├── components/content/blog/          # MDX blog post files
│   ├── sample-mdx-post.mdx
│   ├── introducing-tracer-pt-1.mdx
│   ├── kenya-day-one.mdx
│   └── ...
├── lib/
│   └── blog-registry.ts              # Central blog post registry
├── app/
│   ├── blog/[slug]/                  # Blog post pages (/blog/*)
│   │   ├── page.tsx
│   │   ├── mdx-content.tsx
│   │   └── static-content.tsx
│   └── resources/[slug]/             # Resources pages (/resources/*)
│       ├── page.tsx
│       └── mdx-content.tsx
└── components/
    ├── resources/
    │   ├── BlogPostTemplate.tsx     # Blog post layout templates
    │   ├── BlogGrid.tsx             # Blog post grid display
    │   └── BlogHero.tsx             # Blog page hero section
    └── mdx/
        └── MdxProvider.tsx          # MDX component provider
```

## 🚀 **Adding New Blog Posts**

### **Step 1: Create the MDX File**

Create a new `.mdx` file in `src/components/content/blog/` with the following structure:

```mdx
export const metadata = {
  title: 'Your Blog Post Title',
  date: 'January 15, 2024',
  description: 'A compelling description of your blog post that will appear in previews and SEO.',
  author: 'Team Tracer',
  tag: 'product', // Options: 'product', 'development', 'blog', 'general', 'test'
  readTime: '5 min read',
  ogImage: '/images/blog/posts/your-image.webp', // Optional: social media image
  template: 'default' // Options: 'default', 'minimal', 'magazine', 'technical'
};

# Your Blog Post Title

Your blog post content goes here using standard Markdown syntax.

## Subheading

You can use all standard Markdown features:

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Images

## Interactive Components

Since this is MDX, you can also include React components:

```jsx
<CustomComponent prop="value" />
```

## Code Examples

```javascript
function example() {
  console.log('Hello, world!');
}
```

## Conclusion

Wrap up your post with key takeaways.
```

### **Step 2: Register the Post**

Add your new post slug to the `MDX_BLOG_POSTS` array in `src/lib/blog-registry.ts`:

```typescript
const MDX_BLOG_POSTS = [
  'introducing-tracer-pt-1',
  'introducing-tracer-pt-2',
  // ... existing posts
  'your-new-post-slug', // Add your new post here
] as const;
```

### **Step 3: Add Static Metadata (Optional)**

For better performance, add static metadata to the `MDX_METADATA` object in `src/lib/blog-registry.ts`:

```typescript
const MDX_METADATA: Record<string, BlogPostMetadata> = {
  // ... existing metadata
  'your-new-post-slug': {
    slug: 'your-new-post-slug',
    title: 'Your Blog Post Title',
    date: 'January 15, 2024',
    description: 'Your description...',
    author: 'Team Tracer',
    tag: 'product',
    readTime: '5 min read',
    template: 'default'
  },
};
```

## 📝 **Content Guidelines**

### **Metadata Fields**

- **title**: The main title of your blog post
- **date**: Publication date (format: "Month DD, YYYY")
- **description**: SEO-friendly description (150-160 characters recommended)
- **author**: Author name (default: "Team Tracer")
- **tag**: Category for filtering (`product`, `development`, `blog`, `general`, `test`)
- **readTime**: Estimated reading time (e.g., "5 min read")
- **ogImage**: Path to social media preview image (optional)
- **template**: Layout template to use
- **published**: Set to `false` to hide from public listings (optional)

### **Template Options**

1. **default**: Standard blog layout with full features
2. **minimal**: Clean, typography-focused design
3. **magazine**: Two-column layout for longer content
4. **technical**: Code-friendly design with enhanced syntax highlighting

### **Image Guidelines**

- Store images in `public/images/blog/posts/`
- Use WebP format for better performance
- Recommended OG image size: 1200x630px
- Use descriptive filenames

## 🔧 **Advanced Features**

### **Draft Posts**

To create draft posts that don't appear in public listings:

```mdx
export const metadata = {
  title: 'Draft Post',
  // ... other metadata
  published: false // This hides the post from public view
};
```

### **Custom Components in MDX**

You can use React components directly in your MDX:

```mdx
import { CustomButton } from '@/components/ui/CustomButton';

# My Post

Here's some content with a custom component:

<CustomButton variant="primary">
  Click me!
</CustomButton>
```

### **Code Syntax Highlighting**

The system supports syntax highlighting for multiple languages:

```python
def hello_world():
    print("Hello, world!")
```

```bash
curl -sSL https://setup.tracer.cloud | bash
```

## 🌐 **URL Structure**

Blog posts are accessible via two URL patterns:

1. **Blog route**: `/blog/[slug]` - Traditional blog URLs
2. **Resources route**: `/resources/[slug]` - Integrated with resources section

Both routes render the same content using the same MDX files.

## 🔍 **SEO and Metadata**

The system automatically generates:

- **Meta tags** from post metadata
- **JSON-LD structured data** for search engines
- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter previews

## 🚦 **Publishing Workflow**

1. **Create** your MDX file with proper metadata
2. **Register** the slug in `blog-registry.ts`
3. **Test** locally by visiting `/blog/your-slug` or `/resources/your-slug`
4. **Deploy** - the post will automatically appear in blog listings

## 🛠️ **Troubleshooting**

### **Post Not Appearing**

- Check that the slug is added to `MDX_BLOG_POSTS` array
- Verify the MDX file is in `src/components/content/blog/`
- Ensure `published` is not set to `false`

### **Metadata Not Loading**

- Verify the `metadata` export is properly formatted
- Check for syntax errors in the MDX file
- Ensure all required fields are present

### **Images Not Loading**

- Verify image paths start with `/` for public directory
- Check that images exist in the specified location
- Use WebP format for better performance

## 📊 **Analytics and Performance**

The blog system includes:

- **Automatic SEO optimization** with meta tags and structured data
- **Performance optimized** with Next.js Image component
- **Mobile responsive** design
- **Fast loading** with static generation

## 🔄 **Maintenance**

### **Regular Tasks**

1. **Update blog registry** when adding new posts
2. **Optimize images** before uploading
3. **Review metadata** for SEO compliance
4. **Test posts** on multiple devices

### **Content Updates**

To update existing posts:
1. Edit the MDX file directly
2. Changes will be reflected on next deployment
3. No registry updates needed for content changes

---

## 📚 **Quick Reference**

### **File Naming Convention**
- Use kebab-case: `my-blog-post.mdx`
- Keep names descriptive but concise
- Avoid special characters

### **Common Tags**
- `product` - Product announcements and features
- `development` - Technical development content
- `blog` - General blog content
- `general` - Miscellaneous content

### **Template Selection Guide**
- **default**: Most blog posts
- **minimal**: Text-heavy, editorial content
- **magazine**: Long-form articles with multiple sections
- **technical**: Code tutorials and technical guides

This system provides a powerful, flexible foundation for managing blog content while maintaining excellent performance and SEO capabilities.
