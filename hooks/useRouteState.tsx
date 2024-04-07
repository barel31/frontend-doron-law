import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useState } from 'react';

const isRouteActive = (params: Params, route: Route) => {
  return (
    params.slug === route.slug.current ||
    (!params.slug && route.slug.current === '/') ||
    (route.children &&
      route.children.some((child) => params.slug === child.slug.current))
  );
};

const generateClassNames = (isActive: boolean, isChild: boolean) => {
  return [
    'flex text-slate-800 dark:text-slate-200 text-sm font-bold transition-colors px-2 py-1 rounded-md w-max',
    isChild ? 'm-2 text-center self-center' : '',
    isActive
      ? 'bg-slate-300 dark:bg-slate-500 shadow-md overline scale-105'
      : 'hover:overline hover:scale-105',
  ];
};

const useRouteState = (params: Params, route: Route, isChild = false) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isActive = isRouteActive(params, route) || false;
  const classes = generateClassNames(isActive, isChild);

  return { classes, dropdownOpen, setDropdownOpen };
};

export default useRouteState;
