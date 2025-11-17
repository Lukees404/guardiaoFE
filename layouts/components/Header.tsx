
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import LogoIcon from './icons/LogoIcon';

export default function Header() {
  const { resetChat } = useChat();

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `text-lg font-medium ${
      isActive ? 'text-guardiao-azul' : 'text-guardiao-cinza-medio'
    } hover:text-guardiao-azul transition-colors duration-200`;

  return (
    <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={resetChat}>
            <LogoIcon className="h-10 w-10 text-guardiao-cinza-escuro" />
            <span className="text-2xl font-bold text-guardiao-cinza-escuro hidden sm:block">
              Guardião Senior
            </span>
          </Link>

          {/* Navegação */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <NavLink to="/como-funciona" className={navLinkClass}>
              Como funciona
            </NavLink>
            <NavLink to="/recursos" className={navLinkClass}>
              Recursos
            </NavLink>
            <NavLink to="/sobre" className={navLinkClass}>
              Sobre
            </NavLink>
             <Link
                to="/configuracoes"
                className="w-12 h-12 flex items-center justify-center rounded-full text-guardiao-cinza-medio hover:bg-gray-200 transition-colors"
                aria-label="Configurações"
            >
                <i className="bi bi-gear-fill text-2xl"></i>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
