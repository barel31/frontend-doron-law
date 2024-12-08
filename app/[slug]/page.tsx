import { getContactInfo, getRoute, getRoutes } from '@/lib/client';
import Content from '@/components/Content';
import { type ResolvingMetadata, type Metadata } from 'next';
import metadataGenerator from '@/service/metadataGenerator';

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  return metadataGenerator(slug, parent);
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

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
    .filter(route => route.slug.current !== '/')
    .map((route: Route) => ({
      slug: route.slug.current,
    }));
}
