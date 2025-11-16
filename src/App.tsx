import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';

// Main Pages
import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';
import Recursos from './pages/Recursos';
import Sobre from './pages/Sobre';
import TermosUso from './pages/TermosUso';
import FaleConosco from './pages/FaleConosco';

// User Pages
import Configuracoes from './pages/Configuracoes';
import MinhaConta from './pages/MinhaConta';
import Acessibilidade from './pages/Acessibilidade';

// Styles
import './styles/index.css';
import './styles/accessibility.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Signup />} />
            <Route path="/esqueci-senha" element={<ForgotPassword />} />
            <Route path="/verificacao-codigo" element={<VerificationCode />} />
            <Route path="/nova-senha" element={<NewPassword />} />
          </Route>

          {/* Main Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/termos" element={<TermosUso />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/minha-conta" element={<MinhaConta />} />
            <Route path="/acessibilidade" element={<Acessibilidade />} />
          </Route>

          {/* 404 - Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
