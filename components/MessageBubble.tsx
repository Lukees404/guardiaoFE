
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Message } from '../types';
import LogoIcon from './icons/LogoIcon';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  // Parse Markdown and sanitize HTML
  const rawMarkup = marked.parse(message.text, { gfm: true, breaks: true });
  const sanitizedMarkup = DOMPurify.sanitize(rawMarkup as string);

  const bubbleClasses = isUser
    ? 'bg-guardiao-azul text-white self-end'
    : 'bg-guardiao-branco text-guardiao-cinza-escuro self-start';
  
  const containerClasses = isUser
    ? 'justify-end'
    : 'justify-start';

  return (
    <div className={`flex items-end gap-3 w-full ${containerClasses}`}>
       {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-guardiao-cinza-claro flex items-center justify-center">
            <LogoIcon className="w-6 h-6 text-guardiao-cinza-medio"/>
        </div>
      )}
      <div
        className={`max-w-xl lg:max-w-2xl px-5 py-3 rounded-xl shadow-soft ${bubbleClasses}`}
      >
        <div 
          className="prose prose-p:my-2 prose-strong:font-semibold" 
          dangerouslySetInnerHTML={{ __html: sanitizedMarkup }} 
        />
      </div>
    </div>
  );
};

export default MessageBubble;
