import './globals.css';

import { getContactInfo, getRoutes } from '@/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'עורך דין וטוען רבני דורון חדד',
  description:
    'עורך דין וטוען רבני דורון חדד מציע שירותי דין ברמת גן והסביבה. צרו קשר עוד היום לייעוץ ראשוני ולקבלת ייעוץ משפטי מקצועי.',
  keywords:
    'עורך דין, דורון חדד, עורך דין רבני, עורך דין מקרקעין, עורך דין משפחה, עורך דין אזרחי, עורך דין הוצאה לפועל, עורך דין ירושה, עורך דין יחסי ציבור, עורך דין יחסי ציבור רמת גן, עורך דין רמת גן, עורך דין תל אביב, עורך דין גבעתיים, עורך דין רמת השרון, עורך דין רעננה, עורך דין כפר סבא, עורך דין ראשון לציון, עורך דין פתח תקווה, עורך דין ראש העין, עורך דין נתניה, עורך דין חדרה, עורך דין קריית אונו, עורך דין רמלה, עורך דין רחובות, עורך דין יבנה, עורך דין נס ציונה, עורך דין רא',
};

export default async function RootLayout({
  children,
  Modal,
}: {
  children: React.ReactNode;
  Modal: React.ReactNode;
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
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-800">
        <ThemeProvider>
          <Header routes={routes} contact={contactInfo} />

          <main>
            {children}
            {Modal}
          </main>

          <Footer routes={routes} contact={contactInfo} />
        </ThemeProvider>
      </body>
    </html>
  );
}
