import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex gap-2 items-center">
          <span 
            className="w-3 h-3 bg-guardiao-cinza-medio rounded-full animate-bounce" 
            style={{ animationDelay: '0ms' }}
            aria-hidden="true"
          ></span>
          <span 
            className="w-3 h-3 bg-guardiao-cinza-medio rounded-full animate-bounce" 
            style={{ animationDelay: '150ms' }}
            aria-hidden="true"
          ></span>
          <span 
            className="w-3 h-3 bg-guardiao-cinza-medio rounded-full animate-bounce" 
            style={{ animationDelay: '300ms' }}
            aria-hidden="true"
          ></span>
        </div>
        <span className="sr-only">O assistente está digitando...</span>
      </div>
    </div>
  );
};

export default TypingIndicator;
