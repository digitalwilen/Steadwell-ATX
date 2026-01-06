import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ThreePillars from './components/ThreePillars';
import Accountability from './components/Accountability';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatWeHandleView from './components/WhatWeHandleView';
import OurProcessView from './components/OurProcessView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#what-we-handle') {
        setCurrentView('what-we-handle');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#our-process') {
        setCurrentView('our-process');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetView = (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? 'home' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans text-brand-dark bg-brand-cream selection:bg-brand-primary selection:text-white">
      <Header setView={handleSetView} currentView={currentView} />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero setView={handleSetView} />
            <ThreePillars />
            <Accountability />
            <Process setView={handleSetView} />
            <FAQ />
          </>
        )}
        {currentView === 'what-we-handle' && <WhatWeHandleView setView={handleSetView} />}
        {currentView === 'our-process' && <OurProcessView setView={handleSetView} />}
        {currentView === 'about' && <AboutView setView={handleSetView} />}
        {currentView === 'contact' && <ContactView />}
      </main>
      <Footer setView={handleSetView} />
    </div>
  );
};

export default App;