import Link from 'next/link';
import {
  OcticonDeviceMobile,
  IcBaselinePhoneEnabled,
  IcOutlineLocalPrintshop,
  MaterialSymbolsMailOutline,
  Fa6SolidAddressCard,
  UiwFacebook,
  BiLinkedin,
} from '@/lib/icons';

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
  <div className="w-full md:w-1/3 space-y-6 text-center">
    <h4 className="text-xl font-semibold underline underline-offset-8 decoration-lime-500 mb-4">יצירת קשר</h4>
    <ul className="space-y-4">
      {contact.mobile && (
        <li className="flex items-center justify-start">
          <OcticonDeviceMobile className="w-6 h-6 text-lime-600 ml-3" />
          <Link href={`tel:${contact.mobile}`} className="hover:text-lime-600 transition duration-300" title="נייד">
            נייד: {contact.mobile}
          </Link>
        </li>
      )}
      {contact.phone && (
        <li className="flex items-center justify-start">
          <IcBaselinePhoneEnabled className="w-6 h-6 text-lime-600 ml-3" />
          <Link href={`tel:${contact.phone}`} className="hover:text-lime-600 transition duration-300" title="טלפון">
            טלפון: {contact.phone}
          </Link>
        </li>
      )}
      {contact.fax && (
        <li className="flex items-center justify-start">
          <IcOutlineLocalPrintshop className="w-6 h-6 text-lime-600 ml-3" />
          <span className='text-right'>פקס: {contact.fax}</span>
        </li>
      )}
      {contact.email && (
        <li className="flex items-center justify-start">
          <MaterialSymbolsMailOutline className="w-6 h-6 text-lime-600 ml-3" />
          <Link href={`mailto:${contact.email}`} className="hover:text-lime-600 transition duration-300" title="דואר אלקטרוני">
            {contact.email}
          </Link>
        </li>
      )}
      {contact.address && (
        <li className="flex items-center justify-start">
          <Fa6SolidAddressCard className="w-6 h-6 text-lime-600 ml-3" />
          <span className='text-right'>{contact.address}</span>
        </li>
      )}
    </ul>
    <div className="flex gap-4 items-center justify-start mt-6">
      {contact.facebook && (
        <Link href={contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300" title="Facebook">
          <UiwFacebook className="w-8 h-8 text-lime-600" />
        </Link>
      )}
      {contact.linkedin && (
        <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300" title="Linkedin">
          <BiLinkedin className="w-8 h-8 text-lime-600" />
        </Link>
      )}
    </div>
  </div>
);

export default ContactInfoSection;
