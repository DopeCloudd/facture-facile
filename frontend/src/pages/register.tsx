import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

// Schéma de validation Zod avec critères pour le mot de passe
const registerSchema = z
  .object({
    email: z.string().email({ message: 'Adresse email invalide' }),
    password: z
      .string()
      .min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
      .regex(/[a-z]/, { message: 'Le mot de passe doit contenir au moins une minuscule' })
      .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une majuscule' })
      .regex(/\d/, { message: 'Le mot de passe doit contenir au moins un chiffre' })
      .regex(/[\W_]/, { message: 'Le mot de passe doit contenir au moins un caractère spécial' }),
    confirmPassword: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

// Types dérivés du schéma
type RegisterFormInputs = z.infer<typeof registerSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  // Fonction de gestion de la soumission du formulaire
  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
    // Logique pour gérer l'inscription
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">S'inscrire</h1>
            <p className="text-balance text-muted-foreground">Entrer vos informations pour vous inscrire</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmation du mot de passe</Label>
              <Input id="confirm-password" type="password" {...register('confirmPassword')} />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Déjà un compte ?{' '}
            <Link to="/login" className="underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden bg-muted lg:block">
        <img src="/placeholder.svg" alt="Image" width="1920" height="1080" className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
    </div>
  );
}
