import { FC } from 'react';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Navigation } from '../Navigation';

interface DesktopMenuProps {
  token: string;
  handleClickLogin: () => void;
  handleClickLogout: () => void;
}

export const DesktopMenu: FC<DesktopMenuProps> = ({
  token,
  handleClickLogin,
  handleClickLogout,
}) => (
  <>
    {token && (
      <div className="header__menu">
        <Navigation />
      </div>
    )}

    <div className="header__auth">
      {token ? (
        <Button type="primary" onClick={handleClickLogout}>
          Log out <LogoutOutlined />
        </Button>
      ) : (
        <Button type="primary" onClick={handleClickLogin}>
          Log in <LoginOutlined />
        </Button>
      )}
    </div>
  </>
);
