import { getRoute, getRoutes } from '@/client';
import Content from '@/components/Content/Content';

export default async function IndexPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;

	const route = await getRoute(slug);

	// todo route [tag]/[slag]/page.tsx

	return (
		<div
			className={`page-content page-content-${slug} text-slate-950 text-center`}
		>
			<Content route={route} />;
		</div>
	);
}

export async function generateStaticParams() {
	const routes = await getRoutes;

	return routes.map((route: Route) => ({
		slug: route.slug.current,
	}));
}
