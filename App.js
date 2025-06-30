import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import CustomSplashScreen from './screens/onboarding/CustomSplashScreen';
import NonAuthRoutes from './navigation/NonAuthRoutes';
import AuthRoutes from './navigation/AuthRoutes'; // se tiver
import { AuthProvider, useAuth } from './context/AuthContext';

function Root() {
  const { user, authChecked } = useAuth();

  if (!authChecked) return <CustomSplashScreen />;

  return (
    <NavigationContainer>
      {user ? <AuthRoutes /> : <NonAuthRoutes />}
    </NavigationContainer>
  );
}

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  if (!appReady) return <CustomSplashScreen />;

  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}



