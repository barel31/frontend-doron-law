import { getRoute, getRoutes, urlFor } from '@/client';
import Content from '@/components/Content/Content';
import Image from 'next/image';

export default async function IndexPage({ params }: { params: any }) {
	const { slug } = params;

	const route = await getRoute(slug);

	return (
		<div
			className={`page-content page-content-${slug} text-slate-950 text-center`}
		>
			{route?.image && (
				<div
					className={`background-image background-image-${slug} min-h-full h-[35vh] w-full text-center -z-10 -top-20 absolute`}
				>
					<Image
						src={urlFor(route.image).url()}
						alt="Office image"
						width={2000}
						height={1000}
					/>
					<div className="background-image-overlay absolute top-0" />
				</div>
			)}
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
