import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FontSizeControl from '../components/FontSizeControl';
import { FontSize } from '../types';

const MainLayout: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [fontSize, setFontSize] = useState<FontSize>('text-lg');
  const [showConfigMenu, setShowConfigMenu] = useState(false);

  const handleNewChat = () => {
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Verificar se está na página home
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col bg-guardiao-cinza-claro ${fontSize}`}>
      {/* Header */}
      <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
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

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
              <Link
                to="/como-funciona"
                className="text-lg font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition"
              >
                Como funciona
              </Link>
              <Link
                to="/recursos"
                className="text-lg font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition"
              >
                Recursos
              </Link>
              <Link
                to="/sobre"
                className="text-lg font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition"
              >
                Sobre
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* New Chat Button - Only on home page */}
              {isHomePage && (
                <button
                  onClick={handleNewChat}
                  className="flex items-center gap-2 px-4 py-2 bg-guardiao-azul text-white
                           rounded-lg hover:bg-blue-600 transition font-medium text-base min-h-[44px]"
                  aria-label="Iniciar novo chat"
                >
                  <i className="bi bi-plus-lg text-lg"></i>
                  <span className="hidden sm:inline">Novo Chat</span>
                </button>
              )}

              {/* Settings Menu */}
              {isAuthenticated && (
                <div className="relative">
                  <button
                    onClick={() => setShowConfigMenu(!showConfigMenu)}
                    className="w-11 h-11 flex items-center justify-center bg-guardiao-azul text-white
                             rounded-full hover:bg-blue-600 transition"
                    aria-label="Configurações"
                    aria-expanded={showConfigMenu}
                  >
                    <i className="bi bi-gear text-xl"></i>
                  </button>

                  {/* Dropdown Menu */}
                  {showConfigMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        to="/minha-conta"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                        onClick={() => setShowConfigMenu(false)}
                      >
                        <i className="bi bi-person text-xl text-guardiao-azul"></i>
                        <span className="text-base">Minha Conta</span>
                      </Link>
                      <Link
                        to="/acessibilidade"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                        onClick={() => setShowConfigMenu(false)}
                      >
                        <i className="bi bi-universal-access text-xl text-guardiao-azul"></i>
                        <span className="text-base">Acessibilidade</span>
                      </Link>
                      <Link
                        to="/configuracoes"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                        onClick={() => setShowConfigMenu(false)}
                      >
                        <i className="bi bi-question-circle text-xl text-guardiao-azul"></i>
                        <span className="text-base">Ajuda</span>
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <button
                        onClick={() => {
                          setShowConfigMenu(false);
                          handleLogout();
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition w-full text-left"
                      >
                        <i className="bi bi-box-arrow-right text-xl text-red-500"></i>
                        <span className="text-base text-red-500">Sair</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Login Button - If not authenticated */}
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 bg-guardiao-azul text-white
                           rounded-lg hover:bg-blue-600 transition font-medium text-base min-h-[44px]"
                >
                  <i className="bi bi-box-arrow-in-right text-lg"></i>
                  <span>Entrar</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center gap-4 mt-4 overflow-x-auto pb-2" aria-label="Navegação móvel">
            <Link
              to="/como-funciona"
              className="text-base font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition whitespace-nowrap"
            >
              Como funciona
            </Link>
            <Link
              to="/recursos"
              className="text-base font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition whitespace-nowrap"
            >
              Recursos
            </Link>
            <Link
              to="/sobre"
              className="text-base font-medium text-guardiao-cinza-escuro hover:text-guardiao-azul transition whitespace-nowrap"
            >
              Sobre
            </Link>
          </nav>

          {/* Font Size Control */}
          <div className="mt-4">
            <FontSizeControl currentSize={fontSize} onSizeChange={setFontSize} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet context={{ fontSize }} />
      </main>

      {/* Footer */}
      <footer className="bg-guardiao-branco border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Link
              to="/termos"
              className="text-base sm:text-lg text-guardiao-cinza-medio hover:text-guardiao-azul transition font-medium"
            >
              Termos de Uso
            </Link>
            <span className="hidden sm:inline text-guardiao-cinza-medio">|</span>
            <Link
              to="/fale-conosco"
              className="text-base sm:text-lg text-guardiao-cinza-medio hover:text-guardiao-azul transition font-medium"
            >
              Fale Conosco
            </Link>
          </div>
          <div className="text-center mt-4 text-sm text-guardiao-cinza-medio">
            © {new Date().getFullYear()} Guardião Senior - Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
