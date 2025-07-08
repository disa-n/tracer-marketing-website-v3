# Blog Content Management System

## 📖 **Overview**

The Tracer marketing website uses a sophisticated MDX-based blog system that combines the simplicity of Markdown with the power of React components. The system features dual routing (/blog and /resources), centralized content management, and flexible display options with series organization and filtering capabilities.

## 🏗️ **System Architecture**

```
src/
├── components/content/blog/          # MDX blog post files
│   ├── introducing-tracer-pt-1.mdx
│   ├── kenya-day-one.mdx
│   ├── biweekly-roundup-1.mdx
│   ├── cloud-cost-monitoring.mdx
│   └── ...
├── lib/
│   ├── blog-registry.ts              # Central blog post registry & metadata
│   ├── constants.ts                  # Blog configuration & filtering rules
│   └── supabaseClient.ts             # Email signup integration
├── app/
│   ├── blog/                         # Traditional blog interface
│   │   ├── BlogPageClient.tsx        # Blog listing page
│   │   └── [slug]/                   # Individual blog posts (/blog/*)
│   │       ├── page.tsx
│   │       ├── mdx-content.tsx
│   │       └── static-content.tsx
│   └── resources/                    # Resources interface (primary)
│       ├── page.tsx                  # Main resources page
│       ├── BlogPageClient.tsx        # Resources listing with tools/whitepapers
│       └── [slug]/                   # Individual posts (/resources/*)
│           ├── page.tsx
│           ├── mdx-content.tsx
│           └── static-content.tsx
├── components/resources/
│   ├── BlogPostTemplate.tsx         # Blog post layout templates
│   ├── BlogGrid.tsx                 # Blog post grid display
│   ├── BlogCard.tsx                 # Individual blog post cards
│   ├── BlogHero.tsx                 # Blog page hero with email signup
│   ├── FilterBar.tsx                # Content filtering interface
│   └── [Series]/                    # Series-specific components
│       ├── KenyaGrid.tsx            # Kenya hackathon series
│       └── BiweeklyGrid.tsx         # Bi-weekly roundups series
├── hooks/
│   └── useBlogPosts.ts              # Client-side blog data fetching
└── components/mdx/
    └── MdxProvider.tsx              # MDX component provider
```

## 🔄 **Dual Routing System**

The blog system supports two URL patterns that render the same content:

1. **Resources Route (Primary)**: `/resources/[slug]` - Integrated with tools, whitepapers, and other resources
2. **Blog Route (Legacy)**: `/blog/[slug]` - Traditional blog-focused interface

Both routes use identical MDX files and rendering logic, but with different listing page layouts and navigation contexts.

## � **Content Organization & Filtering**

The system organizes content into several categories:

### **Content Types**
- **Series**: Multi-part content collections (Kenya Hackathon, Bi-weekly Roundups)
- **Recent Posts**: Individual blog posts and articles
- **Articles**: Technical deep-dives and tutorials
- **Tools**: Interactive tools and utilities (displayed alongside blog content)

### **Filtering Configuration**
Content visibility is controlled through `src/lib/constants.ts` in the `BLOG_CONFIG` object:

```typescript
export const BLOG_CONFIG = {
  allowedSlugs: ['kenya-day-one', 'kenya-day-two', 'kenya-day-three', 'kenya-day-four'],
  allowedBiweeklySlugs: ['biweekly-roundup-1'],
  allowedArticleSlugs: ['cloud-cost-monitoring'],
  // Series metadata for special collections
  kenyaHackathonPost: { /* series metadata */ },
  biweeklyRoundupsPost: { /* series metadata */ }
};
```

## �🚀 **Adding New Blog Posts**

### **Step 1: Create the MDX File**

Create a new `.mdx` file in `src/components/content/blog/` with the following structure:

```mdx
export const metadata = {
  title: 'Your Blog Post Title',
  date: 'January 15, 2024',
  description: 'A compelling description of your blog post that will appear in previews and SEO.',
  author: 'Team Tracer',
  tag: 'article', // Options: 'article', 'product', 'development', 'blog', 'general'
  readTime: '5 min read',
  ogImage: '/images/blog/posts/your-image.webp', // Optional: social media image
  template: 'default', // Options: 'default', 'minimal', 'magazine', 'technical'
  published: true // Set to false to hide from public listings
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

### **Step 3: Configure Visibility (Required)**

Add your post to the appropriate category in `src/lib/constants.ts`:

```typescript
export const BLOG_CONFIG = {
  // For regular articles
  allowedArticleSlugs: ['cloud-cost-monitoring', 'your-new-post-slug'],

  // For series posts (Kenya hackathon)
  allowedSlugs: ['kenya-day-one', 'your-kenya-post'],

  // For bi-weekly roundups
  allowedBiweeklySlugs: ['biweekly-roundup-1', 'your-roundup-post'],
  // ...
};
```

### **Step 4: Add Static Metadata (Optional)**

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
    tag: 'article',
    readTime: '5 min read',
    template: 'default'
  },
};
```

## 📝 **Content Guidelines**

### **Metadata Fields**

- **title**: The main title of your blog post
- **date**: Publication date (format: "Month DD, YYYY" or "DD Month YYYY")
- **description**: SEO-friendly description (150-160 characters recommended)
- **author**: Author name (default: "Team Tracer")
- **tag**: Category for filtering and organization
  - `article`: Technical articles and tutorials
  - `product`: Product announcements and features
  - `development`: Development updates and technical content
  - `blog`: General blog content
  - `general`: Miscellaneous content
  - `SERIES`: Special designation for series collections
- **readTime**: Estimated reading time (e.g., "5 min read")
- **ogImage**: Path to social media preview image (optional)
- **template**: Layout template to use
- **published**: Set to `false` to hide from public listings (optional)

### **Template Options**

1. **default**: Standard blog layout with full features - best for most content
2. **minimal**: Clean, typography-focused design - ideal for text-heavy editorial content
3. **magazine**: Two-column layout for longer content with multiple sections
4. **technical**: Code-friendly design with enhanced syntax highlighting and monospace fonts

### **Image Guidelines**

- Store images in `public/images/blog/posts/` for individual posts
- Store series images in `public/images/blog/series/[series-name]/`
- Use WebP format for better performance
- Recommended OG image size: 1200x630px
- Use descriptive, SEO-friendly filenames

### **Content Visibility Rules**

Posts must be added to the appropriate `BLOG_CONFIG` array to appear on the website:
- **Articles**: Add to `allowedArticleSlugs` for technical content
- **Kenya Series**: Add to `allowedSlugs` for hackathon-related posts
- **Bi-weekly Roundups**: Add to `allowedBiweeklySlugs` for company updates

## 🔧 **Advanced Features**

### **Series Management**

The system supports special series collections like "Kenya Hackathon" and "Bi-weekly Roundups":

1. **Series are defined** in `BLOG_CONFIG` with special metadata
2. **Individual posts** are added to series-specific arrays (`allowedSlugs`, `allowedBiweeklySlugs`)
3. **Series cards** appear in a dedicated "SERIES" section on the resources page
4. **Series have custom overview pages** with specialized grids and navigation

### **Draft Posts**

To create draft posts that don't appear in public listings:

```mdx
export const metadata = {
  title: 'Draft Post',
  // ... other metadata
  published: false // This hides the post from public view
};
```

**Note**: Draft posts also need to be excluded from the `BLOG_CONFIG` arrays to be completely hidden.

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

### **Email Integration**

The blog system includes Supabase integration for email signups:
- **Hero sections** include email capture forms
- **Dual Supabase setup**: Separate clients for emails and articles
- **Automatic signup handling** with error management

## 🌐 **URL Structure & Routing**

### **Dual Route System**
1. **Resources route (Primary)**: `/resources/[slug]` - Integrated with tools, whitepapers, and other resources
2. **Blog route (Legacy)**: `/blog/[slug]` - Traditional blog-focused interface

### **Special Routes**
- `/resources/kenyahackathonoverview` - Kenya hackathon series overview
- `/resources/biweeklyroundupsoverview` - Bi-weekly roundups series overview
- `/coming-soon` - Placeholder for posts without content yet

### **Smart Routing Logic**
The `BlogCard` component includes intelligent routing that:
- Directs series cards to overview pages
- Routes individual posts to their content pages
- Redirects incomplete posts to coming-soon pages

## 🔍 **SEO and Metadata**

The system automatically generates:

- **Meta tags** from post metadata for each route
- **JSON-LD structured data** for search engines (BlogPosting schema)
- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter previews
- **Canonical URLs** to prevent duplicate content issues

## 🚦 **Publishing Workflow**

1. **Create** your MDX file with proper metadata in `src/components/content/blog/`
2. **Register** the slug in the `MDX_BLOG_POSTS` array in `blog-registry.ts`
3. **Configure visibility** by adding to appropriate `BLOG_CONFIG` arrays in `constants.ts`
4. **Test locally** by visiting `/resources/your-slug` or `/blog/your-slug`
5. **Deploy** - the post will automatically appear in the appropriate sections

## 🛠️ **Troubleshooting**

### **Post Not Appearing on Website**

1. **Check MDX registration**: Verify the slug is added to `MDX_BLOG_POSTS` array in `blog-registry.ts`
2. **Check visibility configuration**: Ensure the slug is added to the appropriate array in `BLOG_CONFIG` (`allowedArticleSlugs`, `allowedSlugs`, or `allowedBiweeklySlugs`)
3. **Verify file location**: Confirm the MDX file is in `src/components/content/blog/`
4. **Check published status**: Ensure `published` is not set to `false` in metadata

### **Metadata Not Loading**

- Verify the `metadata` export is properly formatted as a JavaScript object
- Check for syntax errors in the MDX file (missing commas, quotes, etc.)
- Ensure all required fields are present (`title`, `date`, `description`)
- Validate date format matches expected patterns

### **Images Not Loading**

- Verify image paths start with `/` for public directory access
- Check that images exist in the specified location
- Use WebP format for better performance
- Ensure proper file permissions and naming conventions

### **Routing Issues**

- **404 errors**: Check that both MDX file exists and slug is registered
- **Wrong template**: Verify the `template` field in metadata matches available options
- **Series routing**: Ensure series posts are properly configured in `BLOG_CONFIG`

## 📊 **System Features & Performance**

### **Built-in Capabilities**
- **Automatic SEO optimization** with meta tags and JSON-LD structured data
- **Performance optimized** with Next.js Image component and static generation
- **Mobile responsive** design with Tailwind CSS
- **Fast loading** with MDX compilation and caching
- **Email integration** with Supabase for newsletter signups
- **Smart routing** with dual URL patterns and fallback handling

### **Content Management Features**
- **Series organization** for multi-part content
- **Flexible filtering** by content type and category
- **Draft post support** with visibility controls
- **Template system** for different content layouts
- **Automatic date formatting** and sorting

## 🔄 **Maintenance & Updates**

### **Regular Tasks**

1. **Update blog registry** when adding new posts to `MDX_BLOG_POSTS`
2. **Configure visibility** by updating `BLOG_CONFIG` arrays
3. **Optimize images** before uploading (WebP format, proper sizing)
4. **Review metadata** for SEO compliance and consistency
5. **Test posts** on multiple devices and both route patterns

### **Content Updates**

To update existing posts:
1. **Edit the MDX file directly** - changes are reflected on next deployment
2. **Update metadata** if needed (title, description, tags)
3. **No registry updates needed** for content-only changes
4. **Visibility changes** require updating `BLOG_CONFIG` arrays

### **Adding New Series**

1. **Define series metadata** in `BLOG_CONFIG`
2. **Create series-specific arrays** for post slugs
3. **Build overview pages** if needed (like Kenya/Biweekly examples)
4. **Update routing logic** in `BlogCard` component if custom routing needed

---

## 📚 **Quick Reference**

### **File Naming Convention**
- Use kebab-case: `my-blog-post.mdx`
- Keep names descriptive but concise
- Avoid special characters and spaces
- Match the slug used in registration

### **Content Categories & Tags**
- `article` - Technical articles and tutorials (goes to allowedArticleSlugs)
- `product` - Product announcements and features
- `development` - Technical development content
- `blog` - General blog content
- `general` - Miscellaneous content
- `SERIES` - Special designation for series collections

### **Template Selection Guide**
- **default**: Most blog posts and articles
- **minimal**: Text-heavy, editorial content with clean typography
- **magazine**: Long-form articles with multiple sections and two-column layout
- **technical**: Code tutorials and technical guides with monospace fonts

### **Essential Files to Know**
- `src/lib/blog-registry.ts` - Central post registration and metadata
- `src/lib/constants.ts` - Content filtering and series configuration
- `src/components/content/blog/` - All MDX blog post files
- `src/app/resources/` - Primary blog interface and routing
- `src/app/blog/` - Legacy blog interface

This system provides a powerful, flexible foundation for managing blog content while maintaining excellent performance, SEO capabilities, and content organization features.
