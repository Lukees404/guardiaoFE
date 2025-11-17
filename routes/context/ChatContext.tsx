import React, { createContext, useState, useContext, ReactNode, useCallback, useRef, useEffect } from 'react';
import { Message } from '../types';
import { Chat } from '@google/genai';
import { createChat } from '../services/geminiService';

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  resetChat: () => void;
  chat: React.MutableRefObject<Chat | null>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chat = useRef<Chat | null>(null);

  useEffect(() => {
    if (!chat.current) {
        chat.current = createChat();
    }
  }, []);

  const resetChat = useCallback(() => {
    setMessages([]);
    setIsLoading(false);
    chat.current = createChat();
  }, []);

  return (
    <ChatContext.Provider value={{ messages, setMessages, isLoading, setIsLoading, resetChat, chat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
