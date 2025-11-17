
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSettings } from '../context/SettingsContext';
import { useChat } from '../context/ChatContext';
import ChatInput from '../components/ChatInput';

export default function MainLayout() {
  const { getFontSizeClass } = useSettings();
  const location = useLocation();
  const { messages, isLoading, sendMessage } = useChat();
  const isHomePage = location.pathname === '/';
  const isChatActive = isHomePage && messages.length > 0;

  const mainContainerClasses = isHomePage
    ? "flex-1 flex flex-col"
    : "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  return (
    <div className={`min-h-screen flex flex-col bg-guardiao-cinza-claro font-sans ${getFontSizeClass()}`}>
      {!isChatActive && <Header />}
      <main className={mainContainerClasses}>
        <Outlet />
      </main>
      {isChatActive ? (
        <footer className="bg-guardiao-cinza-claro">
           <div className="w-full max-w-4xl mx-auto">
             <ChatInput 
                onSendMessage={sendMessage} 
                isLoading={isLoading} 
                size={'normal'}
              />
           </div>
        </footer>
      ) : (
        <Footer />
      )}
    </div>
  );
}
