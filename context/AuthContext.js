import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = await SecureStore.getItemAsync('authToken');
      if (token) {
        try {
          await fetchUser();
        } catch {
          await logout();
        }
      }
      setAuthChecked(true);
    };
    loadUser();
  }, []);

  const fetchUser = async () => {
    const res = await api.get('/auth/me', { withCredentials: true });
    setUser(res.data);
  };

  const login = async ({ email, password }) => {
    try {
      const res = await api.post('/auth/login', { email, password }, { withCredentials: true });

      // Opcional: guardar token localmente se vier na resposta
      if (res.data.token) {
        await SecureStore.setItemAsync('authToken', res.data.token);
      }

      await fetchUser();
      return { success: true };
    } catch (err) {
      const message = err?.response?.data?.message || 'Erro ao autenticar';
      return { success: false, message };
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const res = await api.post('/auth/register', { name, email, password });
      return { success: true, message: res.data.message };
    } catch (err) {
      console.log("erro registo", err)
      const message = err?.response?.data?.message || 'Erro ao registar';
      return { success: false, message };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, authChecked }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
