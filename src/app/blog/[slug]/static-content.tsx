'use client';

import React, { useState, useEffect } from 'react';
import ComingSoon from '@/components/shared/ComingSoon';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  const [isComingSoon, setIsComingSoon] = useState(true); // Default to true for SSR

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const isLocalhost = hostname.includes("localhost");

      console.log("Current hostname:", hostname);
      console.log("Is localhost:", isLocalhost);

      if (isLocalhost) {
        setIsComingSoon(false);
        console.log("Setting isComingSoon to false (localhost)");
      } else {
        setIsComingSoon(true);
        console.log("Setting isComingSoon to true (production)");
      }
    } else {
      // Default to coming soon during SSR
      setIsComingSoon(true);
      console.log("Setting isComingSoon to true (SSR)");
    }

    // alternative way to do it:
    // process.env.NODE_ENV === "development" ? setIsComingSoon(false) : setIsComingSoon(true);

  }, []);

  console.log("Current isComingSoon state:", isComingSoon);

  if(isComingSoon) {
    console.log("Rendering ComingSoon component");
    return <ComingSoon />
  }

  console.log("Rendering blog content for slug:", slug);
  if (slug === 'test-post-1') {
    return (
      <div className="prose prose-lg max-w-none">
        <h1>Test Post 1</h1>
        <p>This is a test post with static content instead of MDX.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
          nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl
          aliquet nunc, quis aliquam nisl nunc quis nisl.
        </p>
        <h2>Section 1</h2>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
        <h2>Section 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }

  if (slug === 'test-post-2') {
    return (
      <div className="prose prose-lg max-w-none">
        <h1>Test Post 2</h1>
        <p>This is another test post with static content instead of MDX.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
          nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl
          aliquet nunc, quis aliquam nisl nunc quis nisl.
        </p>
        <h2>Section 1</h2>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
        <h2>Section 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <h1>Post Not Found</h1>
      <p>Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
    </div>
  );
}
