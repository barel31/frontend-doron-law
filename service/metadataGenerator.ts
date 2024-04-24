import { getRoute } from '@/client';
import { type ResolvingMetadata, type Metadata } from 'next';

export default async function generateMetadata(
  slug: string,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [route, data] = await Promise.all([getRoute(slug), parent]);

  const previousTitle = data.title?.absolute;
  const previousDescription = data.description;
  const previousKeywords = data.keywords;

  return {
    title: previousTitle ? `${route.name} | ${previousTitle}` : route.name,
    description: `${route.content[0].children[0].text} | ${previousDescription}`,
    keywords: `${route.keywords}, ${previousKeywords}`,
  };
}
