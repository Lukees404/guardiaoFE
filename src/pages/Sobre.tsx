import React from 'react';

const Sobre: React.FC = () => {
  const team = [
    {
      name: 'Pedro Silva',
      role: 'Desenvolvedor Full Stack',
      icon: 'bi-code-slash'
    },
    {
      name: 'Equipe UX/UI',
      role: 'Design e Acessibilidade',
      icon: 'bi-palette'
    },
    {
      name: 'Consultores',
      role: 'Segurança Digital',
      icon: 'bi-shield-check'
    },
    {
      name: 'Comunidade',
      role: 'Feedback e Testes',
      icon: 'bi-people'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">🛡️</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Sobre o Guardião Senior
        </h1>
        <p className="text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Tecnologia simples para quem mais precisa
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-6 text-center">
          Nossa Missão
        </h2>
        <p className="text-lg text-guardiao-cinza-medio leading-relaxed mb-6">
          O <strong>Guardião Senior</strong> nasceu com um propósito claro: proteger pessoas acima de 60 anos
          contra golpes e fraudes digitais. Sabemos que a tecnologia pode ser intimidadora, e os golpistas
          aproveitam dessa dificuldade.
        </p>
        <p className="text-lg text-guardiao-cinza-medio leading-relaxed mb-6">
          Criamos um assistente digital que fala sua língua, sem termos complicados, com textos grandes
          e respostas diretas. Queremos que você navegue na internet com confiança e segurança.
        </p>
        <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
          Nossa missão é democratizar o conhecimento sobre segurança digital, tornando-o acessível
          para todos, independentemente da idade ou experiência com tecnologia.
        </p>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-heart-fill text-4xl text-blue-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-3">
            Simplicidade
          </h3>
          <p className="text-base text-guardiao-cinza-medio">
            Linguagem clara e interface intuitiva para facilitar o uso por todos.
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-shield-fill-check text-4xl text-green-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-3">
            Segurança
          </h3>
          <p className="text-base text-guardiao-cinza-medio">
            Informações confiáveis e atualizadas sobre proteção digital.
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-universal-access text-4xl text-purple-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-3">
            Acessibilidade
          </h3>
          <p className="text-base text-guardiao-cinza-medio">
            Design inclusivo seguindo os mais altos padrões de acessibilidade.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-8 text-center">
          Quem Faz o Guardião
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 bg-guardiao-azul bg-opacity-10 rounded-full
                            flex items-center justify-center mx-auto mb-4">
                <i className={`bi ${member.icon} text-4xl text-guardiao-azul`}></i>
              </div>
              <h3 className="text-xl font-bold text-guardiao-cinza-escuro mb-2">
                {member.name}
              </h3>
              <p className="text-base text-guardiao-cinza-medio">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl font-bold text-guardiao-azul mb-2">100%</div>
          <p className="text-lg text-guardiao-cinza-medio">Gratuito</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl font-bold text-guardiao-azul mb-2">24/7</div>
          <p className="text-lg text-guardiao-cinza-medio">Disponível</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl font-bold text-guardiao-azul mb-2">AAA</div>
          <p className="text-lg text-guardiao-cinza-medio">Acessibilidade</p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-guardiao-azul bg-opacity-5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro mb-4">
          Tem alguma dúvida ou sugestão?
        </h2>
        <p className="text-xl text-guardiao-cinza-medio mb-8">
          Adoraríamos ouvir você! Entre em contato conosco.
        </p>
        <a
          href="/fale-conosco"
          className="inline-flex items-center gap-2 px-8 py-4 bg-guardiao-azul text-white
                   rounded-xl hover:bg-blue-600 transition font-medium text-lg min-h-[50px]"
        >
          <i className="bi bi-envelope text-xl"></i>
          Fale Conosco
        </a>
      </div>
    </div>
  );
};

export default Sobre;
