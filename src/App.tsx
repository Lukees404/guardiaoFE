import React, { useState, useRef } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import WelcomeSuggestions from './components/WelcomeSuggestions';
import ScrollToTop from './components/ScrollToTop';
import TypingIndicator from './components/TypingIndicator';
import FontSizeControl from './components/FontSizeControl';
import { Message, FontSize } from './types';
import './styles/index.css';
import './styles/accessibility.css';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('text-lg');
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

    // Simula resposta do assistente (em produção, chamar API real)
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
    // Respostas de exemplo com Markdown
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

  const handleNewChat = () => {
    setMessages([]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-guardiao-cinza-claro">
      {/* Header */}
      <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🛡️</div>
            <div>
              <h1 className="text-2xl font-bold text-guardiao-cinza-escuro font-poppins">
                Guardião Senior
              </h1>
              <p className="text-sm text-guardiao-cinza-medio">
                Seu assistente de segurança digital
              </p>
            </div>
          </div>
          
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-4 py-2 bg-guardiao-azul text-white 
                       rounded-lg hover:bg-blue-600 transition font-medium"
          >
            <i className="bi bi-plus-lg"></i>
            <span>Novo Chat</span>
          </button>
        </div>
        
        {/* Controle de Fonte */}
        <div className="max-w-7xl mx-auto px-6 pb-4">
          <FontSizeControl 
            currentSize={fontSize}
            onSizeChange={setFontSize}
          />
        </div>
      </header>

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
}

export default App;
