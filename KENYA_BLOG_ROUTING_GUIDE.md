# Kenya Hackathon Blog Routing Guide

This guide explains how to set up routing for Kenya hackathon blog posts, including how to add new posts and manage the clickable cards in the Kenya grid.

## Overview

The Kenya hackathon page displays a grid of daily entries. Each card is fully clickable and routes users to either:
- **Blog post** - if the MDX content exists
- **Coming soon page** - if the content hasn't been created yet

## File Structure

```
src/
├── components/blog/Kenya/
│   ├── KenyaGrid.tsx              # Main grid component with clickable cards
│   └── KenyaHero.tsx              # Hero section
├── components/content/blog/
│   ├── kenya-day-one.mdx          # Day 1 blog post
│   ├── kenya-day-two.mdx          # Day 2 blog post
│   ├── kenya-day-three.mdx        # Day 3 blog post (create when ready)
│   └── ...                       # Additional days
├── app/blog/[slug]/
│   ├── page.tsx                   # Dynamic route handler
│   ├── mdx-content.tsx            # MDX renderer
│   └── static-content.tsx         # Static content renderer
├── app/coming-soon/
│   └── page.tsx                   # Coming soon page
└── data/
    └── blogPosts.ts               # Blog post metadata
```

## How to Add a New Kenya Blog Post

### Step 1: Create the MDX File

Create a new file in `src/components/content/blog/` with the naming pattern `kenya-day-{number}.mdx`:

```mdx
export const metadata = {
  title: 'Hackathon Day Three: Wednesday, June 4th',
  date: 'Wed, 4 June',
  description: 'Notes from the third day of our Kenya hackathon.',
  author: 'Team Tracer',
  tag: 'Blog',
  readTime: '6 min read',
  ogImage: '/Blog/Weds-hover.webp',
  template: 'default'
};

# Your blog content goes here

Write your blog post content using Markdown and JSX...
```

### Step 2: Update the Kenya Grid Component

In `src/components/blog/Kenya/KenyaGrid.tsx`, add your new slug to the `mdxSlugs` array:

```typescript
// Check if this post has MDX content (exists)
const mdxSlugs = [
  'kenya-day-one',
  'kenya-day-two',
  'kenya-day-three',    // ← Add your new post here
  // Add more as they're created
];
```

### Step 3: Update the Blog Routing

In `src/app/blog/[slug]/page.tsx`, add your slug to both arrays:

**A. Add to `generateStaticParams` function:**
```typescript
const mdxParams = [
  { slug: 'introducing-tracer-pt-1' },
  { slug: 'introducing-tracer-pt-2' },
  // ... other posts
  { slug: 'kenya-day-one' },
  { slug: 'kenya-day-two' },
  { slug: 'kenya-day-three' },    // ← Add here
];
```

**B. Add to the runtime `mdxSlugs` array:**
```typescript
const mdxSlugs = [
  'introducing-tracer-pt-1',
  'introducing-tracer-pt-2',
  // ... other posts
  'kenya-day-one',
  'kenya-day-two',
  'kenya-day-three',    // ← Add here
];
```

### Step 4: Verify Blog Post Metadata

Ensure your post exists in `src/data/blogPosts.ts`:

```typescript
export const blogPosts: Record<string, BlogPost> = {
  'kenya-day-three': {
    slug: 'kenya-day-three',
    title: 'Hackathon Day Three: Wednesday, June 4th',
    date: 'Wed, 04 June',
    imageSrc: '/Blog/Weds-hover.webp',
    description: 'Notes from the third day of our Kenya hackathon.',
    author: 'Team Tracer',
    tag: 'Frontend',
    readTime: '6 min read',
    content: '' // This will be ignored since MDX file exists
  },
  // ... other posts
};
```

## How the Routing Works

### 1. Card Click Detection
- Each card in `KenyaGrid.tsx` is wrapped in a `Link` component
- The link destination is determined by the `hasContent` variable

### 2. Content Detection Logic
```typescript
const hasContent = mdxSlugs.includes(slug);
const linkHref = hasContent ? `/blog/${slug}` : '/coming-soon';
```

### 3. Dynamic Status Display
- Cards show **"Blog post"** if content exists
- Cards show **"Coming soon"** if content doesn't exist yet

### 4. Route Resolution
- **With content**: `/blog/kenya-day-one` → Renders MDX content
- **Without content**: `/coming-soon` → Shows coming soon page

## Current Status

| Day | Slug | Status | Route |
|-----|------|--------|-------|
| Day 1 | `kenya-day-one` | ✅ Live | `/blog/kenya-day-one` |
| Day 2 | `kenya-day-two` | ✅ Live | `/blog/kenya-day-two` |
| Day 3 | `kenya-day-three` | ⏳ Coming Soon | `/coming-soon` |
| Day 4 | `kenya-day-four` | ⏳ Coming Soon | `/coming-soon` |
| Day 5 | `kenya-day-five` | ⏳ Coming Soon | `/coming-soon` |

## Features

### Clickable Cards
- **Desktop**: Entire card is clickable with hover effects
- **Mobile**: Full card clickability maintained
- **Hover effects**: Subtle background color change (`hover:bg-[#252525]`)

### Smart Routing
- Automatically detects if content exists
- Routes to appropriate destination (blog post vs coming soon)
- No manual URL management needed

### Status Indicators
- Visual feedback shows whether content is available
- Consistent user experience across all cards

## Troubleshooting

### Card Not Clickable
- Check that the slug is added to `mdxSlugs` array in `KenyaGrid.tsx`
- Verify the `Link` component is properly wrapping the card content

### Routes to Coming Soon Instead of Blog Post
- Ensure slug is added to both arrays in `/blog/[slug]/page.tsx`
- Check that the MDX file exists and has the correct filename
- Verify the slug matches exactly (case-sensitive)

### Blog Post Not Found
- Check that metadata exists in `blogPosts.ts`
- Ensure the MDX file exports the metadata object
- Verify the slug consistency across all files

## Best Practices

1. **Consistent Naming**: Use `kenya-day-{number}` pattern for all files
2. **Update All Locations**: Always update both routing arrays when adding posts
3. **Test Locally**: Verify routing works before deploying
4. **Metadata Consistency**: Keep metadata in sync between MDX files and `blogPosts.ts`
5. **Image Assets**: Ensure referenced images exist in `/public/Blog/`

## Quick Checklist for Adding New Posts

- [ ] Create MDX file in `src/components/content/blog/`
- [ ] Add slug to `mdxSlugs` array in `KenyaGrid.tsx`
- [ ] Add slug to `generateStaticParams` in `/blog/[slug]/page.tsx`
- [ ] Add slug to runtime `mdxSlugs` array in `/blog/[slug]/page.tsx`
- [ ] Verify metadata exists in `blogPosts.ts`
- [ ] Test the routing locally
- [ ] Check that images are accessible

Following this guide ensures smooth routing and a consistent user experience for the Kenya hackathon blog posts.
