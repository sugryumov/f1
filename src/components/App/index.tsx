import { FC, useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import { AppRouter } from '../AppRouter';

export const App: FC = () => {
  const { setCredentials } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setCredentials({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
      });
    }
  }, []);

  return <AppRouter />;
};
