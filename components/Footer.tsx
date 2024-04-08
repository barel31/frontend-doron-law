import {
  BiLinkedin,
  Fa6SolidAddressCard,
  IcBaselinePhoneEnabled,
  IcOutlineLocalPrintshop,
  MaterialSymbolsMailOutline,
  OcticonDeviceMobile,
  UiwFacebook,
} from '@/utils/icons';
import Link from 'next/link';
import GoogleMapsEmbed from './GoogleMapsEmbed';

const year = new Date().getFullYear();

function Footer({
  routes,
  contact,
}: {
  routes: Route[];
  contact: ContactInfo;
}) {
  return (
    <footer className="bg-stone-300 dark:bg-stone-800 w-full min-h-44 bottom-0 text-gray-800 dark:text-gray-300">
      <div className="flex flex-col md:flex-row justify-around text-lg">
        <div className="m-10">
          <ul className="flex flex-col max-md:items-start">
            <h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
              יצירת קשר
            </h4>
            <li className="flex items-center justify-start">
              <Link
                href={`tel:${contact.mobile}`}
                className="flex items-center justify-start hover:underline">
                <OcticonDeviceMobile className="w-3 relative right-[1px]" />
                <span className="mr-6">נייד: {contact.mobile}</span>
              </Link>
            </li>
            <li className="flex items-center justify-start">
              <IcBaselinePhoneEnabled className="w-4" />
              <Link
                href={`tel:${contact.phone}`}
                className="flex items-center justify-start hover:underline">
                <span className="mr-5">טל: {contact.phone}</span>
              </Link>
            </li>
            <li className="flex items-center justify-start">
              <IcOutlineLocalPrintshop className="w-4" />
              <span className="mr-5">פקס: {contact.fax}</span>
            </li>
            <li className="flex items-center justify-start">
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center justify-start hover:underline">
                <MaterialSymbolsMailOutline className="w-4" />
                <span className="mr-5">{contact.email}</span>
              </Link>
            </li>
            <li className="flex items-center justify-start">
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

        <div className="m-10 flex flex-col items-start md:items-center">
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

        <div className="min-[400px]:m-10 flex flex-col items-start md:items-center">
          <h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
            מפה
          </h4>
          <div>
            <GoogleMapsEmbed
              address={contact?.address}
              // width={350}
              // height={250}
              // mobileDynamicRatio={0.5}
              // tabletDynamicRatio={0.4}
              // dynamicRatio={0.7}
              // even
            />
          </div>
        </div>
      </div>

      <div className="text-center p-10">
        <p>&copy; כל הזכויות שמורות {year} All rights reserved &copy;</p>
        <p>
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
