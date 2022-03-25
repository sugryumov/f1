import { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteNames } from '@/routes';

interface IProps {
  component: ComponentType;
}

export const ProtectedRoutes: FC<IProps> = ({ component: RouteComponent }) => {
  const isAuth = localStorage.getItem('auth');

  if (!isAuth) {
    return <Navigate to={RouteNames.LANDING} />;
  }

  return <RouteComponent />;
};
