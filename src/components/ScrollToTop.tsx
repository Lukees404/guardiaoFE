import React, { useState, useEffect } from 'react';

interface ScrollToTopProps {
  chatWindowRef: React.RefObject<HTMLDivElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ chatWindowRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (chatWindowRef.current) {
        const { scrollTop } = chatWindowRef.current;
        setIsVisible(scrollTop > 300);
      }
    };

    const chatWindow = chatWindowRef.current;
    chatWindow?.addEventListener('scroll', checkScroll);

    return () => chatWindow?.removeEventListener('scroll', checkScroll);
  }, [chatWindowRef]);

  const scrollToTop = () => {
    chatWindowRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-8 w-14 h-14 bg-guardiao-azul text-white 
                 rounded-full shadow-lg hover:bg-blue-600 transition-all
                 flex items-center justify-center text-2xl z-50
                 hover:scale-110 active:scale-95"
      aria-label="Voltar ao topo da conversa"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
