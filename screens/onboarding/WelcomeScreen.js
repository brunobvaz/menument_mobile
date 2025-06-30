// src/screens/onboarding/WelcomeScreen.js
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReusableGradient from '../shared/ReusableGradient';
import DefaultButton from '../../components/button/DefaultButton';
import SplashStyles from '../../layout/styles/SplashStyles';

const WelcomeScreen = () => {
  const navigation = useNavigation(); // ✅ necessário para navegar

  return (
    <ReusableGradient contentStyle={SplashStyles.container}>
      <Image
        source={require('../../assets/splash-transparent.png')}
        style={SplashStyles.logo}
        resizeMode="contain"
      />

      <View style={SplashStyles.buttonContainer}>
        <DefaultButton
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
          style={SplashStyles.button}
        />
        <DefaultButton
          title="SIGN UP"
          outline
          onPress={() => navigation.navigate('Register')} // se tiver
          style={[SplashStyles.button, { marginTop: 10 }]}
        />
      </View>
    </ReusableGradient>
  );
};

export default WelcomeScreen;

