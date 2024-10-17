import { apiClient } from '@/api/client';
import { useAuthStore } from '@/store/useAuthStore';

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/login', {
    email,
    password,
  });

  // Sauvegarder le token et l'email
  const { token, email: userEmail } = response.data;
  useAuthStore.getState().setToken(token, userEmail);

  return response.data;
};
