'use client';

import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';

function Modal({ children }: { children: React.ReactNode }) {
	// const pathname = usePathname();
	// const open = pathname.includes('/thank-you');

	useEffect(() => {
		const el = document.getElementById('dialogModal') as HTMLDialogElement;
		if (el) {
			// open modal via showModal method because only in this way backdrop filter applied.
			el.showModal();
		}
	}, []);

	return (
		<dialog
			id="dialogModal"
			// open={open}
			// open
			className="absolute top-0 mt-32 m-auto p-2 md:p-10 w-[75vw] md:w-[50vw] dark:bg-slate-500 rounded-md text-center transition-all"
		>
			{children}
		</dialog>
	);
}

export default Modal;
