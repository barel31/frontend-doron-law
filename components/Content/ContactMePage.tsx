import ContactForm from '../ContactForm';
import GoogleMapsEmbed from '../GoogleMapsEmbed';
import {
  Fa6SolidAddressCard,
  IcBaselinePhoneEnabled,
  MaterialSymbolsMailOutline,
  OcticonDeviceMobile,
} from '@/lib/icons';

function ContactMePage({ contact }: { contact: ContactInfo }) {
  return (
    <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 relative top-10">
      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-white/30 to-white/70 dark:from-slate-800/30 dark:to-slate-800/70 backdrop-blur-lg rounded-xl shadow-lg pt-8 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          יצירת קשר
        </h1>
        <ContactForm contact={contact!} message={true} homePage={false} />
      </div>

      {/* Contact Details Section */}
      <div className="bg-gradient-to-r from-white/30 to-white/70 dark:from-slate-800/30 dark:to-slate-800/70 backdrop-blur-lg rounded-xl shadow-lg pt-8 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          פרטי יצירת קשר
        </h1>
        <div className="divide-y divide-slate-200 dark:divide-slate-700 space-y-4">
          {[
            {
              href: null,
              icon: <Fa6SolidAddressCard className="w-10 h-10" />,
              text: contact?.address,
            },
            {
              href: `tel:${contact?.mobile}`,
              icon: <OcticonDeviceMobile className="w-10 h-10" />,
              text: contact?.mobile,
              title: 'טלפון נייד',
            },
            {
              href: `mailto:${contact?.email}`,
              icon: <MaterialSymbolsMailOutline className="w-10 h-10" />,
              text: contact?.email,
              title: 'אימייל',
            },
            {
              href: `tel:${contact?.phone}`,
              icon: <IcBaselinePhoneEnabled className="w-10 h-10" />,
              text: contact?.phone,
              title: 'טלפון',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href || undefined}
              title={item.title || undefined}
              className="flex items-center p-4 gap-4 transition-transform duration-200 transform hover:-translate-y-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg group">
              <div className="w-12 h-12 flex items-center justify-center text-slate-600 dark:text-slate-300 mr-6 group-hover:text-blue-500 transition-colors duration-200">
                {item.icon}
              </div>
              <span className="text-xl text-slate-800 dark:text-slate-100 text-right">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="bg-gradient-to-r from-white/30 to-white/70 dark:from-slate-800/30 dark:to-slate-800/70 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 p-8">
          מיקום על המפה
        </h1>
        <GoogleMapsEmbed
          address={contact?.address}
          classNames="h-[400px] w-full"
        />
      </div>
    </div>
  );
}

export default ContactMePage;
