// services/api.js
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// ✅ Define aqui a tua API base
const BASE_URL = 'https://menumentapp.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

// 🔐 Interceptador de requisição para incluir token de autenticação
api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❌ Interceptador de resposta para lidar com erros globais
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Não autorizado. Faça login novamente.');
      // Aqui podes disparar logout ou navegação se quiseres
    }
    return Promise.reject(error);
  }
);

export default api;

