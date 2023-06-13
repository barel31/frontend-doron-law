import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="m-10 mt-20 md:mt-32">
			<h1 className="m-2 text-2xl">העמוד לא נמצא :(</h1>
			<Link
				className="m-2 bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 border border-neutral-700 rounded"
				href={'/'}
			>
				חזור לדף הבית
			</Link>
		</div>
	);
}
