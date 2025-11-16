import React from 'react';

const Recursos: React.FC = () => {
  const resources = [
    {
      category: 'Golpes Comuns',
      icon: 'bi-exclamation-triangle-fill',
      color: 'bg-red-100 text-red-600',
      items: [
        {
          title: 'Email Falso (Phishing)',
          description: 'Nunca clique em links suspeitos. Verifique o remetente completo antes de abrir anexos.',
          icon: 'bi-envelope-exclamation'
        },
        {
          title: 'Ligações Fraudulentas',
          description: 'Bancos nunca pedem senha por telefone. Desligue e ligue você mesmo para o número oficial.',
          icon: 'bi-telephone-x'
        },
        {
          title: 'Golpe do WhatsApp',
          description: 'Se alguém pedir dinheiro, confirme por ligação. Golpistas clonam contas para enganar familiares.',
          icon: 'bi-whatsapp'
        },
        {
          title: 'Sites Falsos',
          description: 'Verifique se o endereço tem cadeado (https://) e se o nome está correto antes de digitar dados.',
          icon: 'bi-globe'
        }
      ]
    },
    {
      category: 'Dicas de Segurança',
      icon: 'bi-shield-check',
      color: 'bg-green-100 text-green-600',
      items: [
        {
          title: 'Senhas Fortes',
          description: 'Use pelo menos 12 caracteres com letras, números e símbolos. Uma senha diferente para cada site.',
          icon: 'bi-key-fill'
        },
        {
          title: 'Verificação em Duas Etapas',
          description: 'Ative sempre que possível. Adiciona uma camada extra de proteção à sua conta.',
          icon: 'bi-shield-lock'
        },
        {
          title: 'Atualizações',
          description: 'Mantenha seu celular e computador sempre atualizados. Correções de segurança são importantes.',
          icon: 'bi-arrow-clockwise'
        },
        {
          title: 'Wi-Fi Público',
          description: 'Evite acessar bancos ou fazer compras em redes Wi-Fi públicas. Use sua internet móvel.',
          icon: 'bi-wifi'
        }
      ]
    },
    {
      category: 'Redes Sociais',
      icon: 'bi-people-fill',
      color: 'bg-blue-100 text-blue-600',
      items: [
        {
          title: 'Privacidade',
          description: 'Configure suas contas para "privado". Controle quem pode ver suas fotos e informações.',
          icon: 'bi-eye-slash'
        },
        {
          title: 'Informações Pessoais',
          description: 'Não compartilhe endereço, telefone ou onde está em tempo real. Proteja sua privacidade.',
          icon: 'bi-person-x'
        },
        {
          title: 'Solicitações de Amizade',
          description: 'Aceite apenas pessoas que conhece. Perfis falsos são comuns e podem ser golpistas.',
          icon: 'bi-person-plus'
        },
        {
          title: 'Compartilhamentos',
          description: 'Verifique antes de compartilhar. Notícias falsas se espalham rapidamente.',
          icon: 'bi-share'
        }
      ]
    },
    {
      category: 'Compras Online',
      icon: 'bi-cart-fill',
      color: 'bg-purple-100 text-purple-600',
      items: [
        {
          title: 'Sites Confiáveis',
          description: 'Compre em lojas conhecidas. Pesquise reputação antes de comprar em sites desconhecidos.',
          icon: 'bi-shop'
        },
        {
          title: 'Formas de Pagamento',
          description: 'Prefira cartão de crédito ou sistemas de pagamento seguros. Evite transferências diretas.',
          icon: 'bi-credit-card'
        },
        {
          title: 'Ofertas Tentadoras',
          description: 'Desconfie de preços muito baixos. Se está barato demais, pode ser golpe.',
          icon: 'bi-tag'
        },
        {
          title: 'Comprovantes',
          description: 'Sempre guarde comprovantes e e-mails de confirmação. Importante para reclamações.',
          icon: 'bi-file-earmark-text'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Recursos de Segurança
        </h1>
        <p className="text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Guia completo de consulta rápida para sua segurança digital
        </p>
      </div>

      {/* Resources Grid */}
      <div className="space-y-12">
        {resources.map((resource, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 ${resource.color} rounded-full flex items-center justify-center`}>
                <i className={`bi ${resource.icon} text-2xl`}></i>
              </div>
              <h2 className="text-3xl font-bold text-guardiao-cinza-escuro">
                {resource.category}
              </h2>
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {resource.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="border-2 border-gray-100 rounded-xl p-6 hover:border-guardiao-azul
                           hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-guardiao-azul bg-opacity-10 rounded-full
                                  flex items-center justify-center flex-shrink-0">
                      <i className={`bi ${item.icon} text-xl text-guardiao-azul`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-guardiao-cinza-medio leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Section */}
      <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="bi bi-exclamation-circle-fill text-2xl text-white"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-700 mb-3">
              Se você foi vítima de golpe
            </h3>
            <ul className="space-y-2 text-lg text-guardiao-cinza-escuro">
              <li className="flex items-center gap-2">
                <i className="bi bi-1-circle-fill text-red-600"></i>
                Entre em contato imediatamente com seu banco
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-2-circle-fill text-red-600"></i>
                Registre um boletim de ocorrência (online ou presencial)
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-3-circle-fill text-red-600"></i>
                Troque todas as suas senhas
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-4-circle-fill text-red-600"></i>
                Avise seus contatos se foi pelo WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
