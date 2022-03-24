import { FC } from 'react';
import { Layout } from 'antd';
import { AppRouter } from '../AppRouter';
import { Navbar } from '../Navbar';

export const App: FC = () => (
  <Layout>
    <Navbar />
    <Layout.Content>
      <AppRouter />
    </Layout.Content>
  </Layout>
);
