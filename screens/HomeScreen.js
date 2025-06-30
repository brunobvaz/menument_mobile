// src/screens/onboarding/CustomSplashScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import DefaultButton from '../components/button/DefaultButton';

const HomeScreen = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Welcome'); // ou 'Login' se quiser redirecionar para o login
  };

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <DefaultButton
        title="LOGOUT"
        outline
        onPress={handleLogout}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
