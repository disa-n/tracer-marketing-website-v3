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

  return (
    <Link href={`/blog/${slug}`}>
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image src={ogImage} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
              {tag}
            </span>
            <span className="text-gray-500 text-sm ml-auto">{date}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 flex-1">{description}</p>
          {authors.length > 0 && (
            <div className="flex items-center mt-auto">
              <div className="flex -space-x-2">
                {authors.map((a, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium border-2 border-white"
                    title={a}
                  >
                    {a.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{authors.join(", ")}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
