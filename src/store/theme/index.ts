import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeColors } from './types';

const initialState: ThemeColors = {
  mode: 'default',
};

export const themeColorsSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeColors>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setMode } = themeColorsSlice.actions;

export default themeColorsSlice.reducer;
