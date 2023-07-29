'use server';

import sendMail from '@/service/sendMail';

export const ContactFormAction = async (e: FormData): Promise<MailResponse> => {
	const formData: MailData = {
		name: e.get('name')!.toString(),
		tel: e.get('tel')!.toString(),
		email: e.get('email')!.toString(),
		message: e.get('message')?.toString(),
	};

	return await sendMail(formData);
};
