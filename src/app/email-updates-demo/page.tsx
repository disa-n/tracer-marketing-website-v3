import EmailUpdatesSection from '@/components/ui/sections/EmailUpdatesSection';
import { BookOpen, Calendar, Users, Zap } from 'lucide-react';

export default function EmailUpdatesDemoPage() {
  // Custom button group items for demonstration
  const customButtonItems = [
    {
      id: 'newsletter',
      title: 'Newsletter',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/newsletter'
    },
    {
      id: 'community',
      title: 'Community',
      icon: <Users className="w-5 h-5" />,
      href: '/community'
    },
    {
      id: 'events',
      title: 'Events',
      icon: <Calendar className="w-5 h-5" />,
      href: '/events'
    }
  ];

  return (
    <main className="w-full min-h-screen">
      {/* Demo with default props */}
      <EmailUpdatesSection />
      
      {/* Demo with custom props */}
      <EmailUpdatesSection
        title="Join Our Community"
        subtitle="Connect with fellow developers and stay updated on the latest in AI observability"
        buttonGroupItems={customButtonItems}
        className="bg-[#F8F8F8]"
      />
      
      {/* Demo with different styling */}
      <EmailUpdatesSection
        title="Developer Resources"
        subtitle="Access exclusive content, tutorials, and early access to new features"
        buttonGroupItems={[
          {
            id: 'docs',
            title: 'Documentation',
            icon: <BookOpen className="w-5 h-5" />,
            href: '/docs'
          },
          {
            id: 'api',
            title: 'API Updates',
            icon: <Zap className="w-5 h-5" />,
            href: '/api'
          }
        ]}
      />
    </main>
  );
}
