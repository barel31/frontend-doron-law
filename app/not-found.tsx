import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center m-10 mt-28 md:mt-32">
      <h1 className="m-4 text-4xl">העמוד לא נמצא :(</h1>
      <Link
        className="m-4 bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 border border-neutral-700 rounded shadow-md"
        href={'/'}
        title="בית">
        חזור לדף הבית
      </Link>
    </div>
  );
}
