import { NextRequest, NextResponse } from 'next/server';
import sendMail from '@/service/sendMail';

export async function POST(req: NextRequest) {
	const data: MailData = await req.json();
	const result = await sendMail(data);

	if (result?.success) {
		return NextResponse.json(result.info);
	}
	
	return NextResponse.json(result.err, { status: 500 });
}
