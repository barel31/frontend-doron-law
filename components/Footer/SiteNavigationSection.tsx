'use client';

import Link from 'next/link';

const SiteNavigationSection = ({ routes }: { routes: Route[] }) => (
  <div className="w-full md:w-1/3 space-y-6 text-center">
    <h4 className="text-xl font-semibold underline underline-offset-8 decoration-lime-500 mb-4">
      ניווט באתר
    </h4>
    <ul className="space-y-4 text-right">
      {routes.map(route => (
        <DropdownItem key={route._id} route={route} />
      ))}
    </ul>
  </div>
);

const DropdownItem = ({ route }: { route: Route }) => {
  const { children, slug, name } = route;
  const hasChildren = children && children.length > 0;

  return (
    <li className="flex flex-col items-start">
      {hasChildren ? (
        <span className="font-semibold text-gray-600">{name}:</span>
      ) : (
        <Link
          href={slug.current}
          className="hover:text-lime-600 transition duration-300"
          title={name}>
          {name}
        </Link>
      )}
      {hasChildren && (
        <ul className="ml-12 mt-2 space-y-2">
          {children.map(childRoute => (
            <li key={childRoute._id}>
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
