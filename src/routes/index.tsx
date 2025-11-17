
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';

// Auth pages
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import NewPassword from '../pages/auth/NewPassword';

// Main pages
import Home from '../pages/Home';
import ComoFunciona from '../pages/ComoFunciona';
import Recursos from '../pages/Recursos';
import Sobre from '../pages/Sobre';
import TermosUso from '../pages/TermosUso';
import FaleConosco from '../pages/FaleConosco';

// User pages
import Configuracoes from '../pages/user/Configuracoes';
import MinhaConta from '../pages/user/MinhaConta';
import Acessibilidade from '../pages/user/Acessibilidade';
import AjudaSaida from '../pages/user/AjudaSaida';


const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};


export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        {/* Rotas com AuthLayout (públicas) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/esqueci-senha" element={<ForgotPassword />} />
          <Route path="/nova-senha" element={<NewPassword />} />
        </Route>

        {/* Rotas com MainLayout (protegidas e públicas) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          
          <Route path="/configuracoes" element={<PrivateRoute><Configuracoes /></PrivateRoute>} />
          <Route path="/minha-conta" element={<PrivateRoute><MinhaConta /></PrivateRoute>} />
          <Route path="/acessibilidade" element={<PrivateRoute><Acessibilidade /></PrivateRoute>} />
          <Route path="/ajuda-e-saida" element={<PrivateRoute><AjudaSaida /></PrivateRoute>} />
        </Route>

         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}