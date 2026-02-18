import React from 'react';
import { Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800" role="contentinfo">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img
                src="/Peterson-Law/logo.jpg"
                alt="Peterson & Peterson Logo"
                className="w-8 h-8 object-contain rounded-full border border-gold-500"
              />
              <span className="font-serif text-xl font-bold">Peterson & Peterson</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Serving Northern Ontario with integrity and distinction since 1899.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-center md:text-right">
            <nav aria-label="Footer Navigation">
              <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:text-gold-500">Practice Areas</a></li>
                <li><a href="#about" className="hover:text-white transition-colors focus:outline-none focus:text-gold-500">Our History</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors focus:outline-none focus:text-gold-500">Locations</a></li>
              </ul>
            </nav>
            <nav aria-label="Legal Navigation">
              <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-gold-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-gold-500">Terms of Service</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {currentYear} Peterson & Peterson. All rights reserved.</p>
          <p className="mt-2">Barristers, Solicitors, Notaries.</p>
        </div>
      </div>
    </footer>
  );
};