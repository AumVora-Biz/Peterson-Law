import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy-900 pt-20" aria-label="Welcome">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=2070&auto=format&fit=crop"
          alt="Moody Northern Ontario landscape with pine forests and rocky shores"
          className="w-full h-full object-cover object-center" 
        />
        {/* Dark Navy Overlay (approx 70% opacity) */}
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block border-b-2 border-gold-500 pb-2 mb-4">
             <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold">Est. 1899</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Decisive Legal Guidance. <br />
            <span className="text-gray-300 italic font-normal text-3xl md:text-5xl lg:text-6xl mt-2 block">
              Rooted in Northern Ontario.
            </span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Providing specialized counsel in Mining Law, Real Estate, and Cross-Border Estates for over a century.
          </p>

          <div className="pt-8">
            <Button href="#contact" variant="primary" aria-label="Book a legal consultation">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};