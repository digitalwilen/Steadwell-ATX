import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', view: 'home' as const },
    { name: 'What We Handle', href: '#what-we-handle', view: 'what-we-handle' as const },
    { name: 'Our Process', href: '#our-process', view: 'our-process' as const },
    { name: 'About', href: '#about', view: 'about' as const },
    { name: 'Contact', href: '#contact', view: 'contact' as const },
  ];

  const handleLinkClick = (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex flex-col">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
              window.location.hash = 'home';
            }} 
            className="flex flex-col group"
          >
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark group-hover:text-brand-primary transition-colors">
              Steadwell ATX
            </span>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-500 mt-0.5">
              Senior & Specialty Move Manager
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                if (link.view) {
                  e.preventDefault();
                  handleLinkClick(link.view);
                  window.location.hash = link.href.replace('#', '');
                }
              }}
              className={`text-sm font-semibold transition-colors ${
                link.view === currentView 
                  ? 'text-brand-primary underline underline-offset-4 decoration-2' 
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:5122769194" className="flex items-center text-brand-dark font-semibold hover:text-brand-primary transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            Call Us
          </a>
          <Button 
            size="sm"
            onClick={() => {
              handleLinkClick('contact');
              window.location.hash = 'contact';
            }}
          >
            Schedule a Private Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <a href="tel:5122769194" className="flex items-center text-sm font-bold text-brand-dark mr-2">
            <Phone className="w-4 h-4 mr-1 fill-current" />
            Call Us
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden flex flex-col p-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-lg font-medium py-2 border-b border-gray-50 ${
                link.view === currentView ? 'text-brand-primary' : 'text-gray-800'
              }`}
              onClick={(e) => {
                if (link.view) {
                  e.preventDefault();
                  handleLinkClick(link.view);
                  window.location.hash = link.href.replace('#', '');
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <Button 
              className="w-full justify-center"
              onClick={() => {
                handleLinkClick('contact');
                window.location.hash = 'contact';
              }}
            >
              Schedule a Private Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;