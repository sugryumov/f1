import authReducer, { authActions } from './authSlice';
import uiReducer, { uiActions } from './uiSlice';

export const reducers = {
  authReducer,
  uiReducer,
};

export const allActions = {
  ...authActions,
  ...uiActions,
};
