import { ComponentType } from 'react';
import { Standings } from '@/pages/Standings';
import { Drivers } from '@/pages/Drivers';
import { Landing } from '@/pages/Landing';
import { NotFound } from '@/pages/NotFound';
import { RouteNames } from '@/enums/routes';

export interface IRoute {
  key: string;
  path: string;
  component: ComponentType;
  name: string;
  index?: boolean;
}

export const publicRoutes: IRoute[] = [
  {
    key: RouteNames.LANDING,
    path: RouteNames.LANDING,
    component: Landing,
    name: 'HOME',
    index: true,
  },
  {
    key: RouteNames.NOT_FOUND,
    path: RouteNames.NOT_FOUND,
    component: NotFound,
    name: 'NOT FOUND',
  },
];

export const privateRoutes: IRoute[] = [
  {
    key: RouteNames.DRIVERS,
    path: RouteNames.DRIVERS,
    component: Drivers,
    name: 'DRIVERS',
  },
  {
    key: RouteNames.STANDINGS,
    path: RouteNames.STANDINGS,
    component: Standings,
    name: 'STANDINGS',
  },
];

export const allRoutes = [...publicRoutes, ...privateRoutes];
