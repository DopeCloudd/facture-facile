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
          <div className="w-full grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="company-name">
                Nom de votre entreprise<span className="text-red-600">*</span>
              </Label>
              <Input id="company-name" type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Nom de votre entreprise" />
            </div>
            <div>
              <Label htmlFor="company-name">SIRET de votre entreprise</Label>
              <Input id="company-name" type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="SIRET de votre entreprise" />
            </div>
          </div>

          <div>
            <Label htmlFor="company-name">Adresse de votre entreprise</Label>
            <Input id="company-name" type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Adresse de votre entreprise" />
          </div>

          <div className="w-full grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="client-name">Nom de l'entité / personne à facturer</Label>
              <Input id="client-name" type="text" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Nom du client" />
            </div>
            <div>
              <Label htmlFor="client-name">SIRET de l'entité à facturer</Label>
              <Input id="client-name" type="text" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Nom du client" />
            </div>
          </div>

          <div>
            <Label htmlFor="client-name">Adresse de l'entité / personne à facturer</Label>
            <Input id="client-name" type="text" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Nom du client" />
          </div>

          <div>
            <Label htmlFor="invoice-date">Référence de la facture</Label>
            <Input id="invoice-date" type="text" placeholder="Référence de la facture" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} />
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
        <div className="p-6 bg-foreground shadow-lg h-5/6 w-5/6 text-black flex flex-col">
          <div className="mb-2">
            <h3 className="text-lg font-semibold"> Nom de votre entreprise : {companyName}</h3>
            <p>SIRET : {clientName}</p>
            <p>Adresse : {invoiceDate}</p>
          </div>

          <div className="mb-6 text-right">
            <h3 className="text-lg font-semibold">Nom de l'entité / personne : {companyName}</h3>
            <p>SIRET : {clientName}</p>
            <p>Adresse : {invoiceDate}</p>
          </div>

          <div className="mb-4 text-right">
            <p>Référence : {clientName}</p>
            <p>Date : {invoiceDate}</p>
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

          <div className="text-right font-bold mt-4">
            <p className="w-fit ms-auto">Total: {calculateTotal()} €</p>
          </div>

          <div>
            <p>Lu et approuvé</p>
            <p>Le : </p>
            <p>Signature : </p>
          </div>

          <div className="mt-auto flex flex-col">
            <span className="border border-t border-muted w-full my-4"></span>
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <span className="text-xs">Nom de votre entreprise</span>
                <span className="text-xs">SIRET : </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Email : </span>
                <span className="text-xs">Tél. : </span>
                <span className="text-xs">Site web : </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
