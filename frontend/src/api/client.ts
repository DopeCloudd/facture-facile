import { useAuthStore } from '@/store/useAuthStore';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3099/api';

// Création d'une instance d'Axios avec l'URL de base
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token; // Récupérer le token depuis le store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Ajouter le token dans les headers
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
