import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export const AppLayout: FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
