
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (name && email && password) {
      // Mock signup & login
      login(name, email);
      navigate('/');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-guardiao-cinza-escuro mb-6">
        Crie sua conta
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-guardiao-azul focus:outline-none text-lg"
            placeholder="Nome Completo"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-guardiao-azul focus:outline-none text-lg"
            placeholder="seu@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Sua Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-guardiao-azul focus:outline-none text-lg"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Confirme sua Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-guardiao-azul focus:outline-none text-lg"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors mt-6"
        >
          Cadastrar
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-guardiao-cinza-medio">Já tem conta? </span>
        <Link 
          to="/login" 
          className="text-guardiao-azul hover:underline font-medium"
        >
          Faça Login
        </Link>
      </div>
    </>
  );
}
