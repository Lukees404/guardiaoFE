
import React from 'react';

const steps = [
  {
    id: 1,
    icon: 'bi-mic-fill',
    title: '1. Você faz a pergunta',
    description: 'Na página inicial, você pode digitar sua dúvida (como "Recebi um link estranho, é golpe?") da mesma forma que você já faz no WhatsApp.'
  },
  {
    id: 2,
    icon: 'bi-cpu-fill',
    title: '2. Nós analisamos para você',
    description: 'Nosso assistente de inteligência artificial lê sua pergunta e compara sua situação com milhares de golpes e regras de segurança. Ele foi treinado para identificar táticas de golpistas.'
  },
  {
    id: 3,
    icon: 'bi-shield-check',
    title: '3. Você recebe uma orientação clara',
    description: 'Em segundos, você recebe uma resposta em português claro, explicando se aquilo é um golpe, o que você deve fazer para se proteger e quais são os seus direitos. Simples e seguro.'
  }
];

export default function ComoFunciona() {
  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Como Funciona</h1>
        <p className="mt-4 text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Entenda em 3 passos simples como o Guardião Sênior protege você.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center p-6 bg-guardiao-cinza-claro rounded-xl">
            <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-guardiao-azul text-white rounded-full flex items-center justify-center">
                    <i className={`bi ${step.icon} text-3xl`}></i>
                </div>
            </div>
            <h3 className="text-2xl font-semibold text-guardiao-cinza-escuro mb-2">{step.title}</h3>
            <p className="text-guardiao-cinza-medio">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
