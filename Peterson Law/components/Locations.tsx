import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './Button';

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-4">Our Locations</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex flex-col bg-slate-50 border-t-4 border-gold-500 shadow-lg group hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8 pb-0 text-center flex-grow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-gold-600 mb-6 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{loc.city}</h3>
                <address className="not-italic text-gray-600 mb-6 min-h-[3rem]">
                  {loc.address}<br/>
                  {loc.postalCode}
                </address>
                <div className="flex items-center justify-center gap-2 text-navy-900 font-bold mb-8">
                  <Phone className="w-4 h-4 text-gold-600" />
                  <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="hover:text-gold-600 transition-colors">
                    {loc.phone}
                  </a>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="h-48 w-full bg-gray-200 mt-auto">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.city} Office`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address + ' ' + loc.city)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div id="contact" className="bg-navy-900 text-white rounded-lg shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info Left */}
            <div className="lg:w-2/5 p-10 md:p-14 bg-navy-800 relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold mb-6 text-white">Contact Us</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Decisive legal guidance is just a consultation away. Reach out to our team to discuss your legal requirements.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gold-500 text-sm uppercase tracking-wider">Phone</h4>
                      <p className="text-gray-300">(705) 942-1011</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gold-500 text-sm uppercase tracking-wider">Email</h4>
                      <a href="mailto:info@petersonpeterson.law" className="text-gray-300 hover:text-white transition-colors">info@petersonpeterson.law</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gold-500 text-sm uppercase tracking-wider">Hours</h4>
                      <p className="text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-400 text-sm">Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
               </div>
               
               {/* Pattern overlay */}
               <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>

            {/* Contact Form Right */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gold-500 uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gold-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="email" className="block text-sm font-bold text-gold-500 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                </div>

                <div>
                  <label htmlFor="matter" className="block text-sm font-bold text-gold-500 uppercase tracking-wider mb-2">Legal Matter</label>
                  <select 
                    id="matter"
                    className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="">Select a Service Area</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="mining">Mining Law</option>
                    <option value="estates">Estates & Wills</option>
                    <option value="litigation">Civil Litigation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gold-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <Button className="w-full md:w-auto" variant="primary">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};