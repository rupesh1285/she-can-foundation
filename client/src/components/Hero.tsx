import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-white overflow-hidden border-b-[3px] border-[#111111]">
      {/* Brutalist geometric background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF007F] -skew-x-12 translate-x-32 -z-10 border-l-[3px] border-[#111111]" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#FF6A00] rounded-full border-[3px] border-[#111111] shadow-brutal -z-10 animate-[bounce_5s_infinite]" />
      <div className="absolute top-20 left-1/4 w-20 h-20 bg-[#111111] rotate-45 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="lg:w-[55%] pt-10 lg:pt-0">
            <motion.div 
              custom={1} initial="hidden" animate="visible" variants={textVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-[3px] border-[#111111] shadow-brutal text-[#111111] font-bold text-sm tracking-widest uppercase mb-10"
            >
              <div className="w-3 h-3 bg-[#FF007F] rounded-full animate-pulse"></div>
              NITI Aayog Affiliated
            </motion.div>
            
            <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold font-display text-[#111111] leading-[0.85] uppercase tracking-tighter mb-8">
              <motion.span custom={2} initial="hidden" animate="visible" variants={textVariants} className="block">Empower.</motion.span>
              <motion.span custom={3} initial="hidden" animate="visible" variants={textVariants} className="block text-[#FF007F]" style={{ WebkitTextStroke: '2px #111111' }}>Transform.</motion.span>
              <motion.span custom={4} initial="hidden" animate="visible" variants={textVariants} className="block">Rise.</motion.span>
            </h1>
            
            <motion.p custom={5} initial="hidden" animate="visible" variants={textVariants} className="text-xl md:text-2xl text-[#111111] mb-12 max-w-xl font-medium tracking-tight bg-white/90 p-4 border-[3px] border-[#111111] shadow-brutal">
              A youth-driven NGO rewriting the rules of social impact through radical education and digital literacy.
            </motion.p>
            
            <motion.div custom={6} initial="hidden" animate="visible" variants={textVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a 
                whileHover={{ x: -2, y: -2, boxShadow: '8px 8px 0px 0px rgba(255,0,127,1)' }}
                whileTap={{ x: 2, y: 2, boxShadow: '0px 0px 0px 0px rgba(17,17,17,1)' }}
                href="#volunteer" 
                className="w-full sm:w-auto px-10 py-5 bg-[#111111] text-white font-bold border-[3px] border-[#111111] shadow-brutal transition-all text-xl uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Volunteer
              </motion.a>
              <motion.a 
                whileHover={{ x: -2, y: -2, boxShadow: '8px 8px 0px 0px rgba(17,17,17,1)' }}
                whileTap={{ x: 2, y: 2, boxShadow: '0px 0px 0px 0px rgba(17,17,17,1)' }}
                href="#programs" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#111111] font-bold border-[3px] border-[#111111] shadow-brutal transition-all text-xl uppercase tracking-widest flex items-center justify-center"
              >
                Programs
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right Imagery */}
          <div className="lg:w-[45%] relative w-full mt-12 lg:mt-0">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] border-[4px] border-[#111111] shadow-brutal bg-[#FF6A00] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women learning together" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#FF007F] mix-blend-color z-10"></div>
            </motion.div>
            
            {/* Brutalist Stats Badge */}
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute -top-10 -left-10 bg-white p-6 border-[3px] border-[#111111] shadow-brutal z-30"
            >
              <p className="text-4xl font-black font-display text-[#FF007F]">8.4K+</p>
              <p className="text-sm font-bold text-[#111111] uppercase tracking-widest">Lives Impacted</p>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Marquee Ticker at the bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111111] border-t-[3px] border-[#111111] overflow-hidden py-3 z-40">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap text-[#FF007F] font-bold tracking-widest uppercase text-xl gap-8"
        >
          <span>BREAKING BOUNDARIES</span> <span>•</span>
          <span>EMPOWERING WOMEN</span> <span>•</span>
          <span>DIGITAL LITERACY</span> <span>•</span>
          <span>BREAKING BOUNDARIES</span> <span>•</span>
          <span>EMPOWERING WOMEN</span> <span>•</span>
          <span>DIGITAL LITERACY</span> <span>•</span>
          <span>BREAKING BOUNDARIES</span> <span>•</span>
          <span>EMPOWERING WOMEN</span> <span>•</span>
          <span>DIGITAL LITERACY</span> <span>•</span>
        </motion.div>
      </div>
    </section>
  );
};
