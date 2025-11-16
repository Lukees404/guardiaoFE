import React from 'react';
import { Link } from 'react-router-dom';

const ComoFunciona: React.FC = () => {
  const steps = [
    {
      icon: 'bi-chat-dots',
      title: '1. Faça sua Pergunta',
      description: 'Digite ou fale sua dúvida sobre segurança digital no chat. Nossa interface é simples e clara, pensada especialmente para você.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'bi-shield-check',
      title: '2. Receba Orientação',
      description: 'O Guardião analisa sua pergunta e fornece respostas claras e seguras, com exemplos práticos do dia a dia.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'bi-star-fill',
      title: '3. Navegue com Segurança',
      description: 'Aplique as dicas aprendidas no seu dia a dia e proteja-se contra golpes e fraudes online.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Como Funciona
        </h1>
        <p className="text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          O Guardião Senior é seu assistente pessoal de segurança digital.
          Simples, rápido e sempre disponível para te ajudar!
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            {/* Icon */}
            <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <i className={`bi ${step.icon} text-4xl`}></i>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4 text-center">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-guardiao-cinza-medio text-center leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-8 text-center">
          Por que usar o Guardião Senior?
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="bi bi-lightning-fill text-2xl text-guardiao-azul"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                Respostas Rápidas
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                Obtenha orientações imediatas sobre suas dúvidas de segurança.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="bi bi-heart-fill text-2xl text-guardiao-azul"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                Linguagem Simples
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                Explicações claras, sem termos técnicos complicados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="bi bi-universal-access text-2xl text-guardiao-azul"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                Acessível
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                Textos grandes, alto contraste e navegação simples.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-guardiao-azul bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="bi bi-clock-fill text-2xl text-guardiao-azul"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                Disponível 24/7
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                Use quando quiser, sem horários limitados.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-guardiao-azul bg-opacity-5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-4">
          Pronto para começar?
        </h2>
        <p className="text-xl text-guardiao-cinza-medio mb-8">
          Experimente agora e navegue com mais segurança!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-guardiao-azul text-white
                   rounded-xl hover:bg-blue-600 transition font-medium text-lg min-h-[50px]"
        >
          <i className="bi bi-chat-dots text-xl"></i>
          Começar a Usar
        </Link>
      </div>
    </div>
  );
};

export default ComoFunciona;
