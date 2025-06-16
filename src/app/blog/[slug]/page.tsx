import { redirect } from 'next/navigation';

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  redirect(`/resources/${slug}`);
}
