'use client';

import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface DemoContextType {
  openDemo: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Ensure this only runs on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const value = {
    openDemo: () => {
      if (mounted) {
        router.push('/demo');
      }
    }
  };

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}
