import React from 'react';
import { FontSize, FontSizeOption } from '../types';

interface FontSizeControlProps {
  currentSize: FontSize;
  onSizeChange: (size: FontSize) => void;
}

const FontSizeControl: React.FC<FontSizeControlProps> = ({ 
  currentSize, 
  onSizeChange 
}) => {
  const sizes: FontSizeOption[] = [
    { label: 'A', value: 'text-lg', name: 'Padrão', pixels: '18px' },
    { label: 'A', value: 'text-xl', name: 'Grande', pixels: '20px' },
    { label: 'A', value: 'text-2xl', name: 'Extra Grande', pixels: '24px' }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 
                    p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <i className="bi bi-type text-guardiao-azul text-2xl"></i>
        <span className="text-guardiao-cinza-escuro font-medium">
          Tamanho do Texto:
        </span>
      </div>
      
      <div className="flex gap-3">
        {sizes.map((size, index) => {
          const isSelected = currentSize === size.value;
          
          return (
            <button
              key={size.value}
              onClick={() => onSizeChange(size.value)}
              className={`
                group relative px-4 py-2 rounded-lg border-2 transition-all duration-200
                min-w-[70px] h-12 flex flex-col items-center justify-center
                ${isSelected 
                  ? 'border-guardiao-azul bg-guardiao-azul text-white shadow-md' 
                  : 'border-gray-300 text-guardiao-cinza-escuro hover:border-guardiao-azul hover:bg-blue-50'
                }
              `}
              aria-label={`${size.name} - ${size.pixels}`}
              aria-pressed={isSelected}
            >
              <span 
                className="font-bold leading-none"
                style={{ fontSize: `${14 + (index * 4)}px` }}
              >
                {size.label}
              </span>
              <span className="text-xs mt-1 font-medium">
                {size.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FontSizeControl;
