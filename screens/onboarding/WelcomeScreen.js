// src/screens/onboarding/WelcomeScreen.js
import React from 'react';
import { Text, View } from 'react-native';
import GradientBackground from '../shared/GradientBackground'
import DefaultButton from '../../components/button/DefaultButton';

const WelcomeScreen = () => {
    return (
        <GradientBackground>
                <Text style={{ color: '#fff', fontSize: 24 }}>Bem-vindo!</Text>
                <DefaultButton
                    style={{ marginTop: 5, width: '100%' }}
                    title="SIGN IN"
                    // onPress={() => propNavigation.navigate('Login')}
                    borderWhite
                />

                <DefaultButton
                    style={{ marginTop: 5, width: '100%' }}
                    title="SIGN UP"
                    // onPress={() => propNavigation.navigate('Register')}
                    outline
                />
        </GradientBackground>
    );
};

export default WelcomeScreen;
