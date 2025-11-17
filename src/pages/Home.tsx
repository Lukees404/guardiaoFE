
import React, { useRef, useEffect } from 'react';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import WelcomeSuggestions from '../components/WelcomeSuggestions';
import { useChat } from '../context/ChatContext';
import LoadingScreen from '../components/LoadingScreen';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';

const Home: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  // 1. Initial Loading State
  if (isLoading && messages.length === 0) {
    return <LoadingScreen />;
  }

  // 2. Welcome State
  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex flex-col h-full w-full max-w-5xl mx-auto items-center justify-center">
        <WelcomeSuggestions />
        <div className="w-full max-w-4xl mx-auto mt-8">
            <ChatInput 
                onSendMessage={sendMessage} 
                isLoading={isLoading} 
                size="large"
            />
        </div>
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
    </div>
  );
};

export default Home;
