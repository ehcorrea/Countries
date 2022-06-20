import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated';

import Routes from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
