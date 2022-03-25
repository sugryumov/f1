import { FC, useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import { AppRouter } from '../AppRouter';

export const App: FC = () => {
  const { loginFromLS } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      loginFromLS(localStorage.getItem('username'));
    }
  }, []);

  return <AppRouter />;
};
