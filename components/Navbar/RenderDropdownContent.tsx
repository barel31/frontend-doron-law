import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import RouteDropdownLink from './RouteDropDownLink';

const RenderDropdownContent = (
  route: Route,
  onNavClick: () => void,
  params: Params,
  isDropdownOpen: boolean
) => {
  return (
    isDropdownOpen &&
    route.children && (
      <div className="dropdown-content absolute shadow-lg mt-0 bg-gray-100 dark:bg-gray-700 flex flex-col justify-center rounded-md w-max p-2 m-1 gap-2">
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

export default RenderDropdownContent;
