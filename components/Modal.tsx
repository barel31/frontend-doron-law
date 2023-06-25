'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

function Modal({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		const el = document.getElementById('dialogModal') as HTMLDialogElement;
		if (el) {
			el.showModal();
		}
	}, []);

	useEffect(() => {
		const clickListener = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target as Node)) {
				router.back();
			}
		};

		addEventListener('click', clickListener);
		return () => removeEventListener('click', clickListener);
	}, [ref, router]);

	return (
		<dialog
			id="dialogModal"
			className="absolute top-0 mt-32 m-auto p-2 md:p-10 w-[75vw] md:w-[50vw] dark:bg-slate-500 rounded-md text-center transition-all shadow-md border-2"
		>
			<div ref={ref}>{children}</div>
		</dialog>
	);
}

export default Modal;
