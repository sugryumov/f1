import { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteNames } from '@/enums/routes';

interface IProps {
  component: ComponentType;
}

export const ProtectedRoutes: FC<IProps> = ({ component: RouteComponent }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={RouteNames.LANDING} />;
  }

  return <RouteComponent />;
};
