# Dynamic Responsive Navigation Bar

A React component that creates a responsive navigation bar that dynamically changes based on scroll position with smooth animations.

## Features

### 🎯 Scroll-Based Transformation
- **Full State**: Wide navbar with complete navigation links, logo, tagline, and search bar
- **Compact State**: Centered, condensed navbar with essential elements only
- **Smooth Transition**: Automatic morphing between states based on scroll position

### 📱 Mobile Responsive
- Responsive design that works on all screen sizes
- Mobile-optimized overlay menu with smooth animations
- Touch-friendly interactions and proper spacing

### ♿ Accessibility First
- ARIA roles and labels for screen readers
- Keyboard navigation support
- Focus management and visual focus indicators
- Semantic HTML structure

### ✨ Smooth Animations
- CSS transitions for all state changes
- Transform-based animations for performance
- Configurable animation durations and easing

## Implementation Details

### State Management
```typescript
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
```

### Scroll Detection
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50); // Trigger at 50px scroll
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Responsive Breakpoints
- **Mobile**: `< 768px` - Hamburger menu with overlay
- **Tablet**: `768px - 1024px` - Condensed horizontal navigation
- **Desktop**: `> 1024px` - Full navigation with all features

## Customization Options

### Scroll Trigger Point
Change the scroll position that triggers the compact state:
```typescript
setIsScrolled(scrollPosition > 100); // Trigger at 100px instead of 50px
```

### Animation Duration
Modify transition speeds in the className:
```typescript
transition-all duration-300 ease-in-out // Faster transitions
transition-all duration-700 ease-in-out // Slower transitions
```

### Styling Variants

#### Full State Styling
```typescript
className={`
  max-w-7xl bg-white/95 backdrop-blur-sm shadow-sm 
  rounded-lg border border-gray-200/30 px-8 py-4
`}
```

#### Compact State Styling
```typescript
className={`
  max-w-4xl bg-white/90 backdrop-blur-md shadow-lg 
  rounded-full border border-gray-200/50 px-6 py-3
`}
```

## Usage

### Basic Implementation
```tsx
import DynamicNavbar from '@/components/shared/DynamicNavbar';

export default function MyPage() {
  return (
    <div>
      <DynamicNavbar />
      {/* Your page content */}
    </div>
  );
}
```

### Custom Navigation Items
```typescript
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Contact', href: '/contact' },
];
```

### Props Interface
```typescript
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}
```

## Browser Support

- **Modern Browsers**: Full support with all animations
- **Safari**: Requires `-webkit-backdrop-filter` for blur effects
- **IE11**: Graceful degradation without backdrop-blur

## Performance Considerations

### Optimizations Included
- **Passive scroll listeners** for better performance
- **Transform-based animations** for GPU acceleration
- **Conditional rendering** to reduce DOM complexity
- **Debounced scroll events** (can be added if needed)

### Memory Management
- Proper cleanup of event listeners in useEffect
- State management optimized for re-renders

## Accessibility Features

### ARIA Implementation
```tsx
<nav role="navigation" aria-label="Main navigation">
  <button 
    aria-expanded={isMobileMenuOpen}
    aria-haspopup="true"
    aria-label="Toggle mobile menu"
  >
```

### Keyboard Navigation
- Tab order follows logical flow
- Enter/Space activation for buttons
- Escape key closes mobile menu
- Focus trapping in mobile overlay

### Screen Reader Support
- Descriptive labels for all interactive elements
- State announcements for dynamic content
- Semantic HTML structure

## Testing

### Manual Testing Checklist
- [ ] Scroll behavior triggers at correct position
- [ ] Smooth transitions between states
- [ ] Mobile menu opens/closes properly
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Touch interactions on mobile
- [ ] Performance on slower devices

### Automated Testing
```typescript
// Example test cases
describe('DynamicNavbar', () => {
  test('transitions to compact state on scroll', () => {
    // Test scroll behavior
  });
  
  test('mobile menu toggles correctly', () => {
    // Test mobile interactions
  });
  
  test('keyboard navigation works', () => {
    // Test accessibility
  });
});
```

## Dependencies

- React 18+
- Next.js 13+ (for Link component)
- Tailwind CSS 3+
- Lucide React (for icons)
- TypeScript (recommended)

## License

MIT License - feel free to use and modify as needed.
