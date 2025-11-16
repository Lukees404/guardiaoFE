import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação
    if (!password || !confirmPassword) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setIsLoading(true);

    // Simular atualização de senha
    setTimeout(() => {
      setIsLoading(false);

      // Mostrar mensagem de sucesso e redirecionar
      alert('Senha alterada com sucesso!');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-lock-fill text-3xl text-guardiao-azul"></i>
          </div>
          <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-2">
            Nova Senha
          </h2>
          <p className="text-lg text-guardiao-cinza-medio">
            Crie uma senha forte para sua conta
          </p>
          {email && (
            <p className="text-base text-guardiao-cinza-medio mt-2">
              Conta: <strong>{email}</strong>
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Nova Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo de 6 caracteres"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Digite sua nova senha"
              disabled={isLoading}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Confirmar Nova Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Digite a senha novamente"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Confirme sua nova senha"
              disabled={isLoading}
            />
          </div>

          {/* Password Requirements */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-base text-guardiao-cinza-escuro font-medium mb-2">
              Requisitos da senha:
            </p>
            <ul className="space-y-1 text-sm text-guardiao-cinza-medio">
              <li className="flex items-center gap-2">
                <i className={`bi ${password.length >= 6 ? 'bi-check-circle-fill text-green-600' : 'bi-circle text-gray-400'}`}></i>
                Mínimo de 6 caracteres
              </li>
              <li className="flex items-center gap-2">
                <i className={`bi ${password === confirmPassword && password ? 'bi-check-circle-fill text-green-600' : 'bi-circle text-gray-400'}`}></i>
                Senhas coincidem
              </li>
            </ul>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-base text-red-700 flex items-center gap-2">
                <i className="bi bi-exclamation-circle"></i>
                {error}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-guardiao-azul text-white py-3 px-6 rounded-xl
                     hover:bg-blue-600 transition font-medium text-lg min-h-[50px]
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            aria-label="Alterar senha"
          >
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin"></i>
                Alterando senha...
              </>
            ) : (
              <>
                <i className="bi bi-check-circle"></i>
                Alterar Senha
              </>
            )}
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-base text-guardiao-cinza-medio hover:underline inline-flex items-center gap-2"
          >
            <i className="bi bi-arrow-left"></i>
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
