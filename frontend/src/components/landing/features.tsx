import { AnimatedList } from '@/components/ui/animated-list';
import { cn } from '@/lib/utils';
import { AnimatedBeamDemo } from '@/components/landing/beam';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: 'Devis envoyé',
    description: 'Votre client a reçu le devis',
    time: '15m ago',
    icon: '🧾',
    color: '#FFB800',
  },
  {
    name: 'Facture envoyée',
    description: 'Votre client a reçu la facture',
    time: '10m ago',
    icon: '🧾',
    color: '#FFB800',
  },
  {
    name: 'Paiement reçu',
    description: 'Vous avez reçu un paiement',
    time: '5m ago',
    icon: '💸',
    color: '#00C9A7',
  },
  {
    name: 'Paiement reçu',
    description: 'Vous avez reçu un paiement',
    time: '2m ago',
    icon: '💸',
    color: '#00C9A7',
  },
  {
    name: 'Paiement reçu',
    description: 'Vous avez reçu un paiement',
    time: '1m ago',
    icon: '💸',
    color: '#00C9A7',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function Features() {
  return (
    <section id="features" className="relative mx-auto flex max-w-7xl flex-col gap-32 px-6 pt-32 max-md:items-center md:px-8">
      <div className="flex w-full justify-center gap-16 max-lg:flex-col">
        <div className="max-lg:text-left">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            <span className="bg-gradient-to-r from-[#268320] to-[#8ad892] bg-clip-text text-transparent">Édition de facture simplifié</span>
          </h4>
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">Un gain de temps.</h2>
          <p className="mt-6 max-w-lg text-xl leading-8 text-black/80 dark:text-white">
            Grâce à <u>Facture Facile</u> vous pouvez créer vos factures en quelques clics, retrouvez vos factures en un clin d'oeil et les télécharger en PDF.
          </p>
        </div>
        <div className={'relative flex max-h-[250px] min-h-[250px] w-full max-w-lg flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg'}>
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>
      <div className="flex w-full justify-center gap-16 max-lg:flex-col">
        <AnimatedBeamDemo />
        <div className="max-lg:text-left">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            <span className="bg-gradient-to-r from-[#268320] to-[#8ad892] bg-clip-text text-transparent">Gestion centralisée</span>
          </h4>
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">Tout-en-un.</h2>
          <p className="mt-6 max-w-lg text-xl leading-8 text-black/80 dark:text-white">
            Tous vos modéles de factures, vos factures et vos devis sont centralisés dans un seul et même endroit, accessible depuis n'importe où.
          </p>
        </div>
      </div>
    </section>
  );
}
