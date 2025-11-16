import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import { Message } from '../types';

interface ChatWindowProps {
  messages: Message[];
  fontSize: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, fontSize }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window flex-1 overflow-y-auto p-6">
      <div className={fontSize}>
        {messages.length === 0 ? (
          <div className="text-center text-guardiao-cinza-medio mt-20">
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-2xl font-semibold mb-2">
              Olá! Sou o Guardião Senior
            </h2>
            <p className="text-xl">
              Estou aqui para ajudar você a navegar com segurança na internet
            </p>
            <p className="text-lg mt-2 text-guardiao-cinza-medio">
              Clique em uma sugestão abaixo ou digite sua pergunta
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <MessageBubble 
                key={msg.id} 
                message={msg.text} 
                sender={msg.sender} 
                timestamp={msg.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
