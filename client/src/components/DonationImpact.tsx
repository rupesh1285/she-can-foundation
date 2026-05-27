import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, HeartHandshake, ArrowUpRight } from 'lucide-react';

export const DonationImpact = () => {
  const impacts = [
    {
      title: "Educate a Girl",
      amount: "₹2,500",
      description: "Funds a girl's primary education, books, and uniforms for an entire month.",
      icon: <BookOpen size={40} />,
      bg: "bg-[#FF007F]"
    },
    {
      title: "Digital Workshop",
      amount: "₹5,000",
      description: "Sponsors an intensive 2-week digital literacy bootcamp for a batch of 10 women.",
      icon: <MonitorPlay size={40} />,
      bg: "bg-[#09090E]"
    },
    {
      title: "Community Health",
      amount: "₹1,500",
      description: "Provides essential healthcare access and menstrual hygiene kits for a family.",
      icon: <HeartHandshake size={40} />,
      bg: "bg-[#FF6A00]"
    }
  ];

  return (
    <section className="py-32 bg-white relative border-b-[3px] border-[#111111]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-[#FF6A00] text-white font-bold text-sm tracking-[0.2em] uppercase mb-8 border-[3px] border-[#111111] shadow-brutal">
            Make An Impact
          </div>
          <h2 className="text-[4rem] md:text-[6rem] font-black font-display text-[#111111] uppercase tracking-tighter leading-none mb-8">
            Fund The <br/> <span className="text-[#FF007F]" style={{ WebkitTextStroke: '2px #111111' }}>Revolution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ x: -4, y: -4, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
              className={`group relative p-10 bg-white border-[4px] border-[#111111] shadow-brutal flex flex-col cursor-pointer transition-all duration-300`}
            >
              <div className={`w-20 h-20 border-[3px] border-[#111111] shadow-brutal flex items-center justify-center ${impact.bg} ${impact.bg === 'bg-white' ? 'text-[#FF007F]' : 'text-white'} mb-12 group-hover:scale-110 transition-transform`}>
                {impact.icon}
              </div>
              
              <div className="mt-auto">
                <p className="text-5xl font-black font-display text-[#111111] mb-2 uppercase">{impact.amount}</p>
                <h3 className="text-2xl font-black font-display text-[#FF007F] mb-4 uppercase">{impact.title}</h3>
                <p className="text-[#111111] font-medium text-lg leading-relaxed">{impact.description}</p>
              </div>

              <div className="absolute top-8 right-8 bg-[#111111] text-white p-2 border-[2px] border-[#111111] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                <ArrowUpRight size={32} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex px-12 py-6 bg-[#FF007F] text-white font-black font-display uppercase tracking-widest text-2xl border-[4px] border-[#111111] shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all">
            Donate Now
          </button>
        </div>

      </div>
    </section>
  );
};
