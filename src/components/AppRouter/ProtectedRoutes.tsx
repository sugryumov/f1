import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RouteNames } from '@/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const ProtectedRoutes: FC = () => {
  const location = useLocation();
  const { isAuth } = useTypedSelector(state => state.authReducer);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={RouteNames.LOGIN} state={{ from: location }} replace />
  );
};
