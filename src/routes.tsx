import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ header: () => <></> }}
    />
  </Stack.Navigator>
);

export default Routes;
