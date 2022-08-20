import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import {NavigationController} from './NavigationController';
import ForgetPassword from '../screens/forgetPassword';

const Stack = createNativeStackNavigator();

export const RoutesName = {
  Login: 'Login',
  ForgetPassword: 'ForgetPassword',
  Return: 'Return',
};

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={NavigationController.navigationRef}>
      <Stack.Navigator
        initialRouteName={RoutesName.Login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          key={RoutesName.Login}
          name={RoutesName.Login}
          component={Login}
        />
        <Stack.Screen
          key={RoutesName.ForgetPassword}
          name={RoutesName.ForgetPassword}
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
