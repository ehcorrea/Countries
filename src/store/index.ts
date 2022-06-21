import { configureStore } from '@reduxjs/toolkit';

import { countriesApi } from '../service/countries';

import themeColorsReducer from './theme';

export const store = configureStore({
  reducer: {
    themeColors: themeColorsReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
