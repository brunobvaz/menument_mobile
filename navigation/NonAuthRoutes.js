import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen'; 
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResendActiveLinkScreen from '../screens/auth/ResendActiveLinkScreen';

const Stack = createNativeStackNavigator();

const NonAuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> 
       <Stack.Screen name="Forgot" component={ForgotPasswordScreen} /> 
       <Stack.Screen name="Resend" component={ResendActiveLinkScreen} /> 
    </Stack.Navigator>
  );
};

export default NonAuthRoutes;

