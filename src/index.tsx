import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

import App from './App';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
