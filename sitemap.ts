import { MetadataRoute } from 'next';
import { getRoutes } from './client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getRoutes;
  const pages = routes.map((route: Route) =>
    route.slug.current === '/' ? '/' : `/${route.slug.current}`
  );

  return pages.map((route) => ({
    url: `https://doron-hadad.vercel.app${route}`,
    lastModified: new Date(),
  }));
}
