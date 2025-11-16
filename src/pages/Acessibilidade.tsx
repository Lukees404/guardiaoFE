import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FontSizeControl from '../components/FontSizeControl';
import { FontSize } from '../types';

const Acessibilidade: React.FC = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState<FontSize>('text-lg');

  const features = [
    {
      icon: 'bi-type',
      title: 'Tamanho do Texto',
      description: 'Ajuste o tamanho da fonte em 3 níveis diferentes para facilitar a leitura.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'bi-eye-fill',
      title: 'Alto Contraste',
      description: 'Cores com contraste 7:1 para melhor visibilidade, seguindo padrões WCAG AAA.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'bi-keyboard',
      title: 'Navegação por Teclado',
      description: 'Todos os elementos podem ser acessados usando apenas o teclado (Tab, Enter, Esc).',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'bi-hand-index',
      title: 'Botões Grandes',
      description: 'Todos os botões têm pelo menos 44x44 pixels para facilitar o toque.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: 'bi-soundwave',
      title: 'Leitores de Tela',
      description: 'Compatível com leitores de tela como NVDA, JAWS e VoiceOver.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: 'bi-mouse2',
      title: 'Scrollbar Aumentada',
      description: 'Barra de rolagem 2x maior para facilitar a navegação.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 py-12 ${fontSize}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">♿</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Acessibilidade
        </h1>
        <p className="text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Desenvolvido para todos, sem exceção
        </p>
      </div>

      {/* Font Size Control Demo */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-6">
          Ajustar Tamanho do Texto
        </h2>
        <p className="text-lg text-guardiao-cinza-medio mb-6">
          Experimente os diferentes tamanhos de fonte disponíveis. Esta preferência é aplicada
          em todas as páginas do site.
        </p>

        <FontSizeControl currentSize={fontSize} onSizeChange={setFontSize} />

        <div className="mt-8 p-6 bg-guardiao-azul bg-opacity-5 rounded-xl">
          <p className="text-guardiao-cinza-escuro leading-relaxed">
            Este é um exemplo de texto. Você pode ver como o tamanho da fonte muda quando você
            seleciona diferentes opções acima. Escolha o tamanho que for mais confortável para você!
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-8 text-center">
          Recursos de Acessibilidade
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                <i className={`bi ${feature.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WCAG Compliance */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="bi bi-award-fill text-4xl text-green-600"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-4">
              Padrão WCAG AAA
            </h2>
            <p className="text-lg text-guardiao-cinza-medio mb-4">
              O Guardião Senior segue as <strong>Web Content Accessibility Guidelines (WCAG) nível AAA</strong>,
              o mais alto padrão de acessibilidade web internacional.
            </p>
            <p className="text-lg text-guardiao-cinza-medio">
              Isso significa que nosso site é projetado para ser utilizável por pessoas com diferentes
              capacidades, incluindo deficiências visuais, auditivas, motoras e cognitivas.
            </p>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-6">
          Atalhos de Teclado
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <kbd className="px-3 py-2 bg-gray-200 rounded text-sm font-mono">Tab</kbd>
            <span className="text-lg text-guardiao-cinza-medio">
              Navegar entre os elementos da página
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <kbd className="px-3 py-2 bg-gray-200 rounded text-sm font-mono">Enter</kbd>
            <span className="text-lg text-guardiao-cinza-medio">
              Ativar botões e links
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <kbd className="px-3 py-2 bg-gray-200 rounded text-sm font-mono">Esc</kbd>
            <span className="text-lg text-guardiao-cinza-medio">
              Fechar menus e diálogos
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <kbd className="px-3 py-2 bg-gray-200 rounded text-sm font-mono">Setas</kbd>
            <span className="text-lg text-guardiao-cinza-medio">
              Navegar dentro de listas e menus
            </span>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-guardiao-azul bg-opacity-5 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-4">
          Encontrou alguma barreira de acessibilidade?
        </h2>
        <p className="text-xl text-guardiao-cinza-medio mb-8">
          Queremos que o Guardião Senior seja acessível para todos. Se você encontrar qualquer
          dificuldade, por favor, nos avise!
        </p>
        <button
          onClick={() => navigate('/fale-conosco')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-guardiao-azul text-white
                   rounded-xl hover:bg-blue-600 transition font-medium text-lg min-h-[50px]"
        >
          <i className="bi bi-envelope text-xl"></i>
          Reportar Problema
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-guardiao-cinza-escuro
                   rounded-xl hover:bg-gray-300 transition font-medium text-lg min-h-[50px]"
        >
          <i className="bi bi-arrow-left"></i>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Acessibilidade;
