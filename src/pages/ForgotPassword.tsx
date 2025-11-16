import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validação básica
    if (!email) {
      setError('Por favor, insira seu email');
      return;
    }

    if (!email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }

    setIsLoading(true);

    // Simular envio de código
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);

      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/verificacao-codigo', { state: { email } });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-key text-3xl text-guardiao-azul"></i>
          </div>
          <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-2">
            Esqueceu sua senha?
          </h2>
          <p className="text-lg text-guardiao-cinza-medio">
            Não se preocupe! Vamos te ajudar a recuperá-la
          </p>
        </div>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
              >
                Email cadastrado
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
                aria-label="Digite seu email cadastrado"
                disabled={isLoading}
              />
              <p className="mt-2 text-sm text-guardiao-cinza-medio">
                Enviaremos um código de verificação para este email
              </p>
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
              aria-label="Enviar código de verificação"
            >
              {isLoading ? (
                <>
                  <i className="bi bi-arrow-repeat animate-spin"></i>
                  Enviando código...
                </>
              ) : (
                <>
                  <i className="bi bi-envelope"></i>
                  Enviar Código
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-check-circle text-3xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-2">
              Código Enviado!
            </h3>
            <p className="text-lg text-guardiao-cinza-medio mb-4">
              Enviamos um código de verificação para <strong>{email}</strong>
            </p>
            <p className="text-base text-guardiao-cinza-medio">
              Redirecionando...
            </p>
          </div>
        )}

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-base text-guardiao-azul hover:underline font-medium inline-flex items-center gap-2"
          >
            <i className="bi bi-arrow-left"></i>
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
