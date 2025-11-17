
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Message } from '../types';

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  resetChat: () => void;
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const getPredefinedResponse = (text: string): string => {
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes('pix')) {
        return "Cuidado com golpes de PIX! Nunca envie dinheiro para chaves aleatórias ou pessoas que você não conhece. Sempre confirme com a pessoa por uma ligação de voz antes de transferir. Se uma oferta parece boa demais para ser verdade, provavelmente é um golpe.";
    }
    if (lowerCaseText.includes('link')) {
        return "Não clique em links suspeitos! Golpistas enviam links para roubar seus dados. Antes de clicar, verifique se o remetente é confiável. Se for de um banco ou loja, vá diretamente ao site oficial em vez de usar o link da mensagem.";
    }
    if (lowerCaseText.includes('senha')) {
        return "Nunca compartilhe sua senha com ninguém! Seu banco, o governo ou qualquer empresa séria NUNCA pedirão sua senha por mensagem, email ou telefone. Crie senhas fortes, com letras, números e símbolos, e não use a mesma senha para tudo.";
    }
    if (lowerCaseText.includes('ajuda') || lowerCaseText.includes('socorro')) {
        return "Estou aqui para ajudar! Por favor, descreva sua dúvida. Você pode me perguntar sobre mensagens suspeitas, pedidos de dinheiro, links estranhos, ou qualquer coisa que pareça um golpe na internet.";
    }
    return "Não entendi muito bem sua pergunta. Você pode tentar explicar de outra forma? Lembre-se, estou aqui para ajudar com dúvidas sobre segurança na internet, como mensagens e links suspeitos.";
};


export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resetChat = useCallback(() => {
    setMessages([]);
    setIsLoading(false);
  }, []);

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
        const botResponseText = getPredefinedResponse(text);
        const botMessage: Message = {
            id: `bot-${Date.now()}`,
            text: botResponseText,
            sender: 'bot',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
    }, 1500);
  }, []);


  return (
    <ChatContext.Provider value={{ messages, setMessages, isLoading, setIsLoading, resetChat, sendMessage }}>
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
