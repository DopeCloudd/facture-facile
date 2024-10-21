import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/useAuthStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

// Schéma de validation Zod
const loginSchema = z.object({
  email: z.string().email({ message: 'Adresse email invalide' }),
  password: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
});

// Types dérivés du schéma
type LoginFormInputs = z.infer<typeof loginSchema>;

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Pour rediriger après le login
  const loginApi = useAuthStore(state => state.login); // Action login de Zustand

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  // Fonction de gestion de la soumission du formulaire
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await loginApi(data.email, data.password); // Appel à l'action login
      navigate('/dashboard'); // Rediriger vers la page dashboard après connexion
    } catch (error) {
      setError('Échec de la connexion. Veuillez vérifier vos informations. ' + error);
    }
  };

  return (
    <div className="w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12 relative">
        <Button className="absolute top-10 left-10" variant={'outline'}>
          <Link to="/" className="flex items-center gap-2">
            Retour
          </Link>
        </Button>
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Connexion</h1>
            <p className="text-balance text-muted-foreground">Entrer vos informations de connexion</p>
          </div>
          {/* Formulaire */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <a href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Pas encore de compte ?{' '}
            <Link to="/register" className="underline">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="relative h-full w-full flex flex-col justify-center items-center bg-muted gap-6">
          <img src="/assets/bg-auth.jpg" alt="Image" width="1920" height="1080" className="h-full w-full object-cover absolute top-0 left-0" />
          <h1 className="text-8xl font-bold text-white z-10 text-center">Facture Facile</h1>
          <span className="text-white text-xl italic z-10">“ La facturation n'a jamais été aussi simple. „</span>
        </div>
      </div>
    </div>
  );
}
