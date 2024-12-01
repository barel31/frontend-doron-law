import { MetadataRoute } from 'next';
import { getRoutes } from '../lib/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getRoutes;

  return routes.map((route) => ({
    url:
      process.env.NEXT_PUBLIC_BASE_URL +
      (route.slug.current === '/' ? '' : '/' + route.slug.current),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route.slug.current === '/' ? 1 : 0.7,
    // images: route.image ? [{ url: route.image.url }] : [], //? Currently not supported by Next.js
  }));
}
