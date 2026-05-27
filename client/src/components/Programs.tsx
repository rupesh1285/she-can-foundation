import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Users, HeartPulse, ArrowRight } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap size={36} />,
      title: "Education & Skill Development",
      description: "Providing quality education and vocational training to underprivileged women to build sustainable, independent livelihoods.",
      bg: "bg-blue-50/50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]"
    },
    {
      icon: <Laptop size={36} />,
      title: "Digital Literacy",
      description: "Teaching essential digital skills to bridge the technology gap for women across India in the modern, connected economy.",
      bg: "bg-purple-50/50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)]"
    },
    {
      icon: <Users size={36} />,
      title: "Community Programs",
      description: "Building strong support networks, self-help groups, and community-driven initiatives for lasting social impact.",
      bg: "bg-pink-50/50",
      iconBg: "bg-[#FFD6EC]",
      iconColor: "text-[#E91E8C]",
      borderColor: "border-pink-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(233,30,140,0.2)]"
    },
    {
      icon: <HeartPulse size={36} />,
      title: "Healthcare Awareness",
      description: "Promoting critical healthcare access, menstrual hygiene, and overall wellness awareness in marginalized communities.",
      bg: "bg-rose-50/50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      borderColor: "border-rose-100",
      hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.2)]"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-[#FFD6EC]/10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-[#E91E8C]/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#E91E8C] font-semibold text-sm mb-6">
              Our Initiatives
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#1A1A2E] leading-tight">
              Creating Impact Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#FF6BB5]">Action.</span>
            </h2>
          </div>
          <a href="#volunteer" className="inline-flex items-center gap-2 text-[#1A1A2E] font-bold hover:text-[#E91E8C] transition-colors pb-2 border-b-2 border-[#1A1A2E] hover:border-[#E91E8C]">
            View all programs <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`rounded-[2rem] p-8 transition-all duration-300 group border bg-white/60 backdrop-blur-md ${program.borderColor} ${program.hoverShadow} relative overflow-hidden`}
            >
              {/* Card background bloop on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${program.bg} rounded-bl-[100%] transition-transform duration-500 scale-100 group-hover:scale-150 -z-10`}></div>
              
              <div className={`w-16 h-16 rounded-2xl ${program.iconBg} ${program.iconColor} flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-serif text-[#1A1A2E] mb-4 leading-snug">{program.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">{program.description}</p>
              
              <div className={`mt-auto inline-flex items-center gap-2 font-bold ${program.iconColor} group-hover:gap-4 transition-all duration-300`}>
                Learn More <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
