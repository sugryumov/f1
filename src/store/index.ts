import { configureStore } from '@reduxjs/toolkit';
import { standingsApi } from '@/services/standingsService';
import reducers from './reducers';

export const store = configureStore({
  reducer: {
    ...reducers,
    [standingsApi.reducerPath]: standingsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(standingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
