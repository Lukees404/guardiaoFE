// ===================================
// TIPOS E INTERFACES DO PROJETO
// ===================================

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export interface Suggestion {
  id: string;
  text: string;
  icon: string;
  category: 'security' | 'help' | 'learn';
}

export type FontSize = 'text-lg' | 'text-xl' | 'text-2xl';

export interface FontSizeOption {
  label: string;
  value: FontSize;
  name: string;
  pixels: string;
}
