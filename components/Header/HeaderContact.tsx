import { ElPhoneAlt } from '@/utils/icons';
import Theme from './Theme';
// import { BiLinkedin, ElPhoneAlt, BiFacebook } from '@/utils/icons';
// import Link from 'next/link';

interface Contact {
  facebook: string;
  linkedin: string;
  phone: string;
}

interface HeaderContactProps {
  contact: Contact;
  isMobile: boolean;
  show: boolean;
}

const HeaderContact = ({ contact, isMobile, show }: HeaderContactProps) => {
  return (
    <div
      className={`header-contacts flex flex-col md:flex-row gap-2 justify-around ${
        (isMobile && show) || !isMobile ? 'visible' : 'invisible'
      }`}>
      <a
        href={`tel:${contact.phone}`}
        target="_blank"
        rel="noindex nofollow"
        className={`flex flex-row items-center justify-around whitespace-nowrap hover:text-white dark:hover:text-zinc-900 ${
          (isMobile && show) || !isMobile ? 'visible' : 'invisible'
        }`}
        title="טלפון">
        <ElPhoneAlt className="w-[45px]" />
        <span className="font-bold m-1 max-2xl:hidden max-sm:visible">
          {contact.phone}
        </span>
      </a>
      <Theme show={show} isMobile={isMobile} />
    </div>
  );
};

export default HeaderContact;
