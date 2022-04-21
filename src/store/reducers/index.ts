import authReducer, { authActions } from './authSlice';
import uiReducer, { uiActions } from './uiSlice';
import standingsReducer, { standingsActions } from './standingsSlice';

export const reducers = {
  authReducer,
  uiReducer,
  standingsReducer,
};

export const allActions = {
  ...authActions,
  ...uiActions,
  ...standingsActions,
};
