// This legacy home page has been removed as part of codebase cleanup.
// The main home page now uses V2 components and can be found at src/app/page.tsx
// This file is kept as a placeholder to prevent 404 errors during transition.

import Link from 'next/link';

export default function LegacyHomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFCFC]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#202020] mb-4">Page Moved</h1>
        <p className="text-[#888888] mb-6">This legacy page has been replaced with our updated home page.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#202020] text-white hover:bg-[#404040] transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
