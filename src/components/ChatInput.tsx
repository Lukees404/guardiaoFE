import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // TODO: Integrar gravação de áudio real
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-guardiao-branco border-t">
      <div className="flex items-center gap-4 max-w-4xl mx-auto">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua pergunta..."
          className="flex-1 px-6 py-4 text-xl rounded-2xl border-2 border-gray-200 
                     focus:border-guardiao-azul focus:outline-none font-inter
                     placeholder:text-guardiao-cinza-medio"
        />
        
        {message.trim() === '' ? (
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`w-14 h-14 rounded-full flex items-center justify-center
                       ${isRecording ? 'bg-red-500' : 'bg-guardiao-azul'}
                       text-white text-2xl hover:opacity-90 transition shadow-lg`}
            aria-label={isRecording ? "Parar gravação" : "Iniciar gravação"}
          >
            <i className={`bi ${isRecording ? 'bi-stop-fill' : 'bi-mic-fill'}`}></i>
          </button>
        ) : (
          <button
            type="submit"
            className="w-14 h-14 rounded-full bg-guardiao-azul text-white 
                       text-2xl hover:opacity-90 transition flex items-center 
                       justify-center shadow-lg"
            aria-label="Enviar mensagem"
          >
            <i className="bi bi-send-fill"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default ChatInput;
