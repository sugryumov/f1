import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { authActions } from '@/store/reducers/authSlice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ ...authActions }, dispatch);
};
