import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/services/authService';
import { standingsApi } from '@/services/standingsService';
import { scheduleApi } from '@/services/scheduleService';
import { reducers } from './reducers';

const rootReducer = combineReducers({
  ...reducers,
  [authApi.reducerPath]: authApi.reducer,
  [standingsApi.reducerPath]: standingsApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(standingsApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
