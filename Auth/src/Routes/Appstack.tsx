import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Screen/Home';
export type AppStackparamlist = {
  Home: undefined;
};
const Stack = createNativeStackNavigator<AppStackparamlist>();
const Appstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Appstack;
