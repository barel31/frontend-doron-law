import { urlFor } from '@/lib/client';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, content, image, link }: CardProps) => {
  const contentThreshold = 100;
  const isContentLong = content.length > contentThreshold;

  const url = image && urlFor(image.asset).dpr(2).url();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col transform transition duration-300 hover:scale-105">
      {image && url ? (
        <Link href={link || ''} target={link ? '_blank' : undefined}>
          <Image
            className="rounded-t-lg w-full object-cover transition duration-300 ease-in-out hover:brightness-90"
            src={url}
            alt={title}
            width={500}
            height={600}
          />
        </Link>
      ) : (
        image && (
          <Image
            className="rounded-t-lg w-full object-cover transition duration-300 ease-in-out hover:brightness-90"
            src={url}
            alt={title}
            width={500}
            height={600}
          />
        )
      )}
      <div className="p-6 flex-grow animate-fadeIn">
        {link ? (
          <Link href={link} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
        ) : (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        )}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
      {isContentLong && link && (
        <div className="p-6 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform transition duration-300 hover:scale-110">
            קרא עוד
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
