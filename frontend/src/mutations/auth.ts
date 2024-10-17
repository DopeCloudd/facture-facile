import { login } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const setToken = useAuthStore(state => state.setToken);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data.email, data.password),
    onSuccess: data => {
      const { token, email } = data;
      setToken(token, email);
      navigate('/dashboard');
    },
    onError: error => {
      console.error('Erreur de connexion', error);
    },
  });
};
