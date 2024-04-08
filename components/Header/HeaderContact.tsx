import React from 'react';
import { BiLinkedin, ElPhoneAlt, BiFacebook } from '@/utils/icons';
import Link from 'next/link';
import Theme from './Theme';

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
      className={`header-contacts flex flex-col md:flex-row gap-2 justify-around md:min-w-[20%] ${
        (isMobile && show) || !isMobile ? 'visible' : 'invisible'
      }`}>
      {/* <Link
        href={contact.facebook || ''}
        target="_blank"
        rel="noindex nofollow"
        title="Facebook"
        className="hover:text-blue-800 !duration-0">
        <BiFacebook className="w-[45px] rounded-full" />
      </Link>
      <Link
        href={contact.linkedin || ''}
        target="_blank"
        rel="noindex nofollow"
        title="Linkedin"
        className="hover:text-blue-800">
        <BiLinkedin className="w-[45px] rounded-full" />
      </Link> */}
      <a
        href={`tel:${contact.phone}`}
        target="_blank"
        rel="noindex nofollow"
        className="flex flex-row items-center justify-around whitespace-nowrap hover:text-white dark:hover:text-zinc-900"
        title="טלפון">
        <ElPhoneAlt className="w-[45px]" />
        <span className="font-bold m-1 max-lg:hidden">{contact.phone}</span>
      </a>
      <Theme show={show} isMobile={isMobile} />
    </div>
  );
};

export default HeaderContact;
