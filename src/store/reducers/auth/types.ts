import { TStatuses } from '@/models/IStatuses';
import { IUser } from '@/models/IUser';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  loading: TStatuses;
  error: null | string;
}
