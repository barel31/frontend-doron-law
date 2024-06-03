import { ElPhoneAlt } from '@/lib/icons';
import Theme from './Theme';
import { cn } from '@/lib/utils';

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
      className={cn(
        'header-contacts flex flex-col md:flex-row gap-2 justify-around',
        {
          invisible: !((isMobile && show) || !isMobile),
        }
      )}>
      <a
        href={`tel:${contact.phone}`}
        target="_blank"
        rel="noindex nofollow"
        className={cn(
          'flex flex-row items-center justify-around whitespace-nowrap hover:text-white dark:hover:text-zinc-900',
          { visible: (isMobile && show) || !isMobile }
        )}
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
