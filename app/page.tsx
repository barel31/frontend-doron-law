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
			<Content route={route} contactInfo={contactInfo} />;
		</div>
	);
}
