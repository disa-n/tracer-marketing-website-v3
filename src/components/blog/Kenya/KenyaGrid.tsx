import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-registry';

// Flag to control visibility of action buttons
const showActionButtons = false;

type KenyaGridItemProps = {
  date: string;
  description: string;
  imageSrc?: string;
  caption?: string;
  slug: string;
};

function KenyaGridItem({ date, description, imageSrc, caption, slug }: KenyaGridItemProps) {
  // Smart routing logic for Kenya posts
  const getCardLink = () => {
    if (slug === 'kenya-hackathon') {
      return '/blog/kenyahackathonoverview';
    }

    // Check if this is a Kenya day post that might not have content yet
    const kenyaDayMatch = slug.match(/^kenya-day-(\w+)$/);
    if (kenyaDayMatch) {
      const mdxSlugs = [
        'kenya-day-one',
        'kenya-day-two',
        'kenya-day-three',
        'kenya-day-four'
        // Add more as they're created
      ];
      const hasContent = mdxSlugs.includes(slug);
      return hasContent ? `/blog/${slug}` : '/coming-soon';
    }

    // Default blog post routing
    return `/blog/${slug}`;
  };

  const cardLink = getCardLink();

  return (
    <Link href={cardLink} className="block">
      <div className="group cursor-pointer mb-8 last:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <p className="font-chakra-petch text-sm md:text-base text-[#888888] uppercase tracking-wide">
                {date}
              </p>
              <p className="font-britti-sans text-base md:text-lg text-[#FCFCFC] leading-relaxed">
                {description}
              </p>
            </div>

            {showActionButtons && (
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#E8E8E8] text-[#202020] font-chakra-petch text-sm font-medium rounded hover:bg-[#D0D0D0] transition-colors">
                  READ MORE
                </button>
                <button className="px-4 py-2 border border-[#E8E8E8] text-[#FCFCFC] font-chakra-petch text-sm font-medium rounded hover:bg-[#E8E8E8] hover:text-[#202020] transition-colors">
                  SHARE
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          {imageSrc && (
            <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={caption || 'Kenya hackathon image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

type KenyaGridProps = {
  items?: KenyaGridItemProps[];
};

export default async function KenyaGrid({ items }: KenyaGridProps) {
  const blogPosts = await getAllBlogPosts();

  // Explicitly defined slugs to display
  const allowedKenyaSlugs = [
    'kenya-hackathon',
    'kenya-day-one',
    'kenya-day-two',
    'kenya-day-three',
    'kenya-day-four',
    'kenya-day-five'
  ];

  const kenyaPosts = blogPosts.filter(post =>
    allowedKenyaSlugs.includes(post.slug)
  );

  // Explicit sorting order with fallback to date
  const sortedKenyaPosts = kenyaPosts.sort((a, b) => {
    const order = [
      'kenya-hackathon',
      'kenya-day-one',
      'kenya-day-two',
      'kenya-day-three',
      'kenya-day-four',
      'kenya-day-five',
    ];

    const indexA = order.indexOf(a.slug);
    const indexB = order.indexOf(b.slug);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // Date fallback sorting
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const defaultItems: KenyaGridItemProps[] = sortedKenyaPosts.map(post => ({
    date: post.date,
    description: post.description,
    imageSrc: post.ogImage || post.imageSrc,
    caption: post.title,
    slug: post.slug,
  }));

  const gridItems = items || defaultItems;

  return (
    <div className="w-full max-w-[1408px] mx-auto px-3 sm:px-4">
      {gridItems.map((item, index) => (
        <KenyaGridItem
          key={index}
          date={item.date}
          description={item.description}
          imageSrc={item.imageSrc}
          caption={item.caption}
          slug={item.slug}
        />
      ))}
    </div>
  );
}



