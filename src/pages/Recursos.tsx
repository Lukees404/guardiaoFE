
import React from 'react';
import { Resource } from '../types';

const resources: Resource[] = [
  {
    title: 'Golpes Mais Comuns',
    description: 'Aprenda a identificar os golpes de phishing, falsos prêmios e boletos falsos.',
    icon: 'bi-exclamation-triangle-fill'
  },
  {
    title: 'Dicas de Segurança no WhatsApp',
    description: 'Configure a verificação em duas etapas e saiba como não cair em golpes pelo app.',
    icon: 'bi-whatsapp'
  },
  {
    title: 'Como Criar Senhas Fortes',
    description: 'Dicas para criar e gerenciar senhas que protegem suas contas de verdade.',
    icon: 'bi-key-fill'
  },
  {
    title: 'Segurança em Redes Sociais',
    description: 'Proteja suas informações pessoais no Facebook, Instagram e outras redes.',
    icon: 'bi-people-fill'
  },
  {
    title: 'Cuidado com Compras Online',
    description: 'Verifique a reputação de lojas online e pague com segurança.',
    icon: 'bi-cart-check-fill'
  },
  {
    title: 'Protegendo seu Celular',
    description: 'Dicas essenciais para manter seu smartphone seguro contra invasores.',
    icon: 'bi-phone-fill'
  }
];

export default function Recursos() {
  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Recursos</h1>
        <p className="mt-4 text-xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Um guia de consulta rápida com dicas de segurança e descrições dos golpes mais comuns.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div key={resource.title} className="p-6 bg-guardiao-cinza-claro rounded-xl flex flex-col items-start hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-guardiao-azul text-white rounded-full flex items-center justify-center mb-4">
              <i className={`bi ${resource.icon} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-semibold text-guardiao-cinza-escuro mb-2">{resource.title}</h3>
            <p className="text-guardiao-cinza-medio">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}