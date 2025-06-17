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
  // Check if this post has MDX content (exists)
  const mdxSlugs = [
    'kenya-day-one',
    'kenya-day-two',
    'kenya-day-three',
    'kenya-day-four'
    // Add 'kenya-day-five' as they're created
  ];

  const hasContent = mdxSlugs.includes(slug);
  const linkHref = hasContent ? `/resources/${slug}` : '/coming-soon';

  return (
    <div className="w-full bg-[#202020] border-t border-b border-[#303030] lg:h-80">
      {/* Desktop Layout - 2 columns */}
      <Link href={linkHref} className="hidden lg:flex lg:relative lg:h-80 cursor-pointer hover:bg-[#252525] transition-colors">
        {/* Left Section */}
        <div className="w-[514px] left-0 top-[34px] absolute">
          {/* Date */}
          <div className="text-white text-[13.20px] font-normal font-chakra-petch uppercase leading-5 tracking-[1.60px] mb-4">
            {date}
          </div>

          {/* Description Text */}
          <div className="text-[#888888] text-[18.36px] font-normal font-britti-sans mb-8 leading-relaxed">
            {description}
          </div>

          {/* Action Buttons */}
          {showActionButtons && (
            <div className="space-y-4 mt-16">
              {/* Watch Video Button */}
              <div className="flex items-center">
                <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
                  <Image
                    src="/Blog/play.svg"
                    alt="Play"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
                  Watch video
                </div>
              </div>

              {/* X Space Button */}
              <div className="flex items-center">
                <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
                  <Image
                    src="/Blog/mic.svg"
                    alt="Microphone"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
                  X Space
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Image Container */}
        <div className="w-[741.35px] h-[260px] left-[667px] top-[34px] absolute bg-[#171717] overflow-hidden rounded border border-[#242424]">
          <div className="w-full h-full relative">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={caption || 'Hackathon image'}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717] to-transparent" style={{ background: 'linear-gradient(90deg, #171717 0%, #171717 20%, rgba(0, 0, 0, 0) 75%)' }} />
          </div>

          {/* Caption Section */}
          <div className="w-[369.68px] h-[52px] left-[2px] top-[158px] absolute">
            <div className="w-[305.68px] h-6 left-[32px] top-[24px] absolute">
              <div className="left-[24px] top-[2px] absolute flex justify-center flex-col text-[#B4B4B4] text-[12.80px] font-normal font-chakra-petch leading-5">
                {hasContent ? 'Blog post' : 'Coming soon'}
              </div>
              <div className="w-4 h-6 left-0 top-0 absolute overflow-hidden">
                <div className="w-3 h-3 left-[2px] top-[6px] absolute border border-white" />
                <div className="w-[9.33px] h-[9.33px] left-[5.33px] top-[5.34px] absolute border border-white" />
              </div>
            </div>
            <div className="left-[32px] top-[156px] absolute flex justify-center flex-col text-[#B4B4B4] text-[16.70px] font-normal font-azeret-mono leading-7">
              {caption || 'Placeholder Caption'}
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile Layout - Stacked */}
      <Link href={linkHref} className="lg:hidden p-4 sm:p-6 space-y-4 sm:space-y-6 block cursor-pointer hover:bg-[#252525] transition-colors">
        {/* Text Content Section */}
        <div className="space-y-3 sm:space-y-4">
          {/* Date */}
          <div className="text-white text-[clamp(11px,2.5vw,13.2px)] font-normal font-chakra-petch uppercase leading-5 tracking-[1.60px]">
            {date}
          </div>

          {/* Description Text */}
          <div className="text-[#888888] text-[clamp(16px,4vw,18.36px)] font-normal font-britti-sans leading-relaxed">
            {description}
          </div>

          {/* Action Buttons */}
          {showActionButtons && (
            <div className="space-y-4 pt-4">
              {/* Watch Video Button */}
              <div className="flex items-center">
                <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
                  <Image
                    src="/Blog/play.svg"
                    alt="Play"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
                  Watch video
                </div>
              </div>

              {/* X Space Button */}
              <div className="flex items-center">
                <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
                  <Image
                    src="/Blog/mic.svg"
                    alt="Microphone"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
                  X Space
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full h-[180px] sm:h-[200px] bg-[#171717] overflow-hidden rounded border border-[#242424] relative">
          <div className="w-full h-full relative">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={caption || 'Hackathon image'}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717] to-transparent" style={{ background: 'linear-gradient(90deg, #171717 0%, #171717 20%, rgba(0, 0, 0, 0) 75%)' }} />
          </div>

          {/* Caption Section - Mobile */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div className="w-3 sm:w-4 h-5 sm:h-6 overflow-hidden">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 mt-1 sm:mt-1.5 ml-0.5 border border-white" />
                <div className="w-[8px] sm:w-[9.33px] h-[8px] sm:h-[9.33px] -mt-1.5 sm:-mt-2 ml-1 sm:ml-1.5 border border-white" />
              </div>
              <div className="text-[#B4B4B4] text-[clamp(11px,2.5vw,12.8px)] font-normal font-chakra-petch leading-5">
                {hasContent ? 'Blog post' : 'Coming soon'}
              </div>
            </div>
            <div className="text-[#B4B4B4] text-[clamp(14px,3.5vw,16.7px)] font-normal font-azeret-mono leading-6 sm:leading-7">
              {caption || 'Placeholder Caption'}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

type KenyaGridProps = {
  items?: KenyaGridItemProps[];
};

export default async function KenyaGrid({ items }: KenyaGridProps) {
  // Get blog posts from centralized data, but filter to only Kenya hackathon related posts
  const blogPosts = await getAllBlogPosts();

  // Filter to only show Kenya hackathon related posts (any slug starting with 'kenya-')
  const kenyaPosts = blogPosts.filter(post =>
    post.slug.startsWith('kenya-')
  );

  // Sort Kenya posts strictly by date ascending (oldest first)
  const sortedKenyaPosts = kenyaPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

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



