'use client';

import { ContactFormAction } from '@/app/actions';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function ContactForm({
  contact,
  message = false,
  homePage = true,
}: {
  contact: ContactInfo;
  message?: boolean;
  homePage?: boolean;
}) {
  const router = useRouter();
  const [disableBtn, setDisableBtn] = useState(false);

  const HandleForm = async (e: FormData) => {
    // e.preventDefault();
    setDisableBtn(true);

    const res = await ContactFormAction(e);

    if (res?.success) {
      router.push('thank-you');
    } else {
      console.error('Unable to send Mail.');
      console.log(res.info);
      router.push('error');
      setDisableBtn(false);
    }
  };

  return (
    <div
      className={cn('w-full flex justify-center', {
        'bg-gradient-to-br from-slate-600/40 to-slate-700/80 dark:from-slate-800/40 dark:to-slate-800/70 backdrop-blur-md':
          homePage,
      })}>
      <div
        className={cn(
          'flex flex-col lg:flex-row gap-2 h-full p-3 w-full max-w-[1500px] items-start justify-between',
          { 'items-center': !message }
        )}>
        {/* Conditional Text Section */}
        {!message && (
          <div className="w-full lg:w-1/2">
            <a
              href={`tel:${contact?.mobile}`}
              className="block text-center lg:text-right text-gray-800 dark:text-gray-300 font-semibold text-2xl"
              title="צור קשר">
              לייעוץ ראשוני התקשרו{' '}
              <span className="text-cyan-800 dark:text-cyan-300 font-bold text-nowrap">
                {contact?.mobile}
              </span>{' '}
              או השאירו פרטים:
            </a>
          </div>
        )}

        {/* Form Section */}
        <form
          action={HandleForm}
          className={cn('flex max-md:flex-col gap-2 w-full', {
            '!flex-col': !homePage,
          })}>
          <input
            autoComplete="name"
            type="text"
            placeholder="* שם:"
            name="name"
            className="focus:outline-none bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 placeholder:text-gray-600 dark:placeholder:text-gray-400 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 block w-full p-4 transition-shadow duration-300"
            required
          />
          <input
            autoComplete="tel"
            type="text"
            placeholder="* טלפון:"
            name="tel"
            className="focus:outline-none bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 placeholder:text-gray-600 dark:placeholder:text-gray-400 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 block w-full p-4 transition-shadow duration-300"
            required
          />
          <input
            autoComplete="email"
            type="email"
            placeholder="* אימייל:"
            name="email"
            className="focus:outline-none bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 placeholder:text-gray-600 dark:placeholder:text-gray-400 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 block w-full p-4 transition-shadow duration-300"
            required
          />
          {message && (
            <textarea
              placeholder="הודעה:"
              name="message"
              className="focus:outline-none bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 placeholder:text-gray-600 dark:placeholder:text-gray-400 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 block w-full p-4 transition-shadow duration-300 h-32"
            />
          )}
          <button
            disabled={disableBtn}
            type="submit"
            className={cn(
              'text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 disabled:opacity-50 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed dark:focus:ring-green-800',
              { 'w-full': message, 'max-md:w-full': !message }
            )}>
            {disableBtn ? 'נשלח' : 'שליחה'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
