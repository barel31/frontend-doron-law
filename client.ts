import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';

export const Client = createClient({
  projectId: 'cprr9tyl',
  dataset: 'production',
  apiVersion: '2023-05-29',
  useCdn: true,
});

export const getRoutes: Promise<Route[]> = Client.fetch(
  `*[_type == "routes"]{ ..., "children": children[]-> } | order(_createdAt asc)`
);

export const getRoute = (slug: string): Promise<Route> =>
  Client.fetch(
    `*[_type == "routes" && slug.current == "${slug}"]{ ..., "children": children[]-> }[0]`
  );

export const getContactInfo: Promise<ContactInfo> = Client.fetch(
  `*[_type == "contactInfo"][0]`
);

const builder = imageUrlBuilder(Client);

export const urlFor = (source: SanityImageSource) => builder.image(source!);
