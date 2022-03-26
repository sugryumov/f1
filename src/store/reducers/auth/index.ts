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
  await new Promise(resolve => setTimeout(resolve, 1000));

  const response = await axios.get<IUser[]>('./users.json');

  const findUser = response.data.find(
    (user: IUser) =>
      params.username === user.username && params.password === '123',
  );

  if (findUser) {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('username', findUser.username);

    return findUser;
  } else {
    return null;
  }
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
      if (payload) {
        state.loading = LoadingStatuses.SUCCESS;
        state.isAuth = true;
        state.user = payload;
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
