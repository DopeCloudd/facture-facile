import { apiClient } from '@/api/client';

export const loginApi = async (email: string, password: string) => {
  const response = await apiClient.post('/users/login', { email, password });
  return response.data;
};

export const registerApi = async (email: string, password: string) => {
  const response = await apiClient.post('/users/register', { email, password });
  return response.data;
};
