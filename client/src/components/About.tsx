import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, TrendingUp, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Parallax Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="lg:w-[45%] relative w-full aspect-[3/4] max-w-[500px] mx-auto"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-[#E11D48]/20 rounded-[3rem] blur-3xl transform -translate-x-10 translate-y-10 -z-10"></div>
            
            <motion.div style={{ y }} className="w-full h-full relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women collaborating and learning" 
                className="w-full h-full rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] object-cover"
              />
              
              {/* Ultra-Glassmorphic floating card */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-4 lg:-right-16 bg-white/40 backdrop-blur-3xl p-6 rounded-[2rem] shadow-[inset_0_1px_3px_rgba(255,255,255,1),0_30px_60px_-20px_rgba(233,30,140,0.3)] border border-white/50 w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-4">
                    <img className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    <img className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    <div className="w-12 h-12 rounded-full border-[3px] border-white bg-gradient-to-br from-[#E11D48] to-[#FDA4AF] text-white flex items-center justify-center text-xs font-black shadow-sm">+2k</div>
                  </div>
                </div>
                <p className="font-serif font-bold text-[#0F172A] text-xl leading-tight mb-1">Join our community</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">Empowering women daily</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:w-[55%]"
          >
            <div className="inline-flex items-center gap-3 px-1 mb-8">
              <div className="w-8 h-[2px] bg-[#E11D48]"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#E11D48] uppercase">The Foundation</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-serif text-[#0F172A] mb-8 leading-[1.05] tracking-tighter">
              A legacy built on <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FDA4AF]">Empowerment.</span>
            </h2>
            
            <p className="text-xl text-gray-500 mb-12 leading-[1.7] font-medium tracking-tight">
              She Can Foundation is a youth-driven NGO working towards creating opportunities, awareness, and positive social impact through education, digital initiatives, and community-driven programs. We believe every woman deserves the chance to rise.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-6 items-start p-8 rounded-[2rem] bg-[#fcfcfc] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_-10px_rgba(0,0,0,0.02)] border border-gray-100 group hover:bg-white transition-colors duration-500">
                <div className="w-16 h-16 rounded-[1.2rem] bg-[#FFE4E6]/50 flex items-center justify-center text-[#E11D48] shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#0F172A] text-2xl mb-3 tracking-tight">Our Mission</h4>
                  <p className="text-gray-500 leading-[1.7] font-medium text-lg">Empowering women through comprehensive education and skill training programs to achieve financial independence.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-8 rounded-[2rem] bg-[#fcfcfc] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_-10px_rgba(0,0,0,0.02)] border border-gray-100 group hover:bg-white transition-colors duration-500">
                <div className="w-16 h-16 rounded-[1.2rem] bg-purple-50 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#0F172A] text-2xl mb-3 tracking-tight">Our Vision</h4>
                  <p className="text-gray-500 leading-[1.7] font-medium text-lg">Fostering true gender equality and driving sustainable economic growth across marginalized communities in India.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-[#166534]" />
              <span className="text-sm font-bold tracking-wider text-gray-700 uppercase">Registered NGO (Society Act 1860)</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
