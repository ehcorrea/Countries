import { configureStore } from '@reduxjs/toolkit';

import themeColorsReducer from './theme';

export const store = configureStore({
  reducer: { themeColors: themeColorsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
