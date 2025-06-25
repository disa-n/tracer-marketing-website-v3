import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostsForStaticGeneration, getBlogPost, isMDXBlogPost, generateBlogPostSchema } from '@/lib/blog-registry';

export async function generateStaticParams() {
  // Get all blog posts from the centralized registry
  return await getBlogPostsForStaticGeneration();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  try {
    // Await the params Promise to get the slug
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // Get blog post data from centralized registry
    const post = await getBlogPost(slug);

    if (post) {
      return {
        title: post.title,
        description: post.description,
        openGraph: post.ogImage
          ? { images: [post.ogImage] }
          : undefined,
      };
    }

    return { title: 'Blog Post Not Found' };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: 'Blog Post Not Found' };
  }
}

// Import the content components
import StaticContent from './static-content';
import MDXContent from './mdx-content';

// Page component with params as Promise to match Next.js 15 internal type
export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    // Await the params Promise to get the slug
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // Get the blog post for JSON-LD schema
    const post = await getBlogPost(slug);

    if (!post) {
      notFound();
    }

    // Generate JSON-LD schema for this blog post
    const blogPostSchema = generateBlogPostSchema(post);

    // Check if this is an MDX blog post using the centralized registry
    if (isMDXBlogPost(slug)) {
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
          />
          <MDXContent slug={slug} />
        </>
      );
    } else {
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
          />
          <StaticContent slug={slug} />
        </>
      );
    }
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
