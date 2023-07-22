import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_EMAIL_ADDRESS,
		pass: process.env.GMAIL_APP_PASSWORD,
	},
});

export async function POST(req: NextRequest) {
	const data: EmailObj = await req.json();

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

	const myPromise: Promise<SMTPTransport.SentMessageInfo> = new Promise(
		(resolve, reject) => {
			transporter.sendMail(message, (err, info) => {
				if (err) {
					console.log('rejected. api/mail/route line 37');
					reject(err);
				} else {
					console.log('resolved. api/mail/route line 40');
					resolve(info);
				}
			});
		}
	);

	await myPromise.then(
		(value: SMTPTransport.SentMessageInfo) => {
			console.log('sent email successfully');

			// return new NextResponse(`Message delivered to ${value.accepted}`, {
			// 	status: 250,
			// });
			return NextResponse.json({
				message: `Message delivered to ${value.accepted}`,
				status: 250,
			});
		},
		(err: Error) => {
			console.log('error accurred');
			console.log(err);

			// return new NextResponse(`Connection refused at ${err.message}`, {
			// 	status: 404,
			// });
			return NextResponse.json({
				message: `Connection refused at ${err.message}`,
				status: 444,
			});
		}
	);
	// const info = await transporter.sendMail(message, (err, info) => {
	// 	if (err) {
	// 		console.log('error accurred');
	// 		console.log({ err });

	// 		return new NextResponse(`Connection refused at ${err.message}`, {
	// 			status: 404,
	// 		});
	// 	} else {
	// 		console.log('sent email successfully');

	// 		return new NextResponse(`Message delivered to ${info.accepted}`, {
	// 			status: 250,
	// 		});
	// 	}
	// });
}
