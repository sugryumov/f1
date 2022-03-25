import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AuthActionCreators } from '@/store/reducers/auth';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AuthActionCreators, dispatch);
};
