import { getContactInfo, getRoute, getRoutes } from '@/client';
import Content from '@/components/Content';
import { type ResolvingMetadata, type Metadata } from 'next';

export const revalidate = 3600; // revalidate every hour

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

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

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [route, contact] = await Promise.all([getRoute(slug), getContactInfo]);

  return (
    <div
      className={`page-content page-content-${slug} text-slate-950 text-center`}>
      <Content route={route} contact={contact} />
    </div>
  );
}

export async function generateStaticParams() {
  const routes = await getRoutes;

  return routes
    .filter((route) => route.slug.current !== '/')
    .map((route: Route) => ({
      slug: route.slug.current,
    }));
}
