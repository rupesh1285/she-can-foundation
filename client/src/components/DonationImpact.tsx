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
      gradient: "from-[#FFE4E6] to-[#FDA4AF]"
    },
    {
      title: "Digital Workshop",
      amount: "₹5,000",
      description: "Sponsors an intensive 2-week digital literacy bootcamp for a batch of 10 women.",
      icon: <MonitorPlay size={40} />,
      gradient: "from-[#E11D48] to-[#5f103b]"
    },
    {
      title: "Community Health",
      amount: "₹1,500",
      description: "Provides essential healthcare access and menstrual hygiene kits for a family.",
      icon: <HeartHandshake size={40} />,
      gradient: "from-[#FDA4AF] to-[#E11D48]"
    }
  ];

  return (
    <section className="py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-1 mb-8">
            <div className="w-8 h-[2px] bg-[#E11D48]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#E11D48] uppercase">Support Our Cause</span>
            <div className="w-8 h-[2px] bg-[#E11D48]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#0F172A] tracking-tighter leading-[1.1] mb-6">
            Your Contribution Creates <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FDA4AF]">Generational Change.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-[1.6]">
            Every donation directly funds programs that uplift women. See how your support translates into tangible, life-changing impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-[450px] rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-10 cursor-pointer"
            >
              {/* Dynamic expanding background on hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${impact.gradient} opacity-10 group-hover:scale-[8] transition-transform duration-700 ease-in-out -z-10`} />
              
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center text-[#E11D48] mb-8 group-hover:bg-white/50 group-hover:scale-110 transition-all duration-500 shadow-sm border border-gray-100">
                {impact.icon}
              </div>
              
              <div className="mt-auto">
                <p className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tighter group-hover:text-[#E11D48] transition-colors">{impact.amount}</p>
                <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-4">{impact.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">{impact.description}</p>
              </div>

              {/* Hover action indicator */}
              <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white shadow-md text-[#E11D48]">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-5 rounded-full text-white font-bold bg-[#0F172A] shadow-[0_20px_40px_-10px_rgba(26,26,46,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(233,30,140,0.5)] hover:bg-[#E11D48] transition-all duration-300 text-xl tracking-wide">
            Make a Donation
          </button>
        </div>

      </div>
    </section>
  );
};
