import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Detail } from '../views';
import Header from '../components/Header';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ header: Header }} />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{ header: Header }}
    />
  </Stack.Navigator>
);

export default Routes;
