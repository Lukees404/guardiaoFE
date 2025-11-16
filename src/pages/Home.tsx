import React, { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import WelcomeSuggestions from '../components/WelcomeSuggestions';
import ScrollToTop from '../components/ScrollToTop';
import TypingIndicator from '../components/TypingIndicator';
import { Message, FontSize } from '../types';

interface OutletContext {
  fontSize: FontSize;
}

const Home: React.FC = () => {
  const { fontSize = 'text-lg' } = useOutletContext<OutletContext>() || {};
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text: string) => {
    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simula resposta do assistente
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(text),
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes('email') || lowerText.includes('e-mail')) {
      return `**Atenção! Fique atento a estes sinais de e-mail falso:**

1. **Remetente suspeito** - Verifique o endereço de e-mail completo
2. **Erros de português** - E-mails oficiais raramente têm erros
3. **Senso de urgência** - "Clique agora ou perderá sua conta!"
4. **Links estranhos** - Passe o mouse sobre o link antes de clicar

**Dica:** Bancos e empresas sérias **NUNCA** pedem senhas por e-mail! 🔒`;
    }

    if (lowerText.includes('ligação') || lowerText.includes('telefone')) {
      return `**Se receber uma ligação suspeita:**

- ❌ **NÃO forneça** dados pessoais ou senhas
- ❌ **NÃO confirme** informações da sua conta
- ✅ **Desligue** e ligue você mesmo para a empresa
- ✅ **Use o número oficial** do site ou cartão

**Lembre-se:** Bancos **NUNCA** pedem senha por telefone! 📞🚫`;
    }

    if (lowerText.includes('senha')) {
      return `**Como criar uma senha segura:**

✅ **Use pelo menos 12 caracteres**
✅ **Misture letras, números e símbolos**
✅ **Evite dados pessoais** (aniversários, nomes)
✅ **Use uma senha diferente** para cada site

**Dica:** Crie uma frase fácil de lembrar!
Exemplo: "Meu1ºCarro-Foi1Fusca!" 🚗🔐`;
    }

    if (lowerText.includes('link')) {
      return `**Antes de clicar em qualquer link:**

1. **Passe o mouse** sobre o link (sem clicar)
2. **Veja o endereço completo** na parte de baixo
3. **Desconfie** de links encurtados (bit.ly, etc)
4. **Prefira digitar** o endereço no navegador

**Regra de ouro:** Na dúvida, **NÃO CLIQUE!** 🔗⚠️`;
    }

    return `Entendi sua pergunta! Estou aqui para ajudar você a navegar com segurança na internet.

**Posso te ajudar com:**
- Identificar golpes e fraudes
- Proteger suas senhas
- Usar redes sociais com segurança
- Reconhecer sites falsos

O que você gostaria de saber mais? 😊🛡️`;
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] bg-guardiao-cinza-claro">
      {/* Chat Window */}
      <div ref={chatWindowRef} className="flex-1 overflow-y-auto">
        <ChatWindow messages={messages} fontSize={fontSize} />
        {isLoading && <TypingIndicator />}

        {/* Sugestões (aparecem quando não há mensagens) */}
        {messages.length === 0 && (
          <WelcomeSuggestions onSelectSuggestion={handleSendMessage} />
        )}
      </div>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} />

      {/* Botão Voltar ao Topo */}
      <ScrollToTop chatWindowRef={chatWindowRef} />
    </div>
  );
};

export default Home;
