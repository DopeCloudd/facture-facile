import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 text-center md:px-8">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
        <main className="z-10 text-5xl md:text-6xl font-bold">
          <h1 className="inline text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="inline bg-gradient-to-r from-[#8ad892]  to-[#268320] text-transparent bg-clip-text">Facture</span> tes clients
            <br /> en toute <span className="inline bg-gradient-to-r from-[#8ad892]  to-[#268320] text-transparent bg-clip-text">facilitées</span>
          </h1>
        </main>
        <p className="z-10 mb-12 mt-2 text-balance text-lg tracking-tight text-gray-400 md:text-xl">
          Ne perdez plus votre temps à recréer vos factures ou à adapter pour chaque demande, <br className="hidden md:block" />
          créer vos modéles et vos factures personnalisées en quelques clics et ne les perdez plus jamais.
        </p>
        <Button className="z-10 text-xl font-medium py-6 px-8">Éditer mes factures</Button>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn('[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]', 'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12')}
        />
      </div>
    </section>
  );
}
