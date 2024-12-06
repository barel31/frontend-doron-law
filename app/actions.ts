'use server';

import sendWhatsAppMessage from '@/service/sendWhatsApp';
import sendMail from '@/service/sendMail';

export const ContactFormAction = async (
  e: FormData
): Promise<WhatsAppResponse | MailResponse> => {
  const formData: ContactMeData = {
    name: e.get('name')!.toString(),
    tel: e.get('tel')!.toString(),
    email: e.get('email')!.toString(),
    message: e.get('message')?.toString(),
  };

  const mailResponse = await sendMail(formData);
  const WhatsAppResponse = await sendWhatsAppMessage(formData);

  if (mailResponse.err) {
    return mailResponse;
  }

  return WhatsAppResponse;
};
