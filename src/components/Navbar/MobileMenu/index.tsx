import { FC } from 'react';
import { Button, Drawer } from 'antd';
import { LoginOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
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
  const { setIsMobileMenuVisible } = useActions();
  const { isMobileMenuVisible } = useTypedSelector(state => state.uiReducer);

  const showDrawer = () => {
    setIsMobileMenuVisible(true);
  };

  const closeDrawer = () => {
    setIsMobileMenuVisible(false);
  };

  const handlerLogout = () => {
    handleClickLogout();
    setIsMobileMenuVisible(false);
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
            visible={isMobileMenuVisible}
            className="header__drawer"
          >
            <Navigation isMobile={true} />

            <Button
              type="primary"
              onClick={handlerLogout}
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
