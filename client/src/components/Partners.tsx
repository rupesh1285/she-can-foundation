import React from 'react';
import { motion } from 'framer-motion';

export const Partners = () => {
  // Using placeholder typography logos for visual representation
  const partners = [
    "NITI Aayog",
    "UN Women",
    "Google.org",
    "Tata Trusts",
    "Reliance Foundation",
    "Bill & Melinda Gates Foundation",
    "NITI Aayog",
    "UN Women",
    "Google.org",
    "Tata Trusts",
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Trusted By & Affiliated With</h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group">
        {/* Gradient fades on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center"
        >
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl md:text-3xl font-serif font-bold text-gray-300 opacity-60 hover:opacity-100 hover:text-[#E11D48] transition-all duration-300 cursor-default shrink-0">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
