import nodemailer, { SendMailOptions } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface sendMailRes {
	success: boolean;
	info?: SMTPTransport.SentMessageInfo;
	err?: Error;
}

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_EMAIL_ADDRESS,
		pass: process.env.GMAIL_APP_PASSWORD,
	},
});

export default async function sendMail(data: EmailObj): Promise<sendMailRes> {
	const message: SendMailOptions = {
		from: data.email,
		to: process.env.GMAIL_EMAIL_ADDRESS,
		subject: 'הודעה חדשה באתר דורון חדד',
		text: `שם: ${data.name}\yטלפון: ${data.tel}\nאימייל: ${data.email}${
			data.message ? `\nהודעה: ${data.message}` : ''
		}`,
		html: `<div style="background: linear-gradient(0deg, rgba(78, 78, 78, 1) 0%, rgba(32, 32, 32, 1) 100%);
		text-align:center;color:#cec6c6;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;"
		dir="rtl"><h1>הודעה חדשה באתר</h1><h2>שם: ${data.name}</h2><h2>טלפון: ${
			data.tel
		}</h2><h2>אימייל: ${data.email}</h2>${
			data.message ? `<h2>הודעה: ${data.message}</h2>` : ''
		}</div>`,
	};

	const promise: Promise<SMTPTransport.SentMessageInfo> = new Promise(
		(resolve, reject) => {
			transporter.sendMail(message, (err, info) => {
				if (err) reject(err);
				else resolve(info);
			});
		}
	);

	const result = await promise.then(
		(info: SMTPTransport.SentMessageInfo) => ({ success: true, info }),
		(err: Error) => {
			console.error(err);
			return { success: false, err };
		}
	);
	
	return result;

	// transporter.sendMail(message, (err, info) => {
	// 	if (err) {
	// 		console.log('error accurred');
	// 		console.log({ err });

	// 		return { success: false, err };
	// 	} else {
	// 		console.log('sent email successfully');

	// 		return { success: true, info };
	// 	}
	// });
}
