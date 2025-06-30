import React, { useState } from 'react';
import {View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/input/CustomInput';
import DefaultButton from '../../components/button/DefaultButton';
import ReusableGradient from '../shared/ReusableGradient';
import api from '../../services/api';
import AuthStyles from '../../layout/styles/AuthStyles';


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Erro', 'Introduza o seu email.');
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/forgot-password', { email });
      setLoading(false);
      Alert.alert('Sucesso', res.data.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err) {
      setLoading(false);
      const message = err?.response?.data?.message || 'Erro ao enviar email.';
      Alert.alert('Erro', message);
    }
  };

  return (
    <ReusableGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={AuthStyles.container}
      >
        <View style={AuthStyles.topSection}>
          <Text style={AuthStyles.subtitle}>Forgot your password?</Text>
          <Text style={AuthStyles.title}>We’ll help you reset it</Text>
          <View style={AuthStyles.divider} />
        </View>

        <View>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <DefaultButton
            title={loading ? 'A enviar...' : 'Enviar link de recuperação'}
            onPress={handleSubmit}
            outline
            style={{ marginTop: 20 }}
            disabled={loading}
          />

          <View style={AuthStyles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={AuthStyles.footerLink}>Voltar ao login</Text>
            </TouchableOpacity>
            <Text style={AuthStyles.footerText}> | </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={AuthStyles.footerLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={AuthStyles.bottomSection}>
          <Text style={AuthStyles.bottomText}>#elevateyourplate</Text>
        </View>
      </KeyboardAvoidingView>
    </ReusableGradient>
  );
};


export default ForgotPasswordScreen;
