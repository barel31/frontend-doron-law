import { createClient } from 'next-sanity';

export const Client = createClient({
	projectId: 'cprr9tyl',
	dataset: 'production',
	apiVersion: '2023-05-29',
	useCdn: false, // use cache
});

export const getRoutes: Promise<Route[]> = Client.fetch(`*[_type == "routes"]`);

export const getRoute = (slug: string) =>
	Client.fetch(`*[_type == "routes" && slug.current == "${slug}"][0]`);

export const getContactInfo: Promise<ContactInfo> = Client.fetch(
	`*[_type == "contactInfo"][0]`
);
