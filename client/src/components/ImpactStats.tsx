import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Users, BookOpen, Globe, Award } from 'lucide-react';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const IndiaMapSVG = () => (
  <svg viewBox="0 0 500 500" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] opacity-10 pointer-events-none z-0" fill="#FF007F">
    <path d="M228.3,10.6l-5.6,9l-5.4,4.2l-3,9.7l3,7l-6.1,12l-10,3l-4.7,6.8l2,15l-13,6.2l-5.7,8.6l3.4,7.4l-7.7,11l-3.3-0.7l-2.6,3 l-13.4,6.2l-4-5l-8.4,13.6l10,21l-3.3,4.4l-4,13.6l6.7,5l-1,3.4l-8.4,1l-4-6l-7,10v4l7.7,6l-14,3l-16,33.5l1.6,22l8.7,4.4l14.7-6.2 l6.7,3l4,14l7.4,12l10,24l5.3,16l14.7,10l3.3,13l9,7l5,21.5l10.7,9l9,13.5l11,5l2-16.5l8-4.5l5.4-1.5l11-8.5l4.3,6.5l22,12l16.7,2.5 l3-2.5l5.4,9.5l7,4l3,9l22-29.5l3.4-3.5l3.4,3.5l8-1.5l3,6.5l4-3.5l4.6,7.5l4,1.5l8,8.5l9-3l1-4.5l-3-4l5.4-8l2.6-3.5l10,7l1.7,3 h14l6.7,6l-1-7l9-24.5v-10l5.4-4l-3-12.5l2-7l9.7-27.5l11.4-14.5l1.3-15.5l-6-9.5l-6-10l2-24.5l-5.4-7.5l3.4-13.5l-11-20l7.7-18.5 l10-15.5l14-6.5l4.7-23.5l7.7-4l24-4l2-8.5l11-13l3.4-5.5l9-2l2.6,4h9.7l3-3l6-11v-4.5l13.7-18l11.4-6.5l8,3h7l7.7-18.5v-9l-9-9.5 h-6.7l-9.7,8.5l-8-7.5l2.6-21.5l-9-3l1.4-9l-7.7-7.5l-7-2l-1-4h-8.7v4l-11,8.5l-3,3.5l-4-4l-14,4.5l-5-7.5l-2-2.5l2.6-11l-3-4.5 h-8.7l-9.4,7l-6-2l-6-6l-3-1l0.7,5.5l-3.4,7.5l-10-3.5l-6.7-7l2-9l-2-3l-7-3h-3.4l-4.7,21.5l-4,3l-5-4l-4,4l-4,5l-10-4.5l-4,2.5 l-8,7l-4.7,20l-15,4l-6.7,5l-9.7,2l-8,8.5l-12-8.5l-9,22.5l-6-3l-7.7-7.5l1-5l-4.7-3.5h-5.4v3.5l3,6l-7.7,11.5v6.5l-7-1.5 l-11.4-12.5l-2-4v-7.5l6-3l3-8l-2.6-4.5l7.7-6l-5.4-6.5l-7.7,2.5l-11-17.5L228.3,10.6z"/>
  </svg>
);

export const ImpactStats = () => {
  const stats = [
    { icon: <Users size={40} />, number: 8400, suffix: "+", label: "Followers", color: "bg-[#FF007F]", textColor: "text-[#FF007F]" },
    { icon: <BookOpen size={40} />, number: 63, suffix: "+", label: "Initiatives", color: "bg-[#FF6A00]", textColor: "text-[#FF6A00]" },
    { icon: <Globe size={40} />, number: 29, suffix: " States", label: "Reach", color: "bg-white", textColor: "text-white" },
    { icon: <Award size={40} />, number: 1860, suffix: "", label: "Society Act", color: "bg-[#FF007F]", textColor: "text-[#FF007F]" }
  ];

  return (
    <section id="impact" className="relative py-32 overflow-hidden bg-[#09090E] border-b-[3px] border-[#111111]">
      <IndiaMapSVG />
      
      {/* Brutalist Grid Background for Dark Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[#FF6A00] text-[#111111] font-bold text-sm tracking-[0.2em] uppercase mb-6 border-[3px] border-[#FF6A00]">
              The Metric
            </div>
            <h2 className="text-[4rem] md:text-[6rem] font-black font-display text-white uppercase tracking-tighter leading-none">
              Impact.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-8 bg-[#09090E] border-[4px] border-white/20 hover:border-[#FF007F] hover:bg-[#FF007F]/10 transition-colors duration-300 group"
            >
              <div className={`mb-8 ${stat.textColor} group-hover:scale-110 transition-transform origin-left`}>
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black font-display text-white mb-2 uppercase tracking-tighter">
                <AnimatedCounter to={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-[#FF6A00] font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
