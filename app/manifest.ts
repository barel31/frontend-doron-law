import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const manifestData: MetadataRoute.Manifest = {
    name: 'עו"ד דורון חדד - עורך דין וטוען רבני',
    short_name: 'עו"ד דורון חדד',
    description:
      'עורך דין וטוען רבני דורון חדד מתמחה בשירותי משפט ברמת גן ובאזור המרכז. השירותים כוללים ייעוץ משפטי בענייני משפחה, גירושין, דיני עבודה, ונדל"ן. פנו עוד היום לייעוץ מקצועי ומותאם אישית.',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '256x256',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    id: '/manifest.webmanifest',
    orientation: 'portrait',
  };

  return manifestData;
}
