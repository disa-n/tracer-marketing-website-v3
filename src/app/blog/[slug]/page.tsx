import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllBlogPosts, getBlogPost } from '@/data/blogPosts';

export async function generateStaticParams() {
  // Generate params for all blog posts (both static and MDX)
  const posts = getAllBlogPosts();
  const staticParams = posts.map((post) => ({
    slug: post.slug,
  }));

  // Add known MDX files
  const mdxParams = [
    { slug: 'introducing-tracer-pt-1' },
    { slug: 'introducing-tracer-pt-2' },
    { slug: 'experimenting-with-tracer-pt-3' },
    { slug: 'error-detection-with-tracer-pt-4' },
    { slug: 'tracer-use-case101' },
    { slug: 'test-post-1' },
    { slug: 'test-post-2' },
    { slug: 'sample-mdx-post' },
    { slug: 'kenya-day-one' },
    { slug: 'kenya-day-two' },
  ];

  return [...staticParams, ...mdxParams];
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

    // Get blog post data
    const post = getBlogPost(slug);

    if (post) {
      return {
        title: post.title,
        description: post.description,
        openGraph: {
          images: [post.imageSrc],
        },
      };
    }

    // For other posts, try to import the MDX file
    try {
      const { metadata } = await import(`@/components/content/blog/${slug}.mdx`);

      return {
        title: metadata?.title || 'Blog Post',
        description: metadata?.description || '',
        openGraph: metadata?.ogImage
          ? { images: [metadata.ogImage] }
          : undefined,
      };
    } catch (importError) {
      console.error(`Error importing MDX for metadata: ${slug}.mdx`, importError);
      return { title: 'Blog Post' };
    }
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

    // Check if this is a known MDX file from our static list
    const mdxSlugs = [
      'introducing-tracer-pt-1',
      'introducing-tracer-pt-2',
      'experimenting-with-tracer-pt-3',
      'error-detection-with-tracer-pt-4',
      'tracer-use-case101',
      'test-post-1',
      'test-post-2',
      'sample-mdx-post',
      'kenya-day-one',
      'kenya-day-two',
      'kenya-day-three'

    ];

    const hasMDX = mdxSlugs.includes(slug);
    console.log(`Slug ${slug} ${hasMDX ? 'is' : 'is not'} in MDX list`);

    // Render MDX content if available, otherwise use static content
    if (hasMDX) {
      return <MDXContent slug={slug} />;
    } else {
      return <StaticContent slug={slug} />;
    }
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
