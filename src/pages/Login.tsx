import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (!email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-2">
            Bem-vindo de volta!
          </h2>
          <p className="text-lg text-guardiao-cinza-medio">
            Entre na sua conta para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Digite seu email"
              disabled={isLoading}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Digite sua senha"
              disabled={isLoading}
            />
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/esqueci-senha"
              className="text-base text-guardiao-azul hover:underline font-medium"
            >
              Esqueci minha senha
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-guardiao-azul text-white py-3 px-6 rounded-xl
                     hover:bg-blue-600 transition font-medium text-lg min-h-[50px]
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            aria-label="Entrar na conta"
          >
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin"></i>
                Entrando...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right"></i>
                Entrar
              </>
            )}
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-base text-guardiao-cinza-medio">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="text-guardiao-azul hover:underline font-medium">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
