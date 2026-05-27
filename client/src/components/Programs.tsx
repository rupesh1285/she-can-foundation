import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Heart, Users, ArrowUpRight } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      title: "Digital Literacy",
      description: "Equipping women with essential computer skills, internet navigation, and online safety protocols to thrive in a digital-first world.",
      icon: <Laptop size={48} />,
      color: "bg-[#FF007F]",
      textColor: "text-white"
    },
    {
      title: "Vocational Training",
      description: "Industry-aligned skill development programs in tailoring, handicrafts, and data entry to ensure sustainable financial independence.",
      icon: <Heart size={48} />,
      color: "bg-[#FF6A00]",
      textColor: "text-[#111111]"
    },
    {
      title: "Community Outreach",
      description: "Awareness campaigns focused on menstrual hygiene, legal rights, and financial literacy across marginalized neighborhoods.",
      icon: <Users size={48} />,
      color: "bg-white",
      textColor: "text-[#111111]"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-white relative overflow-hidden border-b-[3px] border-[#111111]">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="inline-block px-4 py-2 bg-[#FF007F] text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-[3px] border-[#111111] shadow-brutal">
              What We Do
            </div>
            <h2 className="text-[4rem] md:text-[6rem] font-black font-display text-[#111111] leading-none uppercase tracking-tighter">
              Programs
            </h2>
          </div>
          <button className="px-8 py-4 bg-white border-[3px] border-[#111111] shadow-brutal font-bold uppercase tracking-widest text-lg hover:bg-[#111111] hover:text-white transition-colors flex items-center gap-2">
            View All <ArrowUpRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ x: -4, y: -4, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
              className={`p-10 ${program.color} border-[4px] border-[#111111] shadow-brutal group cursor-pointer transition-all duration-300 relative overflow-hidden`}
            >
              {/* Graphic element */}
              <div className="absolute -right-10 -bottom-10 opacity-10 transform group-hover:scale-150 transition-transform duration-700">
                {program.icon}
              </div>

              <div className={`mb-12 inline-block p-4 bg-white border-[3px] border-[#111111] shadow-brutal ${program.color === 'bg-white' ? 'text-[#FF007F]' : 'text-[#111111]'}`}>
                {program.icon}
              </div>
              
              <h3 className={`text-4xl font-black font-display ${program.textColor} mb-6 uppercase tracking-tight`}>
                {program.title}
              </h3>
              <p className={`text-lg font-medium ${program.color === 'bg-[#FF007F]' ? 'text-white/90' : 'text-[#111111]/80'}`}>
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
