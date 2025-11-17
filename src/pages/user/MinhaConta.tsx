
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function MinhaConta() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/configuracoes')} className="mb-8 flex items-center gap-2 text-guardiao-azul font-semibold">
            <i className="bi bi-arrow-left"></i> Voltar para Configurações
        </button>
        <div className="text-left mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Minha Conta</h1>
        </div>
        <div className="space-y-6 text-lg">
            <div className="flex justify-between items-center">
                <span className="text-guardiao-cinza-medio">Nome:</span>
                <span className="font-medium text-guardiao-cinza-escuro">{user?.name || 'Não informado'}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-guardiao-cinza-medio">Email:</span>
                <span className="font-medium text-guardiao-cinza-escuro">{user?.email || 'Não informado'}</span>
            </div>
             <hr className="my-4"/>
            <Link to="/nova-senha" className="block text-center w-full py-3 text-guardiao-azul font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                Alterar Senha
            </Link>
        </div>
      </div>
    </div>
  );
}