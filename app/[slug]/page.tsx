import { getRoute, getRoutes, urlFor } from '@/client';
import Content from '@/components/Content/Content';
import Image from 'next/image';

export default async function IndexPage({ params }: { params: any }) {
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

	return routes.map((route: any) => ({
		slug: route.slug.current,
	}));
}
