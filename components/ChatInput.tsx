
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import MicrophoneIcon from './icons/MicrophoneIcon';
import PaperPlaneIcon from './icons/PaperPlaneIcon';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const hasText = inputValue.trim().length > 0;

  const handleSend = () => {
    if (hasText && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = `${scrollHeight}px`;
    }
  }, [inputValue]);

  return (
    <div className="p-4">
        <div className="w-full flex items-end gap-3 bg-guardiao-branco p-3 rounded-xl border border-gray-200 shadow-soft">
        <textarea
            ref={textAreaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escreva sua dúvida aqui... Ex: Recebi um SMS sobre um prêmio."
            className="flex-1 bg-transparent border-none focus:ring-0 resize-none p-2 placeholder-guardiao-cinza-medio text-guardiao-cinza-escuro text-xl outline-none max-h-40"
            rows={1}
            disabled={isLoading}
        />
        <button
            onClick={handleSend}
            disabled={isLoading || !hasText}
            className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 ${hasText ? 'bg-guardiao-azul' : 'bg-gray-300'}`}
            aria-label={hasText ? "Enviar mensagem" : "Gravar mensagem de voz"}
        >
            {hasText ? <PaperPlaneIcon /> : <MicrophoneIcon />}
        </button>
        </div>
    </div>
  );
};

export default ChatInput;