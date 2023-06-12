import { getContactInfo, getRoute, getRoutes } from '@/client';
import Content from '@/components/Content/Content';

// todo route [tag]/[slag]/page.tsx

export const revalidate = 3600; // revalidate every hour

export default async function IndexPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;

	const route = await getRoute(slug);
	const contactInfo = await getContactInfo;

	return (
		<div
			className={`page-content page-content-${slug} text-slate-950 text-center`}
		>
			<Content route={route} contactInfo={contactInfo} />
		</div>
	);
}

export async function generateStaticParams() {
	const routes = await getRoutes;

	return routes.map((route: Route) => ({
		slug: route.slug.current,
	}));
}
