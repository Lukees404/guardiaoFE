import React from 'react';
import { Suggestion } from '../types';

interface WelcomeSuggestionsProps {
  onSelectSuggestion: (text: string) => void;
}

const WelcomeSuggestions: React.FC<WelcomeSuggestionsProps> = ({ onSelectSuggestion }) => {
  const suggestions: Suggestion[] = [
    {
      id: '1',
      text: 'Como identificar um e-mail falso?',
      icon: 'bi-envelope-exclamation',
      category: 'security'
    },
    {
      id: '2',
      text: 'O que fazer se recebi uma ligação suspeita?',
      icon: 'bi-telephone-x',
      category: 'security'
    },
    {
      id: '3',
      text: 'Como criar uma senha segura?',
      icon: 'bi-shield-lock',
      category: 'security'
    },
    {
      id: '4',
      text: 'É seguro clicar em links de mensagens?',
      icon: 'bi-link-45deg',
      category: 'security'
    }
  ];

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-guardiao-cinza-escuro mb-4 text-center">
        💡 Dúvidas Frequentes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            onClick={() => onSelectSuggestion(suggestion.text)}
            className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 
                       rounded-xl hover:border-guardiao-azul hover:bg-blue-50 
                       transition-all duration-200 text-left shadow-sm
                       hover:shadow-md active:scale-95"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-guardiao-azul 
                           bg-opacity-10 flex items-center justify-center">
              <i className={`bi ${suggestion.icon} text-2xl text-guardiao-azul`}></i>
            </div>
            <span className="text-lg text-guardiao-cinza-escuro font-medium">
              {suggestion.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSuggestions;
