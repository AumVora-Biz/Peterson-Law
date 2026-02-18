import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden" aria-labelledby="history-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-32 -mt-32" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/50 rounded-full blur-3xl -ml-48 -mb-48" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 relative">
            <div className="border-4 border-gold-500 p-4 relative z-10">
              <img
                src="/Peterson-Law/history.jpg"
                alt="Historical black and white photograph of the original Peterson law building circa 1900"
                loading="lazy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            {/* Offset background rect */}
            <div className="absolute top-8 left-8 w-full h-full bg-navy-800 z-0 hidden lg:block" aria-hidden="true"></div>
          </div>

          <div className="lg:w-1/2 text-white">
            <p className="text-gold-500 uppercase tracking-widest font-bold mb-2">Our History</p>
            <h2 id="history-heading" className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Legacy of Trust spanning Three Generations.
            </h2>
            <div className="space-y-6 text-lg text-gray-300 font-light">
              <p>
                Since 1899, Peterson & Peterson has been a pillar of legal stability in Northern Ontario.
                What began as a small practice at the turn of the century has grown into a multi-generational
                firm respected for its integrity and decisiveness.
              </p>
              <p>
                Serving Sault Ste. Marie, Bruce Mines, and Blind River, we understand the unique challenges
                and opportunities of our region. From the mining claims that built our towns to the
                cross-border complexities of modern estates, our advice has guided families and businesses
                through decades of change.
              </p>
              <figure className="my-8">
                <blockquote className="border-l-4 border-gold-500 pl-6 py-2 italic text-white text-xl">
                  "Decisive legal advice. That is our promise, and that is our tradition."
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};