import React from 'react';
import { Image } from 'react-native';
import ReusableGradient from '..//shared/ReusableGradient';
import SplashStyles from '../../layout/styles/SplashStyles';

const CustomSplashScreen = () => {
  return (
    <ReusableGradient contentStyle={SplashStyles.container}>
      <Image
        source={require('../../assets/splash-transparent.png')}
        style={SplashStyles.logo}
        resizeMode="contain"
      />
    </ReusableGradient>
  );
};

export default CustomSplashScreen;
