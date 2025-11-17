import React from 'react';

const WelcomeSuggestions: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-guardiao-cinza-escuro">
        Olá! Sou seu assistente de segurança digital.
      </h1>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-guardiao-cinza-escuro">
        Como posso ajudar hoje?
      </h2>
    </div>
  );
};

export default WelcomeSuggestions;