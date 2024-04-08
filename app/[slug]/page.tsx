import { getContactInfo, getRoute, getRoutes } from '@/client';
import Content from '@/components/Content';

export const revalidate = 3600; // revalidate every hour

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const route = await getRoute(slug);
  const contact = await getContactInfo;

  return (
    <div
      className={`page-content page-content-${slug} text-slate-950 text-center`}>
      <Content route={route} contact={contact} />
    </div>
  );
}

export async function generateStaticParams() {
  const routes = await getRoutes;

  return routes.map((route: Route) => ({
    slug: route.slug.current,
  }));
}
