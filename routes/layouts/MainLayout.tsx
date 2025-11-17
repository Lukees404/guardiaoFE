
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSettings } from '../context/SettingsContext';
import { useChat } from '../context/ChatContext';

export default function MainLayout() {
  const { getFontSizeClass } = useSettings();
  const location = useLocation();
  const { messages } = useChat();
  const isHomePage = location.pathname === '/';
  const isChatActive = isHomePage && messages.length > 0;

  const mainContainerClasses = isChatActive
    ? "flex-1 flex flex-col"
    : isHomePage
    ? "flex-1 flex flex-col p-4 sm:p-6 lg:p-8"
    : "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  return (
    <div className={`min-h-screen flex flex-col bg-guardiao-cinza-claro font-sans ${getFontSizeClass()}`}>
      {!isChatActive && <Header />}
      <main className={mainContainerClasses}>
        <Outlet />
      </main>
      {!isChatActive && <Footer />}
    </div>
  );
}
