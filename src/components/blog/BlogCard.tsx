import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag?: string;
  ogImage?: string;
  author?: string | string[];
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tag = 'general',
  ogImage = '/placeholder-icon.svg',
  author,
}: BlogCardProps) {
  const authors =
    typeof author === "string"
      ? author.split(/,\s*and\s*|,\s*|\s+and\s+/).map((a) => a.trim())
      : Array.isArray(author)
      ? author
      : [];

  // Smart routing logic for Kenya hackathon
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
        'kenya-day-three'
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
    <Link href={cardLink} className="block h-full">
      <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[clamp(450px,60vw,550px)] z-[2] bg-[#FCFCFC] cursor-pointer">
        <div className="relative h-48 sm:h-56 w-full">
          <Image
            src={ogImage || "https://placehold.co/400x224"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-4 px-4 pb-4 sm:pt-6 sm:px-6 sm:pb-6 flex-1 flex flex-col">
          <div className="flex items-center mb-4 sm:mb-6">
            <span className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020]">
              {tag}
            </span>
            <span className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020] ml-auto">{date}</span>
          </div>
          <h2 className="font-britti-sans text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#202020] hover:text-gray-700 transition-colors leading-tight">{title}</h2>
          <p className="font-britti-sans text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 leading-snug">{description}</p>
          {slug === 'kenya-hackathon' ? (
            <div className="mt-auto">
              <div className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020] hover:text-[#404040] transition-colors">
                FOLLOW THE JOURNEY →
              </div>
            </div>
          ) : authors.length > 0 ? (
            <div className="flex items-center mt-auto">
              <div className="flex -space-x-2">
                {authors.map((a, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium border-2 border-white"
                    title={a}
                  >
                    {a.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="ml-2 text-xs sm:text-sm text-gray-500">{authors.join(", ")}</span>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}