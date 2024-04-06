import Link from 'next/link';

const generateClassName = (params: any, route: Route) => {
  const isActive =
    params.slug === route.slug.current ||
    (!params.slug && route.slug.current === '/');
  const baseClass =
    'text-slate-800 dark:text-slate-200 text-sm font-bold transition-colors px-2 py-1 rounded-md w-max';
  const activeClass =
    'bg-slate-300 dark:bg-slate-500 shadow-md overline scale-105';
  const inactiveClass = 'hover:overline hover:scale-105';

  return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
};

const RouteLink = ({
  route,
  onNavClick,
  params,
}: {
  route: Route;
  onNavClick: () => void;
  params: any;
}) => (
  <Link
    key={route.slug.current}
    className={generateClassName(params, route)}
    href={`/${route.slug.current}`}
    onClick={onNavClick}
    title={route.name}>
    {route.name}
  </Link>
);

export default RouteLink;
