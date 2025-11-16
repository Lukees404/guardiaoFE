import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const VerificationCode: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Apenas um dígito por campo

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus no próximo campo
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Voltar ao campo anterior ao pressionar Backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }

    setCode(newCode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const fullCode = code.join('');

    if (fullCode.length !== 6) {
      setError('Por favor, insira o código completo de 6 dígitos');
      return;
    }

    setIsLoading(true);

    // Simular verificação
    setTimeout(() => {
      setIsLoading(false);

      // Código correto seria '123456' para simulação
      if (fullCode === '123456') {
        navigate('/nova-senha', { state: { email } });
      } else {
        setError('Código inválido. Tente novamente ou use 123456 para teste');
      }
    }, 1500);
  };

  const handleResendCode = () => {
    setCode(['', '', '', '', '', '']);
    setError('');
    // Simular reenvio
    alert('Código reenviado para ' + email);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-shield-lock text-3xl text-guardiao-azul"></i>
          </div>
          <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-2">
            Código de Verificação
          </h2>
          <p className="text-lg text-guardiao-cinza-medio">
            Digite o código enviado para
          </p>
          <p className="text-base font-medium text-guardiao-azul">
            {email || 'seu email'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Input */}
          <div>
            <label className="block text-lg font-medium text-guardiao-cinza-escuro mb-4 text-center">
              Código de 6 dígitos
            </label>
            <div className="flex gap-2 justify-center" onPaste={handlePaste}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value.replace(/\D/, ''))}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                           sm:w-14 sm:h-16"
                  aria-label={`Dígito ${index + 1}`}
                  disabled={isLoading}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-guardiao-cinza-medio text-center">
              Para teste, use o código: <strong>123456</strong>
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
            aria-label="Verificar código"
          >
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin"></i>
                Verificando...
              </>
            ) : (
              <>
                <i className="bi bi-check-circle"></i>
                Verificar Código
              </>
            )}
          </button>

          {/* Resend Code */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleResendCode}
              className="text-base text-guardiao-azul hover:underline font-medium"
              disabled={isLoading}
            >
              Não recebeu o código? Reenviar
            </button>
          </div>
        </form>

        {/* Back Link */}
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

export default VerificationCode;
