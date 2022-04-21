import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/models/IUser';

interface AuthState {
  user: IUser;
  token: string;
  isLoginModalVisible: boolean;
}

const initialState: AuthState = {
  user: {} as IUser,
  token: '',
  isLoginModalVisible: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
    },
    setIsLoginModalVisible(state, { payload }) {
      state.isLoginModalVisible = payload;
    },
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
