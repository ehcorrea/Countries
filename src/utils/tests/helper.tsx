import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const renderWithTheme = (children: React.ReactNode) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
