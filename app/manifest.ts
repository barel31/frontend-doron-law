import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'עו"ד וטוען רבני - דורון חדד',
    short_name: 'דורון חדד',
    description:
      'עו"ד וטוען רבני דורון חדד מציע מגוון שירותי משפט באזור רמת גן והסביבה. התמחותו כוללת ייעוץ משפטי ראשוני ומתמשך בתחומים שונים. פנו אליו היום כדי לקבוע פגישת ייעוץ ולהבטיח שתיקחו חלק במסע משפטי מקצועי ומותאם אישית, המוביל לתוצאות מיטביות.',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '256x256',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    start_url: '.',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    id: '/manifest.webmanifest',
    orientation: 'any',
  };
}
