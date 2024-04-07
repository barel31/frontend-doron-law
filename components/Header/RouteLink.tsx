import useHover from '@/hooks/useHover';
import {
  RouteDropdownLink,
  renderDropdownContent,
} from '@/components/Header/DropDown';

const RouteLink = ({ route, onNavClick, params }: RouteLinkProps) => {
  const [isDropdownOpen, hoverEvents]: [
    boolean,
    {
      onMouseEnter: () => void;
      onMouseLeave: () => void;
    }
  ] = useHover();

  return (
    <div className="dropdown relative" {...hoverEvents}>
      <RouteDropdownLink
        route={route}
        onNavClick={onNavClick}
        params={params}
        isDropdownOpen={isDropdownOpen}
      />
      {renderDropdownContent(route, onNavClick, params, isDropdownOpen)}
    </div>
  );
};

export default RouteLink;
