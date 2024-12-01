import ModalUi from '@/components/Modal';
import { getRoutes } from '@/lib/client';
import { IconErrorPajamas } from '@/lib/icons';
import { formatDate } from '@/lib/utils';

async function admin() {
  const routes = await getRoutes;

  const renderRouteList = () => {
    return routes.map(route => {
      const lastUpdated = route._updatedAt
        ? formatDate(route._updatedAt)
        : 'Unknown';

      const routeName =
        route.slug.current === '/' ? 'Home' : route.slug.current;

      return (
        <ul dir="ltr">
          <li key={route.slug.current} className="w-full m-auto">
            <strong>{routeName}: </strong>
            Last updated on {lastUpdated}
          </li>
        </ul>
      );
    });
  };

  return (
    <ModalUi>
      <IconErrorPajamas className="m-auto mb-4 w-1/4" />
      <h1 className="text-3xl/10">עודכן לאחרונה</h1>
      {renderRouteList()}
      {/* <h2 className="font-bold text-neutural-500 text-lg m-2">
        todo: create an admin panel
      </h2> */}
    </ModalUi>
  );
}

export default admin;
