import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-guardiao-cinza-claro">
      {/* Simple Header */}
      <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition w-fit">
            <div className="text-3xl sm:text-4xl">🛡️</div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-guardiao-cinza-escuro font-poppins">
                Guardião Senior
              </h1>
              <p className="text-xs sm:text-sm text-guardiao-cinza-medio">
                Seu assistente de segurança digital
              </p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <Outlet />
      </main>

      {/* Simple Footer */}
      <footer className="bg-guardiao-branco border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-guardiao-cinza-medio">
            © {new Date().getFullYear()} Guardião Senior - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
