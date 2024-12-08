import { useMemo } from 'react';
import ContactInfoSection from './ContactInfoSection';
import SiteNavigationSection from './SiteNavigationSection';
import MapSection from './MapSection';

interface ContactInfo {
  mobile: string;
  phone: string;
  fax: string;
  email: string;
  address: string;
  facebook?: string;
  linkedin?: string;
}

interface Route {
  slug: { current: string };
  name: string;
}

function Footer({ routes, contact }: { routes: Route[]; contact: ContactInfo }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-stone-300 dark:bg-stone-900 w-full pt-12 pb-1 text-gray-800 dark:text-gray-300">
      <div className="container w-full mx-auto px-2 flex flex-col md:flex-row justify-between gap-10">
        <SiteNavigationSection routes={routes} />
        <ContactInfoSection contact={contact} />
        <MapSection address={contact.address} />
      </div>
      <div className="text-center mt-8 text-sm border-t border-gray-400">
        <p className='mb-0 pb-0'>כל הזכויות שמורות &copy; {currentYear}</p>
        <p className='m-0 p-0'>
          נבנה על ידי{' '}
          <a
            href="https://www.linkedin.com/in/barel-shraga/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold transition duration-300"
            title="barel31 Linkedin"
          >
            barel31
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
