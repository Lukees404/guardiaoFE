
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

const ChatHeader: React.FC = () => {
    const { resetChat } = useChat();
    const navigate = useNavigate();

    const handleBack = () => {
        resetChat();
    };

    return (
        <header className="flex-shrink-0 bg-guardiao-branco/90 backdrop-blur-sm p-3 border-b border-gray-200 w-full sticky top-0 z-10">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <button 
                    onClick={handleBack} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-semibold bg-guardiao-azul text-white hover:bg-blue-600 transition-colors transform active:scale-95"
                    aria-label="Voltar para a tela inicial"
                >
                    <i className="bi bi-chevron-left"></i>
                    Voltar
                </button>
                
                <div className="absolute left-1/2 -translate-x-1/2">
                    {/* The logo can be placed here if desired in the future, as in the Figma prototype */}
                </div>

                <button 
                    onClick={() => navigate('/configuracoes')} 
                    className="w-12 h-12 flex items-center justify-center rounded-full text-guardiao-cinza-medio hover:bg-gray-200 transition-colors" 
                    aria-label="Configurações"
                >
                    <i className="bi bi-gear-fill text-2xl"></i>
                </button>
            </div>
        </header>
    );
};

export default ChatHeader;
