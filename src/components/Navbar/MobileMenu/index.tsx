import { FC, useState } from 'react';
import { Button, Drawer } from 'antd';
import { LoginOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { Navigation } from '../Navigation';
import './index.css';

interface MobileMenuProps {
  token: string;
  handleClickLogin: () => void;
  handleClickLogout: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  token,
  handleClickLogin,
  handleClickLogout,
}) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  // TODO: close drawer when changing menu item and logout
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      {token ? (
        <div className="header__menu">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />

          <Drawer
            title="Menu"
            placement="right"
            width={240}
            onClose={closeDrawer}
            closable={false}
            visible={isDrawerVisible}
            className="header__drawer"
          >
            <Navigation isMobile={true} />

            <Button
              type="primary"
              onClick={handleClickLogout}
              className="header__drawer-button"
            >
              Log out <LogoutOutlined />
            </Button>
          </Drawer>
        </div>
      ) : (
        <div className="header__auth">
          <Button type="primary" onClick={handleClickLogin}>
            Log in <LoginOutlined />
          </Button>
        </div>
      )}
    </>
  );
};
