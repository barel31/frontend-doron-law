'use server';

import sendMail from "@/service/mail";

export const sendContactForm = async (e: FormData): Promise<MailResponse> => {
	const formData: MailData = {
		name: e.get('name')!.toString(),
		tel: e.get('tel')!.toString(),
		email: e.get('email')!.toString(),
		message: e.get('message')?.toString(),
	};

	// const res = await fetch('/api/mail', {
	// 	method: 'POST',
	// 	body: JSON.stringify(formData),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	const res = await sendMail(formData);

	return res;
};
