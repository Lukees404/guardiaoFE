import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (!email.includes('@')) {
      setError('Por favor, insira um email válido');
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

    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-2">
            Criar Conta
          </h2>
          <p className="text-lg text-guardiao-cinza-medio">
            Preencha seus dados para começar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Digite seu nome completo"
              disabled={isLoading}
            />
          </div>

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
              placeholder="Mínimo de 6 caracteres"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                       placeholder:text-guardiao-cinza-medio min-h-[50px]"
              aria-label="Digite sua senha"
              disabled={isLoading}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
            >
              Confirmar Senha
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
              aria-label="Confirme sua senha"
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-guardiao-azul text-white py-3 px-6 rounded-xl
                     hover:bg-blue-600 transition font-medium text-lg min-h-[50px]
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            aria-label="Criar conta"
          >
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin"></i>
                Criando conta...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus"></i>
                Criar Conta
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-base text-guardiao-cinza-medio">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-guardiao-azul hover:underline font-medium">
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
