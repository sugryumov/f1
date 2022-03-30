import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Layout } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Breakpoints } from '@/enums/breakpoints';
import { LogoF1 } from '@/common/SVGIcon';
import { LoginForm } from '../LoginForm';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import './index.css';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const { logout, setIsLoginModalVisible } = useActions();
  const { token, isLoginModalVisible } = useTypedSelector(
    state => state.authReducer,
  );

  const handleClickLogin = () => {
    setIsLoginModalVisible(true);
  };

  const handleCancel = () => {
    setIsLoginModalVisible(false);
  };

  const handleClickLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Layout.Header className="app__header">
      <div className="container header__container">
        {/* TODO: make as link to home page*/}
        <div className="header__logo">
          <LogoF1 />
        </div>

        {breakpoint === Breakpoints.XS ? (
          <MobileMenu
            token={token}
            handleClickLogin={handleClickLogin}
            handleClickLogout={handleClickLogout}
          />
        ) : (
          <DesktopMenu
            token={token}
            handleClickLogin={handleClickLogin}
            handleClickLogout={handleClickLogout}
          />
        )}
      </div>

      <Modal
        title="LOG IN"
        visible={isLoginModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <LoginForm />
      </Modal>
    </Layout.Header>
  );
};
