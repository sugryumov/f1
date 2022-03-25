import { authActions } from './auth';
import { uiActions } from './ui';

export const allActions = {
  ...authActions,
  ...uiActions,
};
