import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MinhaConta: React.FC = () => {
  const { user, updatePassword, logout } = useAuth();
  const navigate = useNavigate();
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (passwords.newPassword.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setIsLoading(true);

    try {
      await updatePassword(passwords.newPassword);
      setSuccess('Senha alterada com sucesso!');
      setPasswords({ newPassword: '', confirmPassword: '' });
      setShowPasswordChange(false);

      // Auto-fechar mensagem de sucesso
      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao alterar senha');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-guardiao-cinza-escuro mb-4">
          Você não está logado
        </h1>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 bg-guardiao-azul text-white rounded-xl hover:bg-blue-600 transition"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="bi bi-person-circle text-6xl text-guardiao-azul"></i>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-2">
          Minha Conta
        </h1>
        <p className="text-xl text-guardiao-cinza-medio">
          Gerencie suas informações pessoais
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-base text-green-700 flex items-center gap-2">
            <i className="bi bi-check-circle-fill"></i>
            {success}
          </p>
        </div>
      )}

      {/* User Info */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-6">
          Informações Pessoais
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="bi bi-person-fill text-xl text-blue-600"></i>
            </div>
            <div>
              <p className="text-sm text-guardiao-cinza-medio">Nome</p>
              <p className="text-lg font-medium text-guardiao-cinza-escuro">{user.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="bi bi-envelope-fill text-xl text-green-600"></i>
            </div>
            <div>
              <p className="text-sm text-guardiao-cinza-medio">Email</p>
              <p className="text-lg font-medium text-guardiao-cinza-escuro">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-6">
          Segurança
        </h2>

        {!showPasswordChange ? (
          <button
            onClick={() => setShowPasswordChange(true)}
            className="flex items-center gap-2 px-6 py-3 bg-guardiao-azul text-white
                     rounded-xl hover:bg-blue-600 transition font-medium text-lg min-h-[50px]"
          >
            <i className="bi bi-key-fill"></i>
            Alterar Senha
          </button>
        ) : (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label htmlFor="newPassword" className="block text-lg font-medium text-guardiao-cinza-escuro mb-2">
                Nova Senha
              </label>
              <input
                type="password"
                id="newPassword"
                value={passwords.newPassword}
                onChange={(e) => setPasswords(prev => ({ ...prev, newPassword: e.target.value }))}
                placeholder="Mínimo de 6 caracteres"
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-guardiao-azul min-h-[50px]"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-medium text-guardiao-cinza-escuro mb-2">
                Confirmar Nova Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={passwords.confirmPassword}
                onChange={(e) => setPasswords(prev => ({ ...prev, confirmPassword: e.target.value }))}
                placeholder="Digite a senha novamente"
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-guardiao-azul min-h-[50px]"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-base text-red-700 flex items-center gap-2">
                  <i className="bi bi-exclamation-circle"></i>
                  {error}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-guardiao-azul text-white rounded-xl hover:bg-blue-600
                         transition font-medium min-h-[50px] disabled:bg-gray-400"
              >
                {isLoading ? 'Salvando...' : 'Salvar Nova Senha'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowPasswordChange(false);
                  setPasswords({ newPassword: '', confirmPassword: '' });
                  setError('');
                }}
                className="px-6 py-3 bg-gray-200 text-guardiao-cinza-escuro rounded-xl
                         hover:bg-gray-300 transition font-medium min-h-[50px]"
                disabled={isLoading}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200
                   text-guardiao-cinza-escuro rounded-xl hover:bg-gray-300 transition
                   font-medium text-lg min-h-[50px]"
        >
          <i className="bi bi-arrow-left"></i>
          Voltar
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500
                   text-white rounded-xl hover:bg-red-600 transition font-medium
                   text-lg min-h-[50px]"
        >
          <i className="bi bi-box-arrow-right"></i>
          Sair da Conta
        </button>
      </div>
    </div>
  );
};

export default MinhaConta;
