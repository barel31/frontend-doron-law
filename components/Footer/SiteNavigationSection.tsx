import Link from 'next/link';

interface Route {
  slug: { current: string };
  name: string;
}

const SiteNavigationSection = ({ routes }: { routes: Route[] }) => (
  <div className="w-full md:w-1/3 text-center md:text-left space-y-5">
    <h4 className="text-xl font-semibold underline underline-offset-8 decoration-lime-500 mb-4 text-center">ניווט באתר</h4>
    <ul className="space-y-3 px-5 xl:px-28">
      {routes.map((route) => (
        <li key={route.slug.current} className='text-right'>
          <Link href={route.slug.current} className="hover:text-lime-600 transition duration-300" title={route.name}>
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SiteNavigationSection;
