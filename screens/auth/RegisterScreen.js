import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import CustomInput from '../../components/input/CustomInput';
import DefaultButton from '../../components/button/DefaultButton';
import ReusableGradient from '../shared/ReusableGradient';
import AuthStyles from '../../layout/styles/AuthStyles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };


  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    setLoading(true);
    const result = await register(form);
    setLoading(false);

    if (result.success) {
      Alert.alert('Sucesso', result.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } else {
      Alert.alert('Erro', result.message);
    }
  };

  return (
    <ReusableGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={AuthStyles.container}
      >
        <View style={AuthStyles.topSection}>
          <Text style={AuthStyles.subtitle}>Join Us</Text>
          <Text style={AuthStyles.title}>Create your account</Text>
          <View style={AuthStyles.divider} />
        </View>

        <View>
          <CustomInput
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleChange('name', text)}
          />

          <CustomInput
            placeholder="Email"
            value={form.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginTop: 15 }}
          />

          <CustomInput
            placeholder="Password"
            value={form.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
            type="password"
            style={{ marginTop: 15 }}
          />

          <CustomInput
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChangeText={(text) => handleChange('confirmPassword', text)}
            secureTextEntry
            type="password"
            style={{ marginTop: 15 }}
          />

          <DefaultButton
            title={loading ? 'A criar conta...' : 'Registar'}
            onPress={handleRegister}
            outline
            style={{ marginTop: 20 }}
            disabled={loading}
          />

          <View style={AuthStyles.footer}>
            <Text style={AuthStyles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={AuthStyles.footerLink}> Login</Text>
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


export default RegisterScreen;
