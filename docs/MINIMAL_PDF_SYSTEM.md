# Minimal PDF Download System

A lightweight, plug-and-play PDF download system using Supabase Storage with signed URLs.

## 🎯 **What This System Does**

- ✅ **Simple PDF downloads** from Supabase Storage
- ✅ **Signed URLs** for secure access
- ✅ **Single component** for easy integration
- ✅ **No database required** - just storage
- ✅ **No admin interface** - upload files manually
- ✅ **Lightweight** - minimal code footprint

## 📁 **Files Created**

```
src/
├── lib/
│   ├── supabasePdfs.ts      # Supabase client for PDFs
│   └── getSignedUrl.ts      # Signed URL utility
└── components/
    └── PDFDownloadCard.tsx  # Download card component
```

## 🚀 **Setup Instructions**

### **1. Upload PDF to Supabase Storage**

1. Go to your **Articles Supabase project** dashboard
2. Navigate to **Storage** → **whitepapers** bucket
3. Upload your PDF file (e.g., `tracer-whitepaper.pdf`)
4. Make sure the bucket has **public access** enabled

### **2. Use the Component**

```tsx
import PDFDownloadCard from '@/components/PDFDownloadCard';

// Default usage (loads tracer-whitepaper.pdf)
<PDFDownloadCard />

// Custom PDF
<PDFDownloadCard
  fileName="my-document.pdf"
  title="My Custom Document"
  description="Download our comprehensive guide."
/>
```

## 💡 **Usage Examples**

### **Basic Usage**
```tsx
// Loads tracer-whitepaper.pdf by default
<PDFDownloadCard />
```

### **Custom PDF**
```tsx
<PDFDownloadCard
  fileName="technical-guide.pdf"
  title="Technical Implementation Guide"
  description="Complete guide to implementing Tracer in your environment."
/>
```

### **In a Page**
```tsx
export default function ResourcesPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCFCFC]">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-medium font-britti-sans mb-6 text-[#202020]">
            Download Resources
          </h1>
        </div>
        
        <PDFDownloadCard />
      </section>
    </main>
  );
}
```

## 🔧 **API Reference**

### **getSignedPdfUrl(fileName: string)**
```typescript
import { getSignedPdfUrl } from '@/lib/getSignedUrl';

const url = await getSignedPdfUrl('my-file.pdf');
// Returns: signed URL string or null if error
```

### **PDFDownloadCard Props**
```typescript
interface PDFDownloadCardProps {
  fileName?: string;     // Default: 'tracer-whitepaper.pdf'
  title?: string;        // Default: 'Tracer Whitepaper'
  description?: string;  // Default: description text
  className?: string;    // Additional CSS classes
}
```

## 🎨 **Styling**

The component uses your existing design system:
- **Colors**: `#202020` text, `#E8E8E8` borders, `#FCFCFC` backgrounds
- **Fonts**: Britti Sans for headings
- **Button**: Uses `ShinyCTAButtonExperimental` styling
- **Icons**: Lucide React icons

## 🔒 **Security**

- ✅ **Signed URLs** with 1-hour expiry
- ✅ **No public direct access** to files
- ✅ **Bucket-level permissions** control access
- ✅ **Client-side URL generation** for better UX

## 📦 **File Management**

### **Adding New PDFs**
1. Upload to Supabase Storage `whitepapers` bucket
2. Use the filename in your component
3. No database updates needed

### **Removing PDFs**
1. Delete from Supabase Storage
2. Remove/update components that reference it

### **Organizing Files**
- Use descriptive filenames
- Consider folder structure in bucket if needed
- Keep filenames consistent across components

## 🚨 **Important Notes**

### **File Access**
- Files must be in the `whitepapers` bucket
- Bucket must have appropriate access policies
- Signed URLs expire after 1 hour (configurable)

### **Error Handling**
- Component shows error state if file not found
- Graceful fallback for network issues
- Console logging for debugging

### **Performance**
- Signed URLs are generated on component mount
- URLs are cached during component lifecycle
- No unnecessary re-fetching

## 🎉 **You're Ready!**

Your minimal PDF download system is complete! 

**To use it:**
1. Upload `tracer-whitepaper.pdf` to your `whitepapers` bucket
2. Add `<PDFDownloadCard />` to any page
3. Users can download with one click

**That's it!** No database setup, no admin interface, no complex configuration. Just upload files and use the component.

## 🔄 **Migration from Complex System**

If you had the previous complex system, this minimal version:
- ❌ Removes admin upload interface
- ❌ Removes database metadata
- ❌ Removes analytics/tracking
- ❌ Removes category filtering
- ✅ Keeps core download functionality
- ✅ Maintains design consistency
- ✅ Simplifies maintenance
