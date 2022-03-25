import { FC, useEffect } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { rules } from '@/utils/rules';
import './index.css';

export const LoginForm: FC = () => {
  const { setIsLoginModalVisible, fetchUser } = useActions();
  const { loading, error } = useTypedSelector(store => store.authReducer);

  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
      });
    }
  }, [error]);

  useEffect(() => {
    if (loading === 'success') {
      setIsLoginModalVisible(false);
    }
  }, [loading]);

  const onFinish = ({ username, password }) => {
    fetchUser({ username, password });
  };

  return (
    <Form
      name="basic"
      size="middle"
      layout="vertical"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input
          placeholder="Username"
          prefix={<UserOutlined className="login-form__icon" />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password
          placeholder="Password"
          prefix={<LockOutlined className="login-form__icon" />}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
          loading={loading === 'pending'}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
