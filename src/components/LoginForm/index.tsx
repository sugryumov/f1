import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useFetchAuthMutation } from '@/services/authService';
import { useActions } from '@/hooks/useActions';
import { IUser } from '@/models/IUser';
import { rules } from '@/utils/rules';
import './index.css';

export const LoginForm: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [fetchAuth, { data, isLoading }] = useFetchAuthMutation();
  const { setCredentials, setIsLoginModalVisible } = useActions();

  useEffect(() => {
    if (typeof data === 'string') {
      notification.error({
        message: data,
      });
    }

    if (typeof data === 'object') {
      setCredentials(data);
      setIsLoginModalVisible(false);
      form.resetFields();
      navigate('drivers');
    }
  }, [data]);

  const onFinish = async (values: IUser) => {
    await fetchAuth(values).unwrap();
  };

  return (
    <Form
      form={form}
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
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
