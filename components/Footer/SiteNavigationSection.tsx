'use client';

import Link from 'next/link';

const SiteNavigationSection = ({ routes }: { routes: Route[] }) => (
  <div className="w-full md:w-1/3 space-y-6 text-center">
    <h4 className="text-xl font-semibold underline underline-offset-8 decoration-lime-500 mb-4">
      ניווט באתר
    </h4>
    <ul className="space-y-4 text-right">
      {routes.map(route => (
        <DropdownItem key={route._id || route.slug.current} route={route} />
      ))}
    </ul>
  </div>
);

const DropdownItem = ({ route }: { route: Route }) => {
  const hasChildren = !!route.children;

  return (
    <li className="flex flex-col items-start">
      <Link
        href={hasChildren ? '#' : route.slug.current}
        className={` ${
          hasChildren
            ? 'font-semibold text-gray-600 pointer-events-none'
            : 'hover:text-lime-600 transition duration-300'
        }`}
        onClick={e => {
          if (hasChildren) e.preventDefault();
        }}
        title={route.name}>
        {`${route.name}${hasChildren ? ':' : ''}`}
      </Link>
      {hasChildren && (
        <ul className="ml-12 mt-2 space-y-2">
          {route?.children?.map(childRoute => (
            <li key={childRoute._id || childRoute.slug.current}>
              <Link
                href={childRoute.slug.current}
                className="hover:text-lime-600 transition duration-300"
                title={childRoute.name}>
                {childRoute.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SiteNavigationSection;
