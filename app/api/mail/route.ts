import { NextRequest, NextResponse } from 'next/server';
import sendMail from '@/service/mail';

export async function POST(req: NextRequest) {
	const data: EmailObj = await req.json();
	const result = await sendMail(data);

	if (result?.success) {
		return NextResponse.json(result.info);
	} else {
		return NextResponse.json(result.err, { status: 500 });
	}
}
