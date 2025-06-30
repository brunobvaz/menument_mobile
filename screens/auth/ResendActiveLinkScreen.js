import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/input/CustomInput';
import DefaultButton from '../../components/button/DefaultButton';
import ReusableGradient from '../shared/ReusableGradient';
import api from '../../services/api';
import AuthStyles from '../../layout/styles/AuthStyles';

const ResendActiveLinkScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/resend-activation', { email });
      setLoading(false);
      Alert.alert('Success', res.data.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err) {
      setLoading(false);
      const message = err?.response?.data?.message || 'Failed to send activation link.';
      Alert.alert('Error', message);
    }
  };

  return (
    <ReusableGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={AuthStyles.container}
      >
        <View style={AuthStyles.topSection}>
          <Text style={AuthStyles.subtitle}>Account not activated?</Text>
          <Text style={AuthStyles.title}>Resend the activation link</Text>
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
            title={loading ? 'Sending...' : 'Resend activation link'}
            onPress={handleSubmit}
            outline
            style={{ marginTop: 20 }}
            disabled={loading}
          />

          <View style={AuthStyles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={AuthStyles.footerLink}>Back to login</Text>
            </TouchableOpacity>
            <Text style={AuthStyles.footerText}> | </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={AuthStyles.footerLink}>Create an account</Text>
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

export default ResendActiveLinkScreen;
