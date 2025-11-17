
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Mock login - in a real app, you'd call an API
      login('User Florencio', email);
      navigate('/');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-guardiao-cinza-escuro mb-6">
        Acessar sua conta
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">
            Seu Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">
            Sua Senha:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          Entrar
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          to="/esqueci-senha" 
          className="text-guardiao-azul hover:underline"
        >
          Esqueci a senha
        </Link>
      </div>

      <div className="mt-4 text-center">
        <span className="text-guardiao-cinza-medio">Não tem conta? </span>
        <Link 
          to="/cadastro" 
          className="text-guardiao-azul hover:underline font-medium"
        >
          Cadastre-se
        </Link>
      </div>
    </>
  );
}