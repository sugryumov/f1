import { FC } from 'react';
import { Button, Col, Layout, Menu, Row } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { LogoF1 } from '@/common/SVGIcon';
import { Navigation } from './Navigation';
import './index.css';

export const Navbar: FC = () => {
  const { isAuth } = useTypedSelector(state => state.authReducer);

  const handleClickLogin = () => {};

  const handleClickLogout = () => {};

  return (
    <Layout.Header className="app__header">
      <Row justify="space-between">
        <Col xs={2} sm={4} md={6} lg={3} xl={3} className="app__logo">
          <LogoF1 />
        </Col>

        {isAuth && (
          <Col xs={2} sm={4} md={6} lg={18} xl={18}>
            <Navigation />
          </Col>
        )}

        <Col xs={2} sm={4} md={6} lg={3} xl={3} className="app__auth">
          {isAuth ? (
            <Button onClick={handleClickLogout}>Log out</Button>
          ) : (
            <Button onClick={handleClickLogin}>Log in</Button>
          )}
        </Col>
      </Row>
    </Layout.Header>
  );
};
