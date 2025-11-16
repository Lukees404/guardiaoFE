import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender, timestamp }) => {
  const isUser = sender === 'user';

  // Renderizar markdown apenas para mensagens do assistente
  const renderMessage = () => {
    if (isUser) {
      return <p className="text-lg leading-relaxed whitespace-pre-wrap">{message}</p>;
    }

    // Converte Markdown para HTML (parse retorna string de forma síncrona)
    const rawHTML = marked.parse(message, { async: false }) as string;
    // Sanitiza o HTML para segurança
    const cleanHTML = DOMPurify.sanitize(rawHTML);

    return (
      <div 
        className="markdown-content text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
    );
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-2xl px-6 py-4 rounded-2xl shadow-sm ${
          isUser 
            ? 'bg-guardiao-azul text-white' 
            : 'bg-white text-guardiao-cinza-escuro border border-gray-200'
        }`}
      >
        {renderMessage()}
        {timestamp && (
          <span className={`text-xs mt-2 block ${
            isUser ? 'text-blue-100' : 'text-gray-400'
          }`}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
