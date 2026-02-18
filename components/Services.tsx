import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-6">Our Areas of Practice</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive legal solutions tailored to personal, commercial, and industrial needs across Northern Ontario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-white p-8 border border-gray-200 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-navy-900 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};