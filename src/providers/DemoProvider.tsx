import { ReactNode } from 'react';
import { DemoModalProvider } from '../components/ScheduleDemo';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DemoModalProvider>
      {children}
    </DemoModalProvider>
  );
} 