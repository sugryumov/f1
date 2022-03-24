import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IRoute, privateRoutes, publicRoutes, RouteNames } from '@/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector(state => state.authReducer);

  return (
    <>
      <Routes>
        {!isAuth &&
          publicRoutes.map((route: IRoute) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}

        {isAuth &&
          privateRoutes.map((route: IRoute) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}

        <Route
          path={RouteNames.NOT_FOUND}
          element={
            <Navigate to={isAuth ? RouteNames.DRIVERS : RouteNames.LOGIN} />
          }
        />
      </Routes>
    </>
  );
};
