
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-guardiao-branco border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <Link to="/termos-de-uso" className="text-base text-guardiao-cinza-medio hover:text-guardiao-azul transition-colors">
          Termos de Uso
        </Link>
        <Link to="/fale-conosco" className="text-base text-guardiao-cinza-medio hover:text-guardiao-azul transition-colors">
          Fale Conosco
        </Link>
      </div>
    </footer>
  );
}