import React, { useState } from 'react';

const FaleConosco: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro ao digitar
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu email';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Por favor, insira um email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, escreva sua mensagem';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">📧</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Fale Conosco
        </h1>
        <p className="text-xl text-guardiao-cinza-medio max-w-2xl mx-auto">
          Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-6">
            Envie sua Mensagem
          </h2>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-base text-green-700 flex items-center gap-2">
                <i className="bi bi-check-circle-fill"></i>
                Mensagem enviada com sucesso! Responderemos em breve.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className={`w-full px-4 py-3 text-lg border rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                         placeholder:text-guardiao-cinza-medio min-h-[50px]
                         ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                aria-label="Digite seu nome"
                disabled={isLoading}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 text-lg border rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                         placeholder:text-guardiao-cinza-medio min-h-[50px]
                         ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                aria-label="Digite seu email"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-guardiao-cinza-escuro mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={6}
                className={`w-full px-4 py-3 text-lg border rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-guardiao-azul focus:border-transparent
                         placeholder:text-guardiao-cinza-medio resize-none
                         ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                aria-label="Digite sua mensagem"
                disabled={isLoading}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-guardiao-azul text-white py-3 px-6 rounded-xl
                       hover:bg-blue-600 transition font-medium text-lg min-h-[50px]
                       disabled:bg-gray-400 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
              aria-label="Enviar mensagem"
            >
              {isLoading ? (
                <>
                  <i className="bi bi-arrow-repeat animate-spin"></i>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="bi bi-send"></i>
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-6">
              Outras Formas de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-envelope-fill text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-guardiao-cinza-escuro mb-1">Email</h4>
                  <p className="text-base text-guardiao-cinza-medio">
                    contato@guardiao-senior.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-whatsapp text-xl text-green-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-guardiao-cinza-escuro mb-1">WhatsApp</h4>
                  <p className="text-base text-guardiao-cinza-medio">
                    (11) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-clock-fill text-xl text-purple-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-guardiao-cinza-escuro mb-1">Horário</h4>
                  <p className="text-base text-guardiao-cinza-medio">
                    Segunda a Sexta, 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-guardiao-azul bg-opacity-5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
              Perguntas Frequentes?
            </h3>
            <p className="text-base text-guardiao-cinza-medio mb-4">
              Antes de enviar sua mensagem, que tal conferir se sua dúvida já foi respondida?
            </p>
            <a
              href="/recursos"
              className="inline-flex items-center gap-2 text-guardiao-azul hover:underline font-medium"
            >
              Ver Recursos
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
