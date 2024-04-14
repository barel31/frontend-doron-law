import ContactForm from '../ContactForm';
import GoogleMapsEmbed from '../GoogleMapsEmbed';
import {
  Fa6SolidAddressCard,
  IcBaselinePhoneEnabled,
  MaterialSymbolsMailOutline,
  OcticonDeviceMobile,
} from '@/utils/icons';

function ContactMePage({ contact }: { contact: ContactInfo }) {
  return (
    <div className="m-auto flex flex-col lg:flex-row justify-between gap-5 xl:w-3/4 lg:m-5 xl:m-auto relative top-20">
      <div className="lg:w-1/3">
        <h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
          תופס יצירת קשר
        </h1>
        <div className="rounded-md">
          <ContactForm contact={contact!} message={true} />
        </div>
      </div>
      <div className="lg:w-1/3">
        <h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
          פרטי יצירת קשר
        </h1>
        <div className="bg-slate-300">
          <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
            <div className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-5 flex flex-col items-center justify-center min-w-54 min-h-52">
              <Fa6SolidAddressCard className="w-12" />
              <span>{contact?.address}</span>
            </div>
            <a
              href={`tel:${contact?.mobile}`}
              className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-5 flex flex-col items-center justify-center min-w-54 min-h-52"
              title="טלפון נייד">
              <OcticonDeviceMobile className="w-10" />
              <span>{contact?.mobile}</span>
            </a>
            <a
              href={`mailto:${contact?.email}`}
              className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-5 flex flex-col items-center justify-center min-w-54 min-h-52"
              title="אימייל">
              <MaterialSymbolsMailOutline className="w-12" />
              <span>{contact?.email}</span>
            </a>
            <a
              href={`tel:${contact?.phone}`}
              className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-5 flex flex-col items-center justify-center min-w-54 min-h-52"
              title="טלפון">
              <IcBaselinePhoneEnabled className="w-12" />
              <span>{contact?.phone}</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
          מפה
        </h1>
        <div>
          <GoogleMapsEmbed address={contact?.address} />
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
