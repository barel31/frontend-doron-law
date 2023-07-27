'use client';

import { useRouter } from 'next/navigation';
import ModalUi from '@/components/Modal';
import { IconErrorPajamas } from '@/utils/icons';

function Modal() {
	const router = useRouter();

	return (
		<ModalUi>
			<IconErrorPajamas className="m-auto mb-4 w-1/4" />
			<h1 className="text-3xl/10">תקלה התרחשה בעט שליחת ההודעה</h1>

			<h2 className="font-bold text-lime-500 text-lg m-2">
				מצטערים, אבל משהו קרה :( אפשר לנסות שוב.
			</h2>

			<button
				type="button"
				className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 border border-neutral-700 rounded m-4"
				onClick={() => router.back()}
			>
				סגור
			</button>
		</ModalUi>
	);
}

export default Modal;
