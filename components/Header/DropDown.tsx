import Link from 'next/link';
import { IconChevronDown } from '@/utils/icons';
import useRouteState from '@/hooks/useRouteState';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const RouteDropdownLink = ({
  route,
  onNavClick,
  params,
  isChild = false,
  isDropdownOpen,
}: RouteLinkComponentProps & {
  isDropdownOpen: boolean;
}) => {
  const { classes } = useRouteState(params, route, isChild);

  return (
    <div>
      <Link
        className={classes.join(' ')}
        href={`/${route.slug.current}`}
        onClick={onNavClick}
        title={route.name}>
        {route.name}
        {route.children && (
          <IconChevronDown
            className="transition size-4 mr-1"
            style={{
              transform: `rotate(${isDropdownOpen ? '0deg' : '180deg'})`,
            }}
          />
        )}
      </Link>
    </div>
  );
};

const renderDropdownContent = (
  route: Route,
  onNavClick: () => void,
  params: Params,
  isDropdownOpen: boolean
) => {
  return (
    isDropdownOpen &&
    route.children && (
      <div className="dropdown-content absolute left-1/2 transform -translate-x-1/2 mt-0 bg-white dark:bg-gray-800 m-2 flex flex-col rounded-md">
        {route.children.map((childRoute: Route) => (
          <RouteDropdownLink
            route={childRoute}
            onNavClick={onNavClick}
            params={params}
            key={childRoute._id}
            isChild={true}
            isDropdownOpen={isDropdownOpen}
          />
        ))}
      </div>
    )
  );
};

export { RouteDropdownLink, renderDropdownContent };
