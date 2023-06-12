'use client';

import Link from 'next/link';
// todo added modal message for sending an email
// todo added message input
function ContactForm({ contactInfo }: { contactInfo: ContactInfo }) {
	const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target = e.currentTarget as HTMLFormElement;

		const formData: { [key: string]: string } = {};
		Array.from(target.elements).forEach((field: Element) => {
			const formField = field as HTMLFormElement;
			if (!formField.name) return;
			formData[formField.name] = formField.value;
		});

		const res = await fetch('/api/mail', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(res);
		if (!res.ok) console.log('res not ok');
	};

	return (
		<div className="m-auto bg-slate-600 w-[100%] flex flex-col lg:flex-row text-lg justify-between">
			<Link
				href={`tel:${contactInfo.mobile}`}
				className="w-1/2 m-auto text-lime-300 flex-1 flex-shrink"
				target="_blank"
				rel="noindex nofollow"
			>
				לייעוץ ראשוני התקשרו{' '}
				<span className="text-white">{contactInfo.mobile}</span> או
				השאירו פרטים:
			</Link>

			<form
				action="#"
				onSubmit={handleOnSubmit}
				className="m-auto flex flex-col md:flex-row gap-2 items-baseline max-md:w-full p-2 flex-1"
			>
				<input
					type="text"
					placeholder="* שם:"
					name="name"
					className="focus:outline-none bg-slate-600 placeholder:text-white border-2 max-md:w-full border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				<input
					type="tel"
					placeholder="* טלפון:"
					name="tel"
					className="focus:outline-none bg-slate-600 placeholder:text-white border-2 max-md:w-full border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				<input
					type="email"
					placeholder="* אימייל:"
					name="email"
					className="focus:outline-none bg-slate-600 placeholder:text-white border-2 max-md:w-full border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				<button
					type="submit"
					className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 max-md:w-full"
				>
					שלח
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
