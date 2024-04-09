import useHover from '@/hooks/useHover';
import useRouteState from '@/hooks/useRouteState';
import useWindowWidth from '@/hooks/useWindowWidth';
import RouteDropdownLink from './RouteDropDownLink';
import renderDropdownContent from './renderDropdownContent';

const RouteLink = ({ route, onNavClick, params }: RouteLinkProps) => {
  const [isDropdownOpen, hoverEvents]: [
    boolean,
    { onMouseEnter: () => void; onMouseLeave: () => void }
  ] = useHover();

  const { isActive } = useRouteState(params, route);
  const isMobile = useWindowWidth(768) <= 768;

  const isOpen = isMobile ? isActive || isDropdownOpen : isDropdownOpen;

  return (
    <div className="relative" {...hoverEvents}>
      <RouteDropdownLink
        route={route}
        onNavClick={onNavClick}
        params={params}
        isDropdownOpen={isOpen}
      />
      {renderDropdownContent(route, onNavClick, params, isOpen)}
    </div>
  );
};

export default RouteLink;
