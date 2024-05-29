import '@/styles/globals.css';

import { getContactInfo, getRoutes } from '@/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import { type Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Accessibility from '@/components/Accessibility';

export const metadata: Metadata = {
  title: 'עו"ד וטוען רבני - דורון חדד',
  description:
    'עורך דין וטוען רבני דורון חדד מספק ייעוץ משפטי מקצועי בתחומי מקרקעין, משפחה, אזרחי, הוצאה לפועל, ירושה ועוד. משרדו ממוקם בבני ברק ונותן שירותים ללקוחות באזור.',
  keywords:
    'עוד, עו"ד, עורך דין, דורון חדד, עורך דין רבני, עורך דין מקרקעין, עורך דין משפחה, עורך דין אזרחי, עורך דין הוצאה לפועל, עורך דין ירושה, עורך דין יחסי ציבור, עורך דין יחסי ציבור רמת גן, עורך דין רמת גן, עורך דין תל אביב, עורך דין גבעתיים, עורך דין רמת השרון, עורך דין רעננה, עורך דין כפר סבא, עורך דין ראשון לציון, עורך דין פתח תקווה, עורך דין ראש העין, עורך דין נתניה, עורך דין חדרה, עורך דין קריית אונו, עורך דין רמלה, עורך דין רחובות, עורך דין יבנה, עורך דין נס ציונה, עורך דין דורן חדד, טוען רבני',
  other: {
    'google-site-verification': 'oLou05k7JXCvfbsQl-8YhBq73nsGZwf6lViRe6E4lwI',
  },
};

export default async function RootLayout({
  children,
  Modal,
}: {
  children: React.ReactNode;
  Modal: React.ReactNode;
}) {
  const [contactInfo, routes] = await Promise.all([getContactInfo, getRoutes]);

  if (routes[0].name !== 'בית') {
    const homeIndex = routes.findIndex(route => route.name === 'בית');
    [routes[0], routes[homeIndex]] = [routes[homeIndex], routes[0]]; // Swap the first route with the home route
  }

  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_PRODUCTION_URL} />
      </head>
      <body className="bg-slate-50 dark:bg-slate-800">
        <ThemeProvider>
          <Header routes={routes} contact={contactInfo} />

          <main>
            {children}
            {Modal}
          </main>

          <Footer routes={routes} contact={contactInfo} />
        </ThemeProvider>

        <Accessibility />
      </body>
    </html>
  );
}
