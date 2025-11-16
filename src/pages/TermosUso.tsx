import React from 'react';

const TermosUso: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-guardiao-cinza-escuro mb-4">
          Termos de Uso
        </h1>
        <p className="text-lg text-guardiao-cinza-medio">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-8">
        {/* Seção 1 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            1. Aceitação dos Termos
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            Ao utilizar o Guardião Senior, você concorda com estes Termos de Uso. Se não concordar
            com qualquer parte destes termos, por favor, não utilize nosso serviço.
          </p>
        </section>

        {/* Seção 2 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            2. Descrição do Serviço
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed mb-4">
            O Guardião Senior é um assistente digital de segurança online, projetado para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-guardiao-cinza-medio ml-4">
            <li>Fornecer orientações sobre segurança digital</li>
            <li>Ajudar a identificar possíveis golpes e fraudes</li>
            <li>Educar sobre boas práticas de segurança online</li>
            <li>Responder dúvidas sobre proteção de dados pessoais</li>
          </ul>
        </section>

        {/* Seção 3 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            3. Limitações do Serviço
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed mb-4">
            O Guardião Senior é uma ferramenta educacional e informativa. Importante ressaltar que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-guardiao-cinza-medio ml-4">
            <li>Não substitui aconselhamento profissional especializado</li>
            <li>Não garante proteção absoluta contra fraudes</li>
            <li>Não se responsabiliza por decisões tomadas baseadas nas orientações</li>
            <li>As respostas são geradas automaticamente e podem conter imprecisões</li>
          </ul>
        </section>

        {/* Seção 4 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            4. Privacidade e Dados
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            Respeitamos sua privacidade. Não coletamos, armazenamos ou compartilhamos informações
            pessoais identificáveis. As conversas podem ser armazenadas localmente no seu dispositivo
            para melhorar sua experiência.
          </p>
        </section>

        {/* Seção 5 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            5. Uso Adequado
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed mb-4">
            Ao usar o Guardião Senior, você concorda em:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-guardiao-cinza-medio ml-4">
            <li>Usar o serviço apenas para fins lícitos e educacionais</li>
            <li>Não tentar burlar ou hackear o sistema</li>
            <li>Não usar o serviço para disseminar informações falsas</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
          </ul>
        </section>

        {/* Seção 6 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            6. Isenção de Responsabilidade
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            O serviço é fornecido "como está" sem garantias de qualquer tipo. Não nos
            responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais resultantes
            do uso ou incapacidade de uso do serviço.
          </p>
        </section>

        {/* Seção 7 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            7. Modificações nos Termos
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
            entrarão em vigor imediatamente após a publicação. Recomendamos que você revise
            periodicamente estes termos.
          </p>
        </section>

        {/* Seção 8 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            8. Contato
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da
            página "Fale Conosco".
          </p>
        </section>

        {/* Seção 9 */}
        <section>
          <h2 className="text-2xl font-bold text-guardiao-cinza-escuro mb-4">
            9. Lei Aplicável
          </h2>
          <p className="text-lg text-guardiao-cinza-medio leading-relaxed">
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos
            tribunais brasileiros competentes.
          </p>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t-2 border-gray-200">
          <p className="text-base text-guardiao-cinza-medio text-center">
            <strong>Guardião Senior</strong> - Comprometidos com sua segurança digital
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermosUso;
