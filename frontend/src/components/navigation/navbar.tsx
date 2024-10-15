import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

import { ModeToggle } from '@/components/navigation/mode-toggle';
import { PersonIcon } from '@radix-ui/react-icons';
import { Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Fonctionnalités',
  },
  {
    href: '#portfolio',
    label: 'Utilisation',
  },
  {
    href: '#pricing',
    label: 'Avis',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="blurBackground sticky top-4 z-40 mx-auto w-4/5 rounded-xl border-black/10 dark:border-white/10 max-md:top-0 max-md:w-full max-md:rounded-none max-md:border-b max-md:px-2 max-md:py-1 md:border">
      <div className="container flex h-16 items-center justify-between space-x-4 px-4 sm:space-x-0">
        <div className="flex flex-1 items-center min-w-fit">
          <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
            Facture Facile
          </a>
        </div>

        {/* mobile */}
        <span className="flex md:hidden">
          <ModeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="px-2">
              <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                <span className="sr-only">Menu Icon</span>
              </Menu>
            </SheetTrigger>

            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">Valentin LEROUGE</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                {routeList.map(({ href, label }: RouteProps) => (
                  <a rel="noreferrer noopener" key={label} href={href} onClick={() => setIsOpen(false)} className={buttonVariants({ variant: 'ghost' })}>
                    {label}
                  </a>
                ))}

                <a
                  rel="noreferrer noopener"
                  href="mailto:contact@valentin-lerouge.fr"
                  target="_blank"
                  className={`border ${buttonVariants({
                    variant: 'default',
                  })}`}
                >
                  <PersonIcon className="mr-2 w-5 h-5" />
                  Login
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </span>

        {/* desktop */}
        <nav className="hidden md:flex gap-2 w-full justify-center">
          {routeList.map((route: RouteProps, i) => (
            <a
              rel="noreferrer noopener"
              href={route.href}
              key={i}
              className={`text-[17px] ${buttonVariants({
                variant: 'ghost',
              })}`}
            >
              {route.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <a rel="noreferrer noopener" href="/login" target="_blank" className={`border ${buttonVariants({ variant: 'default' })}`}>
            <PersonIcon className="mr-2 w-5 h-5" />
            Connexion
          </a>
        </div>
      </div>
    </header>
  );
};
