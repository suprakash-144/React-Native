import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Signin from '../Screen/Signin';
export type AuthStackparamlist = {
  Login: undefined;
  Signin: undefined;
};
const Stack = createNativeStackNavigator<AuthStackparamlist>();
const Authstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default Authstack;
