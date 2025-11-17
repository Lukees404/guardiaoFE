import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getChatResponse } from '../services/geminiService';
import MessageBubble from '../components/MessageBubble';
import ChatInput from '../components/ChatInput';
import TypingIndicator from '../components/TypingIndicator';
import WelcomeSuggestions from '../components/WelcomeSuggestions';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponseText = await getChatResponse(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: "Desculpe, não consegui processar sua pergunta. Tente novamente.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto bg-guardiao-branco rounded-xl shadow-soft">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.length === 0 && !isLoading ? (
          <WelcomeSuggestions />
        ) : (
          messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
        )}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default Home;
