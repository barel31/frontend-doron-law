import { getContactInfo, getRoute } from '@/client';
import Content from '@/components/Content';
import { type Metadata, type ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {

  const [route, data] = await Promise.all([getRoute('/'), parent]);

  const previousTitle = data.title?.absolute;
  const previousDescription = data.description;
  const previousKeywords = data.keywords;

  return {
    title: previousTitle ? `${route.name} | ${previousTitle}` : route.name,
    description: `${route.content[0].children[0].text} | ${previousDescription}`,
    keywords: `${route.keywords}, ${previousKeywords}`,
  };
}

export default async function Home() {
  const [contact, route] = await Promise.all([getContactInfo, getRoute('/')]);

  return (
    <div className="page-content page-content-home text-slate-950 text-center">
      <Content route={route} contact={contact} />
    </div>
  );
}
