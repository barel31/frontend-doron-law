import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const Client = createClient({
	projectId: 'cprr9tyl',
	dataset: 'production',
	apiVersion: '2023-05-29',
	useCdn: true,
});

export const getRoutes: Promise<Route[]> = Client.fetch(
	`*[_type == "routes"] | order(_createdAt asc)`
);

export const getRoute = (slug: string): Promise<Route> =>
	Client.fetch(`*[_type == "routes" && slug.current == "${slug}"][0]`);

export const getContactInfo: Promise<ContactInfo> = Client.fetch(
	`*[_type == "contactInfo"][0]`
);

const builder = imageUrlBuilder(Client);

export const urlFor = (source: Route['image']) => builder.image(source!);
