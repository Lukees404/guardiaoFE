
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SettingsLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <Link to={to} className="block w-full text-left text-lg p-5 bg-guardiao-branco rounded-xl border border-gray-200 hover:bg-guardiao-cinza-claro hover:border-guardiao-azul transition-all duration-200 shadow-soft flex justify-between items-center">
        <span>{children}</span>
        <i className="bi bi-chevron-right text-guardiao-cinza-medio"></i>
    </Link>
)

export default function Configuracoes() {
  const navigate = useNavigate();

  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-guardiao-azul font-semibold">
            <i className="bi bi-arrow-left"></i> Voltar
        </button>
        <div className="text-left mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Configurações</h1>
          <p className="mt-4 text-xl text-guardiao-cinza-medio">
            Gerencie sua conta, preferências e saia com segurança.
          </p>
        </div>
        <div className="space-y-4">
            <SettingsLink to="/minha-conta">Minha Conta</SettingsLink>
            <SettingsLink to="/acessibilidade">Acessibilidade</SettingsLink>
            <SettingsLink to="/ajuda-e-saida">Ajuda e Saída</SettingsLink>
        </div>
      </div>
    </div>
  );
}
