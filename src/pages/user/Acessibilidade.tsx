
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';

type FontSizeOption = 'Padrão' | 'Grande' | 'Extra Grande';

export default function Acessibilidade() {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useSettings();

  const options: FontSizeOption[] = ['Padrão', 'Grande', 'Extra Grande'];

  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/configuracoes')} className="mb-8 flex items-center gap-2 text-guardiao-azul font-semibold">
            <i className="bi bi-arrow-left"></i> Voltar para Configurações
        </button>
        <div className="text-left mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Acessibilidade</h1>
        </div>
        
        <div className="space-y-4">
            <h2 className="text-xl font-medium text-guardiao-cinza-escuro">Tamanho do Texto</h2>
            {options.map((option) => (
                <div key={option} className="flex items-center">
                    <input
                        type="radio"
                        id={option}
                        name="fontSize"
                        value={option}
                        checked={fontSize === option}
                        onChange={() => setFontSize(option)}
                        className="h-5 w-5 text-guardiao-azul focus:ring-guardiao-azul border-gray-300"
                    />
                    <label htmlFor={option} className="ml-3 block text-lg text-guardiao-cinza-escuro">
                        {option}
                    </label>
                </div>
            ))}
        </div>
        <button
            onClick={() => alert('Alterações salvas!')}
            className="w-full mt-8 py-3 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
            Salvar Alterações
        </button>
      </div>
    </div>
  );
}