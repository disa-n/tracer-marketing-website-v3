import { BlogPost } from '@/lib/blog-registry';
import BlogCard from './BlogCard';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          tag={post.tag}
          ogImage={post.ogImage || '/icons/icon-placeholder.svg'}
          {...(post.author && { author: post.author })}
        />
      ))}
    </div>
  );
}
