import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

const Counter = ({ from = 0, to, duration = 2, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
};

export const ImpactStats = () => {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] tracking-tighter"
          >
            The Scale of Our Impact.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Main Large Stat (Takes 2x2 on desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden bg-[#0F172A] group shadow-2xl"
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <ImagePlaceholder 
                label="STATS BG"
                path="/images/Pad Distribution.png"
                ratio="auto"
                className="w-full h-full object-cover grayscale mix-blend-overlay"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
            
            <div className="relative h-full flex flex-col justify-end p-10 md:p-14 z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mb-8 flex items-center justify-center border border-white/20">
                <ArrowUpRight size={32} className="text-[#FF4500]" />
              </div>
              <h3 className="text-6xl md:text-8xl font-black font-serif text-white tracking-tighter mb-4">
                <Counter to={120000} suffix="+" />
              </h3>
              <p className="text-2xl text-white/90 font-medium leading-tight max-w-sm">
                Girls reached through our healthcare and menstrual hygiene programs.
              </p>
            </div>
          </motion.div>

          {/* Top Right Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="md:col-span-2 bg-[#FFDED6] rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden group shadow-lg"
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white opacity-40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-5xl md:text-7xl font-black font-serif text-[#0F172A] tracking-tighter mb-3 relative z-10">
              <Counter to={8400} suffix="+" />
            </h3>
            <p className="text-[#FF4500] font-bold uppercase tracking-widest text-sm relative z-10">
              Active Supporters & Volunteers
            </p>
          </motion.div>

          {/* Bottom Middle Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="bg-[#FDFBF7] border border-gray-100 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-5xl md:text-6xl font-black font-serif text-[#0F172A] tracking-tighter mb-3">
              <Counter to={63} suffix="+" />
            </h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              Programs
            </p>
          </motion.div>

          {/* Bottom Right Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="bg-[#FF4500] rounded-[3rem] p-10 flex flex-col justify-center items-center text-center text-white shadow-lg shadow-[#FF4500]/20"
          >
            <h3 className="text-5xl md:text-6xl font-black font-serif tracking-tighter mb-3">
              <Counter to={29} suffix="" />
            </h3>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">
              States Reached
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
