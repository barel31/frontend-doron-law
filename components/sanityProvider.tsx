'use client';

import { getContactInfo, getRoutes } from '@/client';
import { createContext, useContext } from 'react';

const context = { routes: [], contact: {} } as unknown as {
	routes: Route[];
	contact: ContactInfo;
};
const SanityContext = createContext(context);

export function useSanityContext() {
	return useContext(SanityContext);
}

export default async function Provider({
	children,
}: {
	children: React.ReactNode;
}) {
	const routes = await getRoutes;
	const contact = await getContactInfo;

	return (
		<SanityContext.Provider value={{ routes, contact }}>
			{children}
		</SanityContext.Provider>
	);
}
