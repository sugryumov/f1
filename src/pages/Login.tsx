import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const navigate = useNavigate();
  const location: any = useLocation();

  if (location.state?.from) {
    navigate(location.state.from);
  }

  return <div>Login</div>;
};
