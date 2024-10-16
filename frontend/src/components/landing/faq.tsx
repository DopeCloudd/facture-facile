import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Comment puis-je créer une facture dans l'application ?",
    answer:
      'Pour créer une facture, connectez-vous à votre compte, accédez à la page de création de factures, remplissez le formulaire avec les détails requis (client, produits/services, montant, etc.), puis cliquez sur le bouton "Créer" pour générer votre facture.',
    value: 'item-1',
  },
  {
    question: 'Puis-je personnaliser mes factures ?',
    answer:
      'Oui, notre application vous permet de personnaliser vos factures en ajoutant votre logo, en choisissant des couleurs, et en modifiant le format des informations présentées sur la facture.',
    value: 'item-2',
  },
  {
    question: 'Comment puis-je envoyer une facture à mes clients ?',
    answer:
      "Une fois que vous avez créé une facture, vous pouvez l'envoyer directement par email depuis l'application. Il vous suffit de saisir l'adresse email de votre client et de cliquer sur \"Envoyer\".",
    value: 'item-3',
  },
  {
    question: "L'application prend-elle en charge plusieurs devises ?",
    answer: 'Oui, notre application prend en charge plusieurs devises. Vous pouvez choisir la devise appropriée lors de la création de votre facture.',
    value: 'item-4',
  },
  {
    question: "Que faire si je rencontre des problèmes lors de la création d'une facture ?",
    answer: 'Si vous rencontrez des problèmes, veuillez consulter notre guide d\'utilisation ou contacter notre support technique via la section "Aide" de l\'application.',
    value: 'item-6',
  },
  {
    question: "L'application est-elle sécurisée pour stocker mes données ?",
    answer: 'Oui, nous prenons la sécurité de vos données très au sérieux. Toutes les informations sont stockées de manière sécurisée et chiffrées pour garantir leur confidentialité.',
    value: 'item-7',
  },
  {
    question: 'Puis-je accéder à mon compte depuis plusieurs appareils ?',
    answer: "Oui, vous pouvez accéder à votre compte depuis n'importe quel appareil disposant d'une connexion Internet. Il vous suffit de vous connecter avec vos identifiants.",
    value: 'item-8',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative mx-auto flex max-w-7xl flex-col px-6 py-32 max-md:items-center md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-t from-[#268320] to-[#8ad892] bg-clip-text text-transparent">Questions </span>
        fréquentes
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Vous avez d'autres questions ?{' '}
        <a rel="noreferrer noopener" href="mailto:contact@valentin-lerouge.fr" target="_blank" className="text-primary transition-all border-primary hover:border-b-2">
          <span className="bg-gradient-to-t from-[#268320] to-[#8ad892] bg-clip-text text-transparent underline">Me contacter</span>
        </a>
      </h3>
    </section>
  );
}
