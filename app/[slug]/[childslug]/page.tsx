import { getContactInfo, getRoute, getRoutes } from '@/client';
import Content from '@/components/Content';

export const revalidate = 3600; // revalidate every hour

export default async function ChildPage({
  params,
}: {
  params: { slug: string; childSlug: string };
}) {
  const { slug, childSlug } = params;

  const route = await getRoute(slug);
  let childRoute;
  if (route.children) {
    childRoute = route.children.find(
      (child) => child.slug.current === childSlug
    );
  }
  const contact = await getContactInfo;

  return (
    <div
      className={`page-content page-content-${slug}-${childSlug} text-slate-950 text-center`}>
      {childRoute && <Content route={childRoute} contact={contact} />}
    </div>
  );
}

export async function generateStaticParams() {
  const routes = await getRoutes;

  return routes.flatMap((route: Route) =>
    route.children
      ? route.children.map((child: Route) => ({
          slug: route.slug.current,
          childSlug: child.slug.current,
        }))
      : []
  );
}
