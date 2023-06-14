import { getContactInfo, getRoute } from '@/client';
import Content from '@/components/Content/Content';

export default async function Home() {
	const contact = await getContactInfo;
	const route = await getRoute('/');

	// if (!contactInfo || !route) return <p>contactInfo or route dont found.</p>;

	return (
		<div
			className={`page-content page-content-home text-slate-950 text-center`}
		>
			<Content route={route} contact={contact} />
		</div>
	);
}
