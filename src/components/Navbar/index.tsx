import { FC } from 'react';
import { Modal, Button, Col, Layout, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { LogoF1 } from '@/common/SVGIcon';
import { Navigation } from './Navigation';
import { LoginForm } from '../LoginForm';
import './index.css';

export const Navbar: FC = () => {
  let navigate = useNavigate();
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
      <Row justify="space-between">
        <Col xs={2} sm={4} md={6} lg={3} xl={3} className="app__logo">
          <LogoF1 />
        </Col>

        {token && (
          <Col xs={2} sm={4} md={6} lg={18} xl={18}>
            <Navigation />
          </Col>
        )}

        <Col xs={2} sm={4} md={6} lg={3} xl={3} className="app__auth">
          {token ? (
            <Button onClick={handleClickLogout}>Log out</Button>
          ) : (
            <Button onClick={handleClickLogin}>Log in</Button>
          )}
        </Col>
      </Row>

      <Modal
        title="Basic Modal"
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
