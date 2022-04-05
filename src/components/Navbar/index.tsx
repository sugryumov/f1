import { FC } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Modal, Layout } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Breakpoints } from '@/enums/breakpoints';
import { RouteNames } from '@/enums/routes';
import { LogoF1 } from '@/common/SVGIcon';
import { allRoutes } from '@/components/AppRouter/routes';
import { LoginForm } from '../LoginForm';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import './index.css';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
    navigate(RouteNames.LANDING);
  };

  const { name: pageTitle } = allRoutes.find(
    ({ path }) => pathname === path || pathname === `${path}/`,
  );

  return (
    <Layout.Header className="app__header">
      <div className="container header__container">
        <Link className="header__logo" to={RouteNames.LANDING}>
          <LogoF1 />
        </Link>

        {breakpoint === Breakpoints.XS ? (
          <>
            <p className="header__title-mobile">{pageTitle}</p>

            <MobileMenu
              token={token}
              handleClickLogin={handleClickLogin}
              handleClickLogout={handleClickLogout}
            />
          </>
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
