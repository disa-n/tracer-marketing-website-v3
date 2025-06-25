import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-registry';
import { BLOG_CONFIG } from '@/lib/constants';

// Flag to control visibility of action buttons
const showActionButtons = false;

type BiweeklyGridItemProps = {
  date: string;
  description: string;
  imageSrc?: string;
  caption?: string;
  slug: string;
};

function BiweeklyGridItem({ date, description, imageSrc, caption, slug }: BiweeklyGridItemProps) {
  // Check if this post has MDX content (exists) using the centralized config
  const hasContent = BLOG_CONFIG.allowedBiweeklySlugs?.includes(slug) || false;
  const linkHref = hasContent ? `/resources/${slug}` : '/coming-soon';

  return (
    <Link href={linkHref} className="block group">
      <div className="bg-[#2A2A2A] overflow-hidden transition-all duration-300 group-hover:bg-[#333333] group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-white/10 border border-[#404040] group-hover:border-white/30">
        {/* Image Section */}
        {imageSrc && (
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <Image
              src={imageSrc}
              alt={caption || description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/20 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6">
          {/* Date with accent */}
          <div className="mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#00FF94] rounded-full"></div>
            <span className="text-[#888888] text-sm font-chakra-petch uppercase tracking-wider">
              {date}
            </span>
          </div>

          {/* Title/Caption */}
          {caption && (
            <h3 className="text-[#FCFCFC] text-xl font-britti-sans font-medium mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
              {caption}
            </h3>
          )}

          {/* Description */}
          <p className="text-[#CCCCCC] text-sm font-britti-sans leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          {/* Status Indicator with enhanced styling */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-chakra-petch uppercase tracking-wider font-medium transition-colors duration-300">
                {hasContent ? 'Read Update' : 'Coming Soon'}
              </span>
              <svg
                className="w-4 h-4 text-white transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {showActionButtons && (
              <div className="flex gap-2">
                <button className="text-[#888888] hover:text-[#FCFCFC] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
                  </svg>
                </button>
                <button className="text-[#888888] hover:text-[#FCFCFC] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

type BiweeklyGridProps = {
  items?: BiweeklyGridItemProps[];
};

export default async function BiweeklyGrid({ items }: BiweeklyGridProps) {
  // Get blog posts from centralized data, but filter to only allowed bi-weekly posts
  const blogPosts = await getAllBlogPosts();

  // Filter to only show allowed bi-weekly posts (using BLOG_CONFIG.allowedBiweeklySlugs)
  const biweeklyPosts = blogPosts.filter(post =>
    BLOG_CONFIG.allowedBiweeklySlugs?.includes(post.slug) || false
  );

  // Sort bi-weekly posts by date descending (newest first)
  const sortedBiweeklyPosts = biweeklyPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const defaultItems: BiweeklyGridItemProps[] = sortedBiweeklyPosts.map(post => ({
    date: post.date,
    description: post.description,
    imageSrc: post.ogImage || post.imageSrc || '/placeholder-icon.svg',
    caption: post.title,
    slug: post.slug,
  }));

  const gridItems = items || defaultItems;

  return (
    <div className="max-w-[1408px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {gridItems.map((item, index) => (
          <BiweeklyGridItem
            key={item.slug || index}
            date={item.date}
            description={item.description}
            imageSrc={item.imageSrc}
            caption={item.caption}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
