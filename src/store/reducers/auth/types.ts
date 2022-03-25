import { IUser } from '@/models/IUser';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  loading: 'begin' | 'pending' | 'failure' | 'success';
  error: null | string;
}
