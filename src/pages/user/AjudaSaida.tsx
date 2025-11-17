
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HelpLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <Link to={to} className="block w-full text-left text-lg p-5 bg-white rounded-xl border border-gray-200 hover:bg-guardiao-cinza-claro hover:border-guardiao-azul transition-all duration-200 shadow-soft flex justify-between items-center">
        <span className="text-guardiao-cinza-escuro">{children}</span>
        <i className="bi bi-chevron-right text-guardiao-cinza-medio"></i>
    </Link>
)

export default function AjudaSaida() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/configuracoes')} className="mb-8 flex items-center gap-2 text-guardiao-azul font-semibold">
            <i className="bi bi-arrow-left"></i> Voltar para Configurações
        </button>
        <div className="text-left mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Ajuda e Saída</h1>
        </div>
        
        <div className="space-y-4">
            <HelpLink to="/fale-conosco">Fale Conosco</HelpLink>
            <HelpLink to="/termos-de-uso">Termos de Uso</HelpLink>
            <HelpLink to="/como-funciona">Como Funciona</HelpLink>
        </div>

        <button
            onClick={handleLogout}
            className="w-full mt-12 py-3 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-colors"
        >
            Sair da Conta
        </button>
      </div>
    </div>
  );
}
