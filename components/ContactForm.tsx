'use client';

import { ContactFormAction } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function ContactForm({
	contact,
	message = false,
}: {
	contact: ContactInfo;
	message?: boolean;
}) {
	const router = useRouter();

	const [disableBtn, setDisableBtn] = useState(false);

	const HandleForm = async (e: FormData) => {
		setDisableBtn(() => true);

		const res = await ContactFormAction(e);

		// server-action don't work in including generateStaticParams in page (experimental)
		// optional chaining required.
		if (res?.success) {
			router.push('thank-you');
		} else {
			console.error('Unable to send Mail.');
			console.log(res.info);

			router.push('error');
			setDisableBtn(() => false);
		}
	};

	return (
		<div
			className={`m-auto flex flex-col ${
				!message && 'bg-slate-400 dark:bg-slate-dark:600 lg:flex-row'
			}  placeholder:text-slate-950text-lg 5ustify-around w-full h-full`}
		>
			{!message && (
				<a
					href={`tel:${contact?.mobile}`}
					className="w-1/2 m-auto text-gray-950 dark:text-lime-400 font-bold text-xl"
					title="צור קשר"
				>
					לייעוץ ראשוני התקשרו{' '}
					<span className="text-cyan-800 dark:text-gray-200 font-bold">
						{contact?.mobile}
					</span>{' '}
					או השאירו פרטים:
				</a>
			)}

			<form
				action={HandleForm}
				className={`m-auto flex flex-col ${
					message ? 'w-full' : 'md:flex-row max-md:w-full'
				} gap-2 items-baseline p-2`}
			>
				<input
					type="text"
					placeholder="* שם:"
					name="name"
					className="focus:outline-none bg-slate-400 dark:placeholder:text-white placeholder:text-slate-950 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				<input
					type="tel"
					placeholder="* טלפון:"
					name="tel"
					className="focus:outline-none bg-slate-400 dark:placeholder:text-white placeholder:text-slate-950 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				<input
					type="email"
					placeholder="* אימייל:"
					name="email"
					className="focus:outline-none bg-slate-400 dark:placeholder:text-white placeholder:text-slate-950 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				{message && (
					<textarea
						placeholder="הודעה:"
						name="message"
						className="focus:outline-none bg-slate-400 dark:placeholder:text-white placeholder:text-slate-950 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				)}
				<button
					disabled={disableBtn}
					type="submit"
					className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 disabled:bg-green-200 hover:disabled:bg-green-200 disabled:cursor-not-allowed focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${
						message ? 'w-full' : 'max-md:w-full'
					}`}
				>
					שלח
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
