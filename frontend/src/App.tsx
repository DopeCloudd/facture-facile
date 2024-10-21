import { Dashboard } from '@/pages/dashboard';
import { InvoiceCreate } from '@/pages/invoice-create';
import { Landing } from '@/pages/landing';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Landing />} />

        {/* Page de connexion */}
        <Route path="/login" element={<Login />} />

        {/* Page d'inscription */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Création d'une facture */}
        <Route path="/invoice/create" element={<InvoiceCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
