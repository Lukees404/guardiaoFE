
import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
    { name: 'Raffaela Beatriz', role: 'Líder de Pesquisa', avatar: 'https://picsum.photos/id/1027/200/200' },
    { name: 'Thomas Oliveira', role: 'Pesquisador Técnico', avatar: 'https://picsum.photos/id/1005/200/200' },
    { name: 'Rafael Nazareth', role: 'Líder de Design', avatar: 'https://picsum.photos/id/64/200/200' },
    { name: 'Gabrielly Ramos', role: 'Especialista em Conteúdo', avatar: 'https://picsum.photos/id/1011/200/200' },
    { name: 'Renan Vinicius', role: 'Arquiteto de Solução', avatar: 'https://picsum.photos/id/1012/200/200' },
    { name: 'Marcos Vinicius', role: 'Engenheiro de Segurança', avatar: 'https://picsum.photos/id/1025/200/200' },
    { name: 'Janaína Ferreira', role: 'Analista de Dados', avatar: 'https://picsum.photos/id/1014/200/200' },
    { name: 'Pedro Paulo', role: 'Líder de Ética', avatar: 'https://picsum.photos/id/1029/200/200' },
    { name: 'Daniel Silva', role: 'Gerente de Aplicação', avatar: 'https://picsum.photos/id/1031/200/200' },
];

export default function Sobre() {
  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Sobre Nós</h1>
            <p className="mt-4 text-xl text-guardiao-cinza-medio">
                Nossa missão é criar um ambiente digital mais seguro para você.
            </p>
        </div>
        
        <div className="text-lg text-guardiao-cinza-escuro space-y-4 mb-16 text-justify">
            <p>O Guardião Sênior nasceu de uma preocupação real: a internet pode ser um lugar confuso e, às vezes, perigoso. Nossa equipe acredita que todos, sem exceção, têm o direito de aproveitar todos os benefícios da tecnologia com total confiança e segurança.</p>
            <p>Criamos esta ferramenta para ser um porto seguro, onde você pode perguntar sobre qualquer dúvida de segurança digital e receber uma orientação clara, simples e imediata. Ele foi criado com muito cuidado, pensando em ser um parente próximo que usa, que fala a sua língua e está sempre disponível para ajudar.</p>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-guardiao-cinza-escuro">Nossa Equipe</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member) => (
            <div key={member.name} className="text-center">
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-semibold text-guardiao-cinza-escuro">{member.name}</h4>
                <p className="text-sm text-guardiao-cinza-medio">{member.role}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}