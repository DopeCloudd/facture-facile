import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 px-20 mt-24 sm:mt-32 flex justify-center">
      <div className="max-w-7xl grid grid-cols-2 place-items-center">
        <div className="col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">Ne laissez pas la facturation vous ralentir !</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Rejoignez-nous et découvrez comment notre application peut vous aider à gagner du temps et à améliorer votre productivité. Créer vos factures professionnelles en quelques clics.
          </p>
        </div>

        <div className="space-y-4 col-start-2">
          <Button className="bg-green-600 text-white font-bold">Créez votre compte</Button>
        </div>
      </div>
    </section>
  );
};
