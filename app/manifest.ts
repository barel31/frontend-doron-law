import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'עו"ד וטוען רבני - דורון חדד',
    short_name: 'עוד דורון חדד',
    description:
      'עו"ד וטוען רבני דורון חדד מציע שירותי דין ברמת גן והסביבה. צרו קשר עוד היום לייעוץ ראשוני ולקבלת ייעוץ משפטי מקצועי.',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
    ],
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
  };
}
