import { loginApi, registerApi } from '@/api/auth';
import { create } from 'zustand';

interface AuthState {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  token: null,

  // Login action
  login: async (email: string, password: string) => {
    try {
      const { token, email: userEmail } = await loginApi(email, password);
      set({ user: userEmail, token });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Register action
  register: async (email: string, password: string) => {
    try {
      await registerApi(email, password);
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  // Logout action
  logout: () => {
    set({ user: null, token: null });
  },
}));
