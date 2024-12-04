import { NextRequest, NextResponse } from 'next/server';
import sendMail from '@/service/sendMail';

export async function POST(req: NextRequest) {
	const data: ContactMeData = await req.json();
	const result = await sendMail(data);

	if (result?.success) {
		return NextResponse.json(result);
	}
	
	return NextResponse.json(result, { status: 500 });
}
