import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#FDFBF7]">
      {/* Animated Mesh Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["40%", "60%", "40%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#E11D48]/15 to-[#FDA4AF]/15 blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          borderRadius: ["60%", "40%", "60%"]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#FDA4AF]/15 to-[#FFE4E6]/25 blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="lg:w-[55%] text-center lg:text-left pt-10 lg:pt-0">
            <motion.div 
              custom={1} initial="hidden" animate="visible" variants={textVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-2xl shadow-[inset_0_1px_3px_rgba(255,255,255,1),0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-white/50 text-[#0F172A] font-bold text-xs uppercase tracking-[0.2em] mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]"></span>
              </span>
              NITI Aayog Affiliated
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-serif text-[#0F172A] leading-[0.95] tracking-tighter mb-8">
              <motion.span custom={2} initial="hidden" animate="visible" variants={textVariants} className="block">Empowering</motion.span>
              <motion.span custom={3} initial="hidden" animate="visible" variants={textVariants} className="block">Women.</motion.span>
              <motion.span custom={4} initial="hidden" animate="visible" variants={textVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] via-[#FDA4AF] to-[#E11D48] bg-[length:200%_auto] animate-gradient mt-2 pb-2">
                Transforming Lives.
              </motion.span>
            </h1>
            
            <motion.p custom={5} initial="hidden" animate="visible" variants={textVariants} className="text-xl md:text-2xl text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-[1.6] font-medium tracking-tight">
              A youth-driven NGO uplifting underprivileged women through education, digital literacy, and community programs.
            </motion.p>
            
            <motion.div custom={6} initial="hidden" animate="visible" variants={textVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#volunteer" 
                className="w-full sm:w-auto px-10 py-5 rounded-full text-white font-bold bg-[#0F172A] shadow-[0_20px_40px_-10px_rgba(26,26,46,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(233,30,140,0.5)] hover:bg-[#E11D48] transition-all duration-300 text-lg flex items-center justify-center gap-3 group"
              >
                Volunteer With Us
                <svg className="transform group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#programs" 
                className="w-full sm:w-auto px-10 py-5 rounded-full text-[#0F172A] font-bold bg-white/60 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_10px_20px_-10px_rgba(0,0,0,0.05)] border border-white/40 hover:bg-white transition-all text-lg flex items-center justify-center"
              >
                Our Programs
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right Parallax Image Composition */}
          <div className="lg:w-[45%] relative w-full aspect-[4/5] max-w-[550px] mx-auto mt-12 lg:mt-0 perspective-1000">
            
            {/* Main large image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[85%] h-[90%] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] z-10 border border-white/50"
            >
              <div className="absolute inset-0 bg-[#E11D48]/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women learning together" 
                className="w-full h-full object-cover transform scale-110"
              />
            </motion.div>
            
            {/* Overlapping smaller image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(233,30,140,0.4)] z-20 border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital literacy" 
                className="w-full h-full object-cover transform scale-110"
              />
            </motion.div>
            
            {/* Floating Glass Stats Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] -left-12 bg-white/60 backdrop-blur-2xl p-5 rounded-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/40 z-30 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-br from-[#E11D48] to-[#FDA4AF] flex items-center justify-center text-white shadow-[0_10px_20px_-10px_rgba(233,30,140,0.6)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <p className="text-3xl font-bold font-serif text-[#0F172A] tracking-tight">8.4k+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Lives Impacted</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </motion.div>
    </section>
  );
};
