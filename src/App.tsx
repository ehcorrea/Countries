import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated';

import { RootState } from 'store';
import { useSelector } from 'react-redux';

import Routes from './routes';
import theme from './styles/theme';
import colors from './styles/colors';

const App = () => {
  const themeColors = useSelector((state: RootState) => state.themeColors.mode);

  return (
    <ThemeProvider theme={{ ...theme, colors: colors[themeColors] }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
