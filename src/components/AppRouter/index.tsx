import { Routes, Route } from 'react-router-dom';
import { RouteNames } from '@/enums/routes';
import { IRoute, privateRoutes, publicRoutes } from './routes';
import { AppLayout } from '../AppLayout';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AppRouter = () => (
  <Routes>
    <Route path={RouteNames.LANDING} element={<AppLayout />}>
      {publicRoutes.map(
        ({ index, key, path, component: RouteComponent }: IRoute) => (
          <Route
            index={index}
            key={key}
            path={path}
            element={<RouteComponent />}
          />
        ),
      )}

      {privateRoutes.map(({ key, path, component }: IRoute) => (
        <Route
          key={key}
          path={path}
          element={<ProtectedRoutes component={component} />}
        />
      ))}
    </Route>
  </Routes>
);
