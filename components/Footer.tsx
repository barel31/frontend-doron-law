import {
  BiLinkedin,
  Fa6SolidAddressCard,
  IcBaselinePhoneEnabled,
  IcOutlineLocalPrintshop,
  MaterialSymbolsMailOutline,
  OcticonDeviceMobile,
  UiwFacebook,
} from '@/lib/icons';
import Link from 'next/link';
import GoogleMapsEmbed from './GoogleMapsEmbed';

const year = new Date().getFullYear();

interface ContactInfo {
  mobile: string;
  phone: string;
  fax: string;
  email: string;
  address: string;
  facebook?: string;
  linkedin?: string;
}

const ContactInfoSection = ({ contact }: { contact: ContactInfo }) => (
  <div className="m-10 mb-0">
    <h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
      יצירת קשר
    </h4>
    <ul className="flex flex-col max-md:items-start">
      <li className="flex items-center justify-start m-0">
        <Link
          title="נייד"
          href={`tel:${contact.mobile}`}
          className="flex items-center justify-start hover:underline">
          <OcticonDeviceMobile className="w-3 relative right-[1px]" />
          <span className="mr-6">נייד: {contact.mobile}</span>
        </Link>
      </li>
      <li className="flex items-center justify-start m-0">
        <IcBaselinePhoneEnabled className="w-4" />
        <Link
          title="טלפון"
          href={`tel:${contact.phone}`}
          className="flex items-center justify-start hover:underline">
          <span className="mr-5">טל: {contact.phone}</span>
        </Link>
      </li>
      <li className="flex items-center justify-start m-0">
        <IcOutlineLocalPrintshop className="w-4" />
        <span className="mr-5">פקס: {contact.fax}</span>
      </li>
      <li className="flex items-center justify-start m-0">
        <Link
          title="דואר אלקטרוני"
          href={`mailto:${contact.email}`}
          className="flex items-center justify-start hover:underline">
          <MaterialSymbolsMailOutline className="w-4" />
          <span className="mr-5">{contact.email}</span>
        </Link>
      </li>
      <li className="flex items-center justify-start m-0">
        <Fa6SolidAddressCard className="w-4" />
        <span className="mr-5">{contact.address}</span>
      </li>
    </ul>
    <div className="flex gap-2 items-baseline mt-5">
      {contact.facebook && (
        <Link
          className="hover:grayscale hover:sepia"
          href={contact.facebook || ''}
          target="_blank"
          rel="noindex nofollow"
          title="Facebook">
          <UiwFacebook className="w-[35px]" />
        </Link>
      )}

      {contact.linkedin && (
        <Link
          className="hover:grayscale hover:sepia"
          href={contact.linkedin || ''}
          target="_blank"
          rel="noindex nofollow"
          title="Linkedin">
          <BiLinkedin className="w-[35px]" />
        </Link>
      )}
    </div>
  </div>
);

const SiteNavigationSection = ({ routes }: { routes: Route[] }) => (
  <div className="m-10 flex flex-col items-start footer:items-center">
    <h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start text-center">
      ניווט באתר
    </h4>
    {routes.map((route: Route) => (
      <Link
        key={route.slug.current}
        href={route.slug.current || ''}
        className="flex items-center justify-start hover:font-medium text-center"
        title={route.name}>
        {route.name}
      </Link>
    ))}
  </div>
);

const MapSection = ({ address }: { address: string }) => (
  <div className="min-[400px]:m-10 flex flex-col items-start md:items-center">
    <h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
      מפה
    </h4>
    <div className="h-full w-full">
      <GoogleMapsEmbed address={address} />
    </div>
  </div>
);

function Footer({
  routes,
  contact,
}: {
  routes: Route[];
  contact: ContactInfo;
}) {
  return (
    <footer className="bg-stone-300 dark:bg-stone-800 w-full min-h-44 bottom-0 text-gray-800 dark:text-gray-300">
      <div className="flex flex-col footer:flex-row justify-around text-lg">
        <ContactInfoSection contact={contact} />
        <SiteNavigationSection routes={routes} />
        <MapSection address={contact?.address} />
      </div>

      <div className="text-center p-1">
        <p className='mb-0'>&copy; כל הזכויות שמורות {year} All rights reserved &copy;</p>
        <p className='p-0 m-0'>
          Designed and developed by{' '}
          <Link
            className="hover:font-bold"
            href="https://www.linkedin.com/in/barel-shraga/"
            target="_blank"
            rel="noindex nofollow"
            title="barel31 Linkedin">
            barel31
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
