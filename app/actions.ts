'use server';

import sendWhatsAppMessage from '@/service/sendWhatsApp';
// import sendMail from '@/service/sendMail';

export const ContactFormAction = async (e: FormData): Promise<WhatsAppResponse> => {
	const formData: ContactMeData = {
		name: e.get('name')!.toString(),
		tel: e.get('tel')!.toString(),
		email: e.get('email')!.toString(),
		message: e.get('message')?.toString(),
	};

	// return await sendMail(formData);
	return await sendWhatsAppMessage(formData)
};
