import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import CustomInput from '../../components/input/CustomInput';
import DefaultButton from '../../components/button/DefaultButton';
import ReusableGradient from '../shared/ReusableGradient';
import AuthStyles from '../../layout/styles/AuthStyles';

const LoginScreen = () => {
    const navigation = useNavigation();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleLogin = async () => {
        setLoading(true);
        const result = await login(form);
        setLoading(false);

        if (!result.success) {
            Alert.alert('Erro', result.message);
        }
        // Se login for bem-sucedido, o AuthContext já atualiza a navegação
    };

    return (
        <ReusableGradient>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={AuthStyles.container}
            >
                <View style={AuthStyles.topSection}>
                    <Text style={AuthStyles.subtitle}>Hello There!</Text>
                    <Text style={AuthStyles.title}>Login to your account</Text>
                    <View style={AuthStyles.divider} />
                </View>
                <View >
                    <CustomInput
                        placeholder="Email"
                        value={form.email}
                        onChangeText={(text) => handleChange('email', text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <CustomInput
                        placeholder="Password"
                        value={form.password}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry
                        type="password"
                        style={{ marginTop: 20 }}
                    />

                    <DefaultButton
                        title={loading ? 'Entrando...' : 'Entrar'}

                        outline
                        onPress={handleLogin}
                        disabled={loading}
                        style={{ marginTop: 20 }}
                    />
                    <View style={AuthStyles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Text style={AuthStyles.footerLink}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <Text style={AuthStyles.footerText}> | </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={AuthStyles.footerLink}>Create a new Account?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', marginBottom: 5 }}>
                            Didn't receive the activation Link?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Resend')}>
                            <Text style={[AuthStyles.footerLink, { textDecorationLine: 'underline' }]}>
                                Resend activation Link
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* FUNDO */}


                <View style={AuthStyles.bottomSection}>
                    <Text style={AuthStyles.bottomText}>#elevateyourplate</Text>
                </View>
            </KeyboardAvoidingView>
        </ReusableGradient>
    );
};

export default LoginScreen;
