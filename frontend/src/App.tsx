import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';
import { Landing } from '@/pages/landing';
import { Dashboard } from '@/pages/dashboard';

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
      </Routes>
    </Router>
  );
}

export default App;
