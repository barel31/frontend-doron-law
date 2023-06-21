import './globals.css';
import { Assistant } from 'next/font/google';

import { getContactInfo, getRoutes } from '@/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ScrollLine from '@/components/ScrollLine';

const assistFont = Assistant({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'עורך דין דורון חדד',
	description:
		'עורך דין טוען רבני דורון חדד\nמקרקעין - משפחה - אזרחי - הוצאה לפועל\nמשרד בוטיק - יחס אישי, מסור ויעיל\nיעוץ וליווי לאורך כל הדרך',
};

export default async function RootLayout({
	children,
	tyModal,
}: {
	children: React.ReactNode;
	tyModal: React.ReactNode;
}) {
	const routes = await getRoutes;
	const contactInfo = await getContactInfo;

	if (routes[0].name !== 'בית') {
		// todo: let sanity handle order
		const homeIndex = routes.findIndex((route) => route.name === 'בית');
		const tmp = routes[0];
		routes[0] = routes[homeIndex];
		routes[homeIndex] = tmp;
	}

	return (
		<html
			lang="he"
			className={assistFont.className}
			dir="rtl"
			suppressHydrationWarning
		>
			<body className="bg-slate-50 dark:bg-slate-800">
				<ThemeProvider>
					<ScrollLine />
					<Header routes={routes} contact={contactInfo} />

					<main>
						{children}
						{tyModal}
					</main>

					<Footer routes={routes} contact={contactInfo} />
				</ThemeProvider>
			</body>
		</html>
	);
}
