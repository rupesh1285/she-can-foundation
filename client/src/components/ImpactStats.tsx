import React from 'react';
import { motion } from 'framer-motion';

export const ImpactStats = () => {
  const stats = [
    { number: "1,20,000+", label: "Girls Helped" },
    { number: "8,400+", label: "Supporters" },
    { number: "63+", label: "Programs" },
    { number: "29", label: "States" }
  ];

  return (
    <section className="py-12 bg-[#0F172A] relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-1 min-w-[200px] text-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-white tracking-tighter mb-2">
                {stat.number}
              </h3>
              <p className="text-[#FDA4AF] font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
