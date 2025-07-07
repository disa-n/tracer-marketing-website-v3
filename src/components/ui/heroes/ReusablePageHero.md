# ReusablePageHero Component

A reusable hero component based on the "Actionable Insights" design from the product page, designed for use across all non-landing pages to maintain visual consistency.

## Features

- **Consistent Design**: Maintains the same visual structure and animations as the product page hero
- **Visual Variations**: Three variants (default, mirrored, flipped) for visual diversity
- **Responsive**: Adapts to different screen sizes with appropriate animations
- **Accessible**: Includes proper alt text and semantic structure
- **Animated**: Smooth entrance animations using Framer Motion
- **Performance Optimized**: Animations disabled on smaller screens for better performance

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Main heading text |
| `subtitle` | `string` | ✅ | - | Descriptive paragraph text |
| `productLabel` | `string` | ✅ | - | Uppercase label (e.g., "_TRACER TECHNOLOGY") |
| `imageSrc` | `string` | ✅ | - | Path to hero image |
| `imageAlt` | `string` | ✅ | - | Alt text for the image |
| `variant` | `'default' \| 'mirrored' \| 'flipped'` | ❌ | `'default'` | Visual layout variant |

## Variants

### Default
- Image slides in from the left
- Text content on the right
- Standard grid layout
- Best for: Technology, Resources pages

### Mirrored
- Image slides in from the right
- Text content on the left
- Horizontally flipped layout
- Best for: Product, Platform pages

### Flipped
- Image slides in from the top
- Text content positioning adjusted
- Vertically oriented animation
- Best for: About, Company pages

## Usage Examples

### Technology Page (Mirrored)
```tsx
<ReusablePageHero
  title="Powering Scientific Breakthroughs"
  subtitle="Tracer uses cutting-edge technology to bring observability to complex scientific pipelines. By extracting real-time system-level data, Tracer turns what was initially a black box into clear, actionable insights."
  productLabel="_TRACER TECHNOLOGY"
  imageSrc="/images/technology/T-Asset-Satellite.webp"
  imageAlt="Scientific observability technology"
  variant="mirrored"
/>
```

### About Page (Flipped)
```tsx
<ReusablePageHero
  title="About Us"
  subtitle="Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions."
  productLabel="_TRACER COMPANY"
  imageSrc="/images/about-us/Tracer-brain.webp"
  imageAlt="About Tracer team"
  variant="flipped"
/>
```

### Why Monitoring Page (Default)
```tsx
<ReusablePageHero
  title="Monitoring Matters More Than Ever"
  subtitle="Understanding highly parallelised workloads running on distributed supercomputers is very difficult. Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to go from a black box to insights."
  productLabel="_TRACER INSIGHTS"
  imageSrc="/images/why-monitoring/T-Space-Satellite.webp"
  imageAlt="Why monitoring matters"
  variant="default"
/>
```

## Implementation Notes

1. **Replace existing hero components** on non-landing pages with this consistent version
2. **Choose appropriate variants** to create visual diversity across pages:
   - Use `default` for content-focused pages
   - Use `mirrored` for product/technology pages
   - Use `flipped` for company/about pages
3. **Use consistent product labels** following the pattern `_TRACER [SECTION]`
4. **Ensure images are optimized** and follow the same aspect ratio (775/567)
5. **Test animations** on different screen sizes to ensure smooth performance

## Animation Behavior

- **Desktop**: Full animations with slide-in effects and scaling
- **Mobile/Small screens**: Animations are disabled for better performance
- **Scroll-based**: Rectangle background animation resets when scrolling in/out of view
- **One-time**: Image animation only plays once per page load

## Styling

The component uses:
- **Chakra Petch font** for headings and labels
- **Britti Sans font** for body text
- **Consistent spacing** and typography scales
- **Responsive text sizing** from 48px to 104px on large screens
- **Color variables** (`text-c-black`, `bg-main-background`) for consistent theming

## Files Updated

- `src/app/technology/page.tsx` - Updated to use ReusablePageHero with mirrored variant
- `src/app/about/page.tsx` - Updated to use ReusablePageHero with flipped variant
- `src/app/why-monitoring/page.tsx` - Updated to use ReusablePageHero with default variant

## Benefits

1. **Visual Consistency**: All non-landing pages now have the same high-quality hero design
2. **Brand Cohesion**: Maintains the premium look and feel across the site
3. **Development Efficiency**: Easy to implement on new pages
4. **Visual Variety**: Three variants prevent monotony while maintaining consistency
5. **Performance Optimized**: Responsive animations that disable on smaller screens
6. **Hydration Safe**: No client/server mismatches

## Next Steps

Consider updating these pages to use ReusablePageHero:
- `/resources` - Use default variant
- `/platform` - Use mirrored variant
- Any other non-landing pages that need consistent hero sections
