import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Configuracoes: React.FC = () => {
  const { user } = useAuth();

  const menuItems = [
    {
      title: 'Minha Conta',
      description: 'Visualize e edite suas informações pessoais',
      icon: 'bi-person-circle',
      link: '/minha-conta',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Acessibilidade',
      description: 'Ajuste o tamanho do texto e outras opções',
      icon: 'bi-universal-access',
      link: '/acessibilidade',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Ajuda',
      description: 'Tire suas dúvidas sobre segurança digital',
      icon: 'bi-question-circle',
      link: '/recursos',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Como Funciona',
      description: 'Aprenda a usar o Guardião Senior',
      icon: 'bi-info-circle',
      link: '/como-funciona',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Fale Conosco',
      description: 'Entre em contato com nossa equipe',
      icon: 'bi-envelope',
      link: '/fale-conosco',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Termos de Uso',
      description: 'Leia nossos termos e condições',
      icon: 'bi-file-earmark-text',
      link: '/termos',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">⚙️</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Configurações
        </h1>
        {user && (
          <p className="text-xl text-guardiao-cinza-medio">
            Olá, <strong>{user.name}</strong>! Gerencie suas preferências
          </p>
        )}
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all
                     hover:scale-105 group"
          >
            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-4`}>
              <i className={`bi ${item.icon} text-3xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2 group-hover:text-guardiao-azul transition">
              {item.title}
            </h3>
            <p className="text-base text-guardiao-cinza-medio">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-guardiao-azul bg-opacity-5 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4 flex items-center gap-3">
          <i className="bi bi-lightbulb-fill text-guardiao-azul"></i>
          Dicas Rápidas
        </h2>
        <div className="space-y-3 text-lg text-guardiao-cinza-medio">
          <p className="flex items-start gap-3">
            <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
            <span>Use a seção <strong>Acessibilidade</strong> para ajustar o tamanho do texto</span>
          </p>
          <p className="flex items-start gap-3">
            <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
            <span>Acesse <strong>Recursos</strong> para ver dicas de segurança organizadas</span>
          </p>
          <p className="flex items-start gap-3">
            <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
            <span>Entre em <strong>Minha Conta</strong> para alterar sua senha</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
