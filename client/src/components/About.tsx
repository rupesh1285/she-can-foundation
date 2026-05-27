import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-40 bg-[#FFD6EC] relative overflow-hidden border-b-[3px] border-[#111111]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] relative w-full aspect-[4/5] max-w-[500px] mx-auto border-[4px] border-[#111111] shadow-brutal bg-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Women collaborating" 
              className="w-full h-full object-cover grayscale"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-[#FF6A00] p-6 border-[3px] border-[#111111] shadow-brutal">
              <h3 className="font-display font-black text-white text-5xl mb-2 tracking-tighter">100%</h3>
              <p className="font-bold text-[#111111] uppercase tracking-widest text-sm">Dedicated to change</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-[55%]"
          >
            <div className="inline-block px-4 py-2 bg-[#111111] text-[#FF007F] font-bold text-sm tracking-[0.2em] uppercase mb-8 border-[3px] border-[#111111] shadow-brutal">
              The Foundation
            </div>
            
            <h2 className="text-5xl md:text-[5rem] font-black font-display text-[#111111] mb-8 leading-[0.9] uppercase">
              A Legacy <br/> Built on <br/>
              <span className="text-[#FF007F]" style={{ WebkitTextStroke: '2px #111111' }}>Action.</span>
            </h2>
            
            <p className="text-xl text-[#111111] mb-12 font-medium bg-white p-6 border-[3px] border-[#111111] shadow-brutal">
              She Can Foundation is a youth-driven NGO working towards creating opportunities, awareness, and positive social impact through radical education initiatives.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-8 bg-white border-[3px] border-[#111111] shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all">
                <div className="w-16 h-16 bg-[#FF007F] border-[3px] border-[#111111] flex items-center justify-center text-white shrink-0">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#111111] text-3xl mb-2 uppercase">Mission</h4>
                  <p className="text-[#111111] font-medium text-lg">Empowering women through comprehensive education and skill training programs to achieve financial independence.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-8 bg-white border-[3px] border-[#111111] shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all">
                <div className="w-16 h-16 bg-[#FF6A00] border-[3px] border-[#111111] flex items-center justify-center text-white shrink-0">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#111111] text-3xl mb-2 uppercase">Vision</h4>
                  <p className="text-[#111111] font-medium text-lg">Fostering true gender equality and driving sustainable economic growth across marginalized communities.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
