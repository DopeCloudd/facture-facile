import { create } from 'zustand';

interface AuthState {
  token: string | null;
  email: string | null;
  setToken: (token: string, email: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  token: null,
  email: null,
  setToken: (token, email) => set({ token, email }),
  clearToken: () => set({ token: null, email: null }),
}));
