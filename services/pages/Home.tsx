
import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import { getChatResponse } from '../services/geminiService';
import MessageBubble from '../components/MessageBubble';
import ChatInput from '../components/ChatInput';
import TypingIndicator from '../components/TypingIndicator';
import WelcomeSuggestions from '../components/WelcomeSuggestions';
import { useChat } from '../context/ChatContext';
import LoadingScreen from '../components/LoadingScreen';
import ChatHeader from '../components/ChatHeader';

const Home: React.FC = () => {
  const { messages, setMessages, isLoading, setIsLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
  
  // 1. Initial Loading State
  if (isLoading && messages.length === 0) {
    return <LoadingScreen />;
  }

  // 2. Welcome State
  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex flex-col h-full w-full max-w-4xl mx-auto justify-center">
        <div className="mb-8">
            <WelcomeSuggestions />
        </div>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    );
  }

  // 3. Active Chat State
  return (
    <div className="flex flex-col h-full w-full">
      <ChatHeader />
      <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
        {messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default Home;
