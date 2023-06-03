import { NextRequest, NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

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

	const message = {
		from: data.email,
		to: process.env.GMAIL_EMAIL_ADDRESS,
		subject: 'הודעה חדשה באתר דורון חדד',
		text: `שם: ${data.name}\yטלפון: ${data.tel}\nאימייל: ${data.email}`,
		html: `<div style="background: linear-gradient(0deg, rgba(78, 78, 78, 1) 0%, rgba(32, 32, 32, 1) 100%);
		text-align:center;color:#cec6c6;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;"
		dir="rtl"><h1>הודעה חדשה באתר</h1><h2>שם: ${data.name}</h2><h2>טלפון: ${data.tel}</h2><h2>אימייל: ${data.email}</h2></div>`,
	};

	await transporter.sendMail(message, (err: any, info: any) => {
		if (err) {
			console.log('error accurred');
			console.log({ err });

			return new NextResponse(`Connection refused at ${err.address}`, {
				status: 404,
			});
		} else {
			console.log('sent email successfully');

			return new NextResponse(`Message delivered to ${info.accepted}`, {
				status: 250,
			});
		}
	});
}
