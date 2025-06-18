import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostsForStaticGeneration, getBlogPost, isMDXBlogPost } from '@/lib/blog-registry';

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
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = await getBlogPost(slug);
    
    if (!post) {
      return {
        title: 'Post Not Found | Tracer',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${post.title} | Tracer`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: post.ogImage ? [{ url: post.ogImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: post.ogImage ? [post.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: 'Error | Tracer',
      description: 'An error occurred while loading this page.',
    };
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

    // Check if this is an MDX blog post using the centralized registry
    if (isMDXBlogPost(slug)) {
      return <MDXContent slug={slug} />;
    } else {
      return <StaticContent slug={slug} />;
    }
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
