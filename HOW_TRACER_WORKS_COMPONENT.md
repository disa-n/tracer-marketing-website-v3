# How Tracer Works Section Component

## Overview

The `HowTracerWorksSection` component is a new section that follows Tracer's frontend conventions and design system. It explains key capabilities in two vertically stacked blocks alongside a central image, with a mobile-first and fully responsive layout.

## Component Location

- **Component**: `src/components/shared/HowTracerWorksSection.tsx`
- **Test Page**: `src/app/test-how-tracer-works/page.tsx`

## Features

### Design System Compliance

✅ **Mobile-first approach**: Stacks vertically on small screens, side-by-side from lg+ breakpoints  
✅ **Typography**: Uses Britti Sans for all headings and body copy  
✅ **Color palette**: 
- Background: #FCFCFC
- Primary text: #202020  
- Secondary text: #888888
- CTA buttons: #E8E8E8 background with #202020 text

✅ **Max width**: Content constrained to 1400px and centered  
✅ **Responsive padding**: px-4 mobile, lg:px-20, xl:px-32 on larger screens  
✅ **Responsive breakpoints**: Follows Tracer's breakpoint system

### Layout Structure

1. **Section heading**: "How Tracer Works" - prominently styled
2. **Two-column layout** (desktop and above):
   - **Left column**: Vertically oriented image spanning most height
   - **Right column**: Two numbered content blocks

3. **Content blocks** include:
   - Large, stylized step numbers (01, 02)
   - Bold titles with sentence case
   - Short paragraphs in lighter text
   - Call-to-action buttons with light grey styling

### Content

**Block 1**
- Step: 01
- Title: "Built For The Most Complex Computing Systems"
- Description: Explains eBPF-powered OS-level extraction technologies
- CTA: "See our Technology" → links to `/technology`

**Block 2**
- Step: 02  
- Title: "Move Fast Without Losing Control"
- Description: Explains real-time visibility and debugging capabilities
- CTA: "Get a demo" → links to `https://sandbox.tracer.cloud/`

## Usage

### Basic Implementation

```tsx
import HowTracerWorksSection from '@/components/shared/HowTracerWorksSection';

export default function YourPage() {
  return (
    <main>
      {/* Other sections */}
      <HowTracerWorksSection />
      {/* Other sections */}
    </main>
  );
}
```

### Testing

Visit the test page at `/test-how-tracer-works` to see the component in action.

## Technical Details

### Dependencies

- `next/image` - For optimized image loading
- `next/link` - For navigation
- `@/components/shared/GridLines` - Background grid lines
- `@/components/ui/PrimaryButton` - Consistent button styling

### Responsive Behavior

- **Mobile (< lg)**: Single column, image above content blocks
- **Desktop (lg+)**: Two columns, image left, content blocks right
- **Typography**: Scales responsively across all breakpoints
- **Buttons**: Full width on mobile, auto width on larger screens

### Accessibility

- Semantic HTML structure with proper heading hierarchy
- Alt text for images
- Focus-visible states on interactive elements
- Proper color contrast ratios

## Customization

The component is designed to be self-contained but can be customized by:

1. **Image**: Replace the placeholder image URL with actual design assets
2. **Content**: Modify titles, descriptions, and CTA text as needed
3. **Links**: Update CTA button destinations
4. **Styling**: Adjust spacing, colors, or typography while maintaining design system consistency

## Integration Notes

- Component uses existing Tracer design tokens and patterns
- Follows established responsive breakpoint system
- Integrates seamlessly with existing GridLines and Button components
- Maintains consistent spacing and typography hierarchy with other sections
