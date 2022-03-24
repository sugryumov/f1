import { ComponentType } from 'react';
import { Standings } from '@/pages/Standings';
import { Drivers } from '@/pages/Drivers';
import { Login } from '@/pages/Login';
import { NotFound } from '@/pages/NotFound';

export interface IRoute {
  key: string;
  path: string;
  element: ComponentType;
}

export enum RouteNames {
  NOT_FOUND = '*',
  LOGIN = 'login',
  DRIVERS = 'drivers',
  STANDINGS = 'standings',
}

export const publicRoutes: IRoute[] = [
  {
    key: RouteNames.LOGIN,
    path: RouteNames.LOGIN,
    element: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    key: RouteNames.DRIVERS,
    path: RouteNames.DRIVERS,
    element: Drivers,
  },
  {
    key: RouteNames.STANDINGS,
    path: RouteNames.STANDINGS,
    element: Standings,
  },
  {
    key: RouteNames.NOT_FOUND,
    path: RouteNames.NOT_FOUND,
    element: NotFound,
  },
];
