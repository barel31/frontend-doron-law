import { getContactInfo, getRoute, urlFor } from '@/client';
import Content from '@/components/Content/Content';
import Image from 'next/image';

export default async function Home() {
	const contactInfo = await getContactInfo;
	const route = await getRoute('/');

	if (!contactInfo || !route) return <p>contactInfo or route dont found.</p>;

	return (
		<div
			className={`page-content page-content-home text-slate-950 text-center`}
		>
			{route?.image && (
				<div
					className={`background-image background-image-home min-h-full h-[35vh] w-full text-center -z-10 -top-4 absolute`}
				>
					<Image
						src={urlFor(route.image).url()}
						alt="Office image"
						width={2000}
						height={1000}
					/>
					{/* <div className="background-image-overlay absolute top-0" /> */}
				</div>
			)}
			<Content route={route} contactInfo={contactInfo} />;
		</div>
	);
}
