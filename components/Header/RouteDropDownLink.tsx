import Link from 'next/link';
import { IconChevronDown } from '@/utils/icons';
import useRouteState from '@/hooks/useRouteState';

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (route.children) {
      e.preventDefault();
    } else {
      onNavClick();
    }
  };

  return (
    <div>
      <Link
        className={classes.join(' ')}
        href={route.children ? '#' : '/' + route.slug.current}
        onClick={handleClick}
        title={route.name}>
        {route.name}
        {route.children && (
          <IconChevronDown
            className="transition size-4 m-1"
            style={{
              transform: `rotate(${isDropdownOpen ? '0deg' : '180deg'})`,
            }}
          />
        )}
      </Link>
    </div>
  );
};

export default RouteDropdownLink;
