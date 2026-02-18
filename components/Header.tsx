import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { scrollToElement } from '../utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (scrollToElement(href)) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy-900 shadow-xl py-3' : 'bg-navy-900/95 py-5'
        }`}
      role="banner"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col z-50">
            <a
              href="#home"
              className="flex items-center gap-3 group"
              aria-label="Peterson & Peterson Home"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <img
                src="/Peterson-Law/logo.jpg"
                alt="Peterson & Peterson Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border-2 border-gold-500 transition-transform group-hover:scale-105"
              />
              <div>
                <div className="font-serif text-2xl md:text-3xl text-white font-bold leading-none tracking-tight">
                  Peterson <span className="text-gold-500">&amp;</span> Peterson
                </div>
                <p className="text-gray-300 text-xs uppercase tracking-widest mt-1 hidden sm:block">
                  Barristers, Solicitors, Notaries | Est. 1899
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white hover:text-gold-500 text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-sm whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gold-500 rounded p-1 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-navy-900 border-t border-navy-800 transition-all duration-300 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <nav className="flex flex-col p-6 space-y-4" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gold-500 text-lg font-serif font-medium border-b border-navy-800 pb-2 focus:outline-none focus:text-gold-500"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};