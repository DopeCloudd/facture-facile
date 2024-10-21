import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export function InvoiceCreate() {
  const [companyName, setCompanyName] = useState('');
  const [clientName, setClientName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [newItem, setNewItem] = useState<InvoiceItem>({
    description: '',
    quantity: 1,
    price: 0,
  });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ description: '', quantity: 1, price: 0 });
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = [...items];

    // Vérifier quel type de donnée est attendue pour le champ spécifique
    if (field === 'quantity' || field === 'price') {
      updatedItems[index][field] = Number(value); // Conversion en nombre
    } else if (field === 'description') {
      updatedItems[index][field] = value as string; // Conversion en chaîne
    }

    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      {/* Formulaire de saisie à gauche */}
      <div className="p-6 bg-background">
        <h2 className="text-2xl font-bold mb-4">Créer une facture</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="company-name">Nom de l'entreprise</Label>
            <Input id="company-name" type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Nom de l'entreprise" />
          </div>

          <div>
            <Label htmlFor="client-name">Nom du client</Label>
            <Input id="client-name" type="text" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Nom du client" />
          </div>

          <div>
            <Label htmlFor="invoice-date">Date de la facture</Label>
            <Input id="invoice-date" type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} />
          </div>

          {/* Section d'ajout des articles */}
          <div className="mt-4">
            <h3 className="font-bold">Articles</h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Input type="text" placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} />
              <Input type="number" placeholder="Quantité" value={newItem.quantity} onChange={e => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })} />
              <Input type="number" placeholder="Prix" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: parseFloat(e.target.value) })} />
            </div>
            <Button onClick={handleAddItem} className="mt-2">
              Ajouter un article
            </Button>
          </div>
        </div>
      </div>

      {/* Aperçu de la facture à droite */}
      <div className="flex justify-center items-center h-full w-full bg-muted">
        <div className="p-6 bg-foreground shadow-lg h-5/6 w-5/6 text-black">
          <div className="mb-6">
            <h3 className="text-lg font-semibold"> Nom de votre entreprise : {companyName}</h3>
            <p>SIRET : {clientName}</p>
            <p>Adresse : {invoiceDate}</p>
          </div>

          <div className="mb-6 text-right">
            <h3 className="text-lg font-semibold">Nom de l'entité / personne : {companyName}</h3>
            <p>SIRET : {clientName}</p>
            <p>Adresse : {invoiceDate}</p>
          </div>

          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Quantité</th>
                <th className="border px-4 py-2">Prix</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.description}</td>
                  <td className="border px-4 py-2">
                    <Input type="number" value={item.quantity} onChange={e => handleItemChange(index, 'quantity', parseInt(e.target.value))} />
                  </td>
                  <td className="border px-4 py-2">
                    <Input type="number" value={item.price} onChange={e => handleItemChange(index, 'price', parseFloat(e.target.value))} />
                  </td>
                  <td className="border px-4 py-2">{(item.quantity * item.price).toFixed(2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right font-bold">
            <p>Total: {calculateTotal()} €</p>
          </div>
        </div>
      </div>
    </div>
  );
}
