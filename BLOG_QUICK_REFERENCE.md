# Blog System Quick Reference

## 🚀 Quick Start: Add a New MDX Blog Post

### 1. Create MDX File
Create `src/components/content/blog/your-slug.mdx`:

```mdx
export const metadata = {
  title: 'Your Post Title',
  date: 'January 21, 2024',
  description: 'SEO description (120-160 chars)',
  author: 'Team Tracer',
  tag: 'product',
  readTime: '5 min read',
  ogImage: '/Blog/your-image.webp',
  template: 'default'
};

# Your Post Title

Your content here...

## Subheading

You can use **markdown** and React components:

<div className="bg-blue-50 p-4 rounded">
  Custom content
</div>

```javascript
// Code blocks with syntax highlighting
function example() {
  console.log('Hello!');
}
```
```

### 2. Add Images
- Place images in `public/Blog/`
- Use WebP format: `your-image.webp`

### 3. Register Post
Add slug to `src/lib/blog-registry.ts`:

```typescript
const MDX_BLOG_POSTS = [
  // ... existing
  'your-slug', // ← Add here
] as const;
```

### 4. Test
Visit: `http://localhost:3000/resources/your-slug`

---

## 📁 File Locations

| Content Type | Location |
|--------------|----------|
| MDX Posts | `src/components/content/blog/[slug].mdx` |
| Images | `public/Blog/` |
| Templates | `src/components/blog/BlogPostTemplate.tsx` |
| Registry | `src/lib/blog-registry.ts` |
| Routing | `src/app/resources/[slug]/page.tsx` |

---

## 🎨 Template Options

| Template | Use Case | Style |
|----------|----------|-------|
| `default` | Standard posts | Dark theme, hero image |
| `minimal` | Text-focused | Clean, light theme |
| `magazine` | Long-form | Two-column layout |
| `technical` | Code-heavy | Monospace, dev-friendly |

---

## 🔧 Common Tasks

### Change Template
In MDX metadata:
```mdx
template: 'minimal' // or default, magazine, technical
```

### Add Code Block
```mdx
```javascript
function example() {
  console.log('Hello!');
}
```
```

### Embed React Component
```mdx
<div className="bg-blue-50 p-4 rounded">
  Custom content
</div>
```

### Add Image
```mdx
![Alt text](/Blog/image-name.webp)
```

### Interactive Component
```mdx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

<Counter />
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Post not showing | Add slug to `blog-registry.ts` |
| Image not loading | Check path: `/Blog/filename.webp` |
| Template not working | Verify spelling: `default`, `minimal`, etc. |
| MDX error | Check metadata export syntax |
| Component error | Ensure JSX is properly closed |

---

## 📊 Metadata Fields

| Field | Required | Example |
|-------|----------|---------|
| `title` | ✅ | `'Your Post Title'` |
| `date` | ✅ | `'January 21, 2024'` |
| `description` | ✅ | `'SEO description'` |
| `author` | ❌ | `'Team Tracer'` |
| `tag` | ❌ | `'product'` |
| `readTime` | ❌ | `'5 min read'` |
| `ogImage` | ❌ | `'/Blog/image.webp'` |
| `template` | ❌ | `'default'` |

---

## 🌐 URLs

| Page | URL |
|------|-----|
| Blog listing | `/blog` |
| Individual post | `/blog/[slug]` |

---

## 💡 Best Practices

### Content
- Title: < 60 characters
- Description: 120-160 characters
- Use WebP images
- Estimate read time: 200-250 words/min

### SEO
- Include keywords in title/description
- Use descriptive alt text
- Structure with H1, H2, H3
- Add internal links

### Performance
- Optimize images
- Keep MDX files focused
- Test on mobile

---

## 🔄 System Flow

```
User visits /blog/post-slug
↓
page.tsx loads MDX content
↓
mdx-content.tsx loads from src/components/content/blog/
↓
Extract metadata and render content
↓
BlogPostTemplate renders with chosen template
```
