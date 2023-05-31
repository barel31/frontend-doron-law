import { getRoute, getRoutes } from '@/client';
import Content from '@/components/Content';

export default async function IndexPage({ params }: { params: any }) {
	const { slug } = params;

	const route = await getRoute(slug);
	
	return (
		<>
			<Content route={route} />
		</>
	);
}

export async function generateStaticParams() {
	const routes = await getRoutes;

	return routes.map((route: any) => ({
		slug: route.slug.current,
	}));
}
