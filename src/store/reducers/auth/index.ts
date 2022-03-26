import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '@/models/IUser';
import { AuthState } from './types';
import { LoadingStatuses } from '@/enums/statuses';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  loading: LoadingStatuses.BEGIN,
  error: null,
};

const fetchUser = createAsyncThunk('auth/fetchUser', async (params: IUser) => {
  const response = await axios.get<IUser[]>('./users.json');

  return {
    params,
    users: response.data,
  };
});

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setIsAuth(state, { payload }) {
      state.isAuth = payload;
    },
    loginFromLS(state, { payload }) {
      state.user.username = payload;
      state.isAuth = true;
    },
    logout() {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      return initialState;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = LoadingStatuses.PENDING;
      state.error = null;
    });

    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      const { params, users } = payload;

      const findUser = users.find(
        (user: IUser) =>
          params.username === user.username && params.password === '123',
      );

      if (findUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', findUser.username);

        state.loading = LoadingStatuses.SUCCESS;
        state.isAuth = true;
        state.user = findUser;
      } else {
        state.loading = LoadingStatuses.FAILURE;
        state.error = 'Incorrect username or password';
      }
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = LoadingStatuses.FAILURE;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export const authActions = { ...authSlice.actions, fetchUser };
export default authSlice.reducer;
