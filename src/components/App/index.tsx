import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { LogoF1 } from '@/common/SVGIcon';
import './index.css';

export const App = () => {
  const [state, setState] = useState<{ current: string }>({
    current: 'standings',
  });

  const handleClick: MenuClickEventHandler = ({ key }) => {
    setState({ current: key });
  };

  return (
    <Layout className="app__layout">
      <Layout.Header className="app__header">
        <LogoF1 />

        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[state?.current]}
          className="app__menu"
        >
          <Menu.Item key="standings">Standings</Menu.Item>
          <Menu.Item key="drivers">Drivers</Menu.Item>
        </Menu>
      </Layout.Header>
    </Layout>
  );
};
