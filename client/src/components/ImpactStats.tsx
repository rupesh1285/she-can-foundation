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

// Simplified SVG of India for abstract background representation
const IndiaMapSVG = () => (
  <svg viewBox="0 0 500 500" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] opacity-[0.03] pointer-events-none z-0" fill="currentColor">
    <path d="M228.3,10.6l-5.6,9l-5.4,4.2l-3,9.7l3,7l-6.1,12l-10,3l-4.7,6.8l2,15l-13,6.2l-5.7,8.6l3.4,7.4l-7.7,11l-3.3-0.7l-2.6,3 l-13.4,6.2l-4-5l-8.4,13.6l10,21l-3.3,4.4l-4,13.6l6.7,5l-1,3.4l-8.4,1l-4-6l-7,10v4l7.7,6l-14,3l-16,33.5l1.6,22l8.7,4.4l14.7-6.2 l6.7,3l4,14l7.4,12l10,24l5.3,16l14.7,10l3.3,13l9,7l5,21.5l10.7,9l9,13.5l11,5l2-16.5l8-4.5l5.4-1.5l11-8.5l4.3,6.5l22,12l16.7,2.5 l3-2.5l5.4,9.5l7,4l3,9l22-29.5l3.4-3.5l3.4,3.5l8-1.5l3,6.5l4-3.5l4.6,7.5l4,1.5l8,8.5l9-3l1-4.5l-3-4l5.4-8l2.6-3.5l10,7l1.7,3 h14l6.7,6l-1-7l9-24.5v-10l5.4-4l-3-12.5l2-7l9.7-27.5l11.4-14.5l1.3-15.5l-6-9.5l-6-10l2-24.5l-5.4-7.5l3.4-13.5l-11-20l7.7-18.5 l10-15.5l14-6.5l4.7-23.5l7.7-4l24-4l2-8.5l11-13l3.4-5.5l9-2l2.6,4h9.7l3-3l6-11v-4.5l13.7-18l11.4-6.5l8,3h7l7.7-18.5v-9l-9-9.5 h-6.7l-9.7,8.5l-8-7.5l2.6-21.5l-9-3l1.4-9l-7.7-7.5l-7-2l-1-4h-8.7v4l-11,8.5l-3,3.5l-4-4l-14,4.5l-5-7.5l-2-2.5l2.6-11l-3-4.5 h-8.7l-9.4,7l-6-2l-6-6l-3-1l0.7,5.5l-3.4,7.5l-10-3.5l-6.7-7l2-9l-2-3l-7-3h-3.4l-4.7,21.5l-4,3l-5-4l-4,4l-4,5l-10-4.5l-4,2.5 l-8,7l-4.7,20l-15,4l-6.7,5l-9.7,2l-8,8.5l-12-8.5l-9,22.5l-6-3l-7.7-7.5l1-5l-4.7-3.5h-5.4v3.5l3,6l-7.7,11.5v6.5l-7-1.5 l-11.4-12.5l-2-4v-7.5l6-3l3-8l-2.6-4.5l7.7-6l-5.4-6.5l-7.7,2.5l-11-17.5L228.3,10.6z"/>
  </svg>
);

export const ImpactStats = () => {
  const stats = [
    { icon: <Users size={32} />, number: 8400, suffix: "+", label: "Followers & Supporters", color: "text-[#E11D48]", bg: "bg-[#E11D48]/10", border: "border-[#E11D48]/20" },
    { icon: <BookOpen size={32} />, number: 63, suffix: "+", label: "Programs & Initiatives", color: "text-[#FDA4AF]", bg: "bg-[#FDA4AF]/10", border: "border-[#FDA4AF]/20" },
    { icon: <Globe size={32} />, number: 29, suffix: " States", label: "PAN India Reach", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { icon: <Award size={32} />, number: 1860, suffix: "", label: "Registered Society Act", color: "text-pink-300", bg: "bg-pink-300/10", border: "border-pink-300/20" }
  ];

  return (
    <section id="impact" className="relative py-32 overflow-hidden bg-[#0F172A]">
      {/* Dark mode background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5f103b]/40 via-[#0F172A] to-[#0F172A] z-0"></div>
      
      {/* India Map Visualization */}
      <IndiaMapSVG />
      
      {/* Glowing pulsing dots indicating reach */}
      <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 3, delay: 0 }} className="absolute top-[40%] left-[45%] w-3 h-3 bg-[#E11D48] rounded-full blur-[2px] z-10"></motion.div>
      <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="absolute top-[60%] left-[40%] w-2 h-2 bg-[#FDA4AF] rounded-full blur-[1px] z-10"></motion.div>
      <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 3, delay: 2 }} className="absolute top-[50%] left-[55%] w-4 h-4 bg-purple-400 rounded-full blur-[3px] z-10"></motion.div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/10 rounded-full blur-[120px] mix-blend-screen z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-1 mb-6">
              <div className="w-8 h-[2px] bg-[#E11D48]"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#E11D48] uppercase">Quantifiable Impact</span>
              <div className="w-8 h-[2px] bg-[#E11D48]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-white tracking-tighter leading-none mb-6">
              Impact in Numbers.
            </h2>
            <p className="text-xl text-gray-400 font-medium">Measuring our progress across the subcontinent.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border ${stat.border} hover:bg-white/10 transition-colors duration-500 flex flex-col items-center text-center group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]`}
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} mb-6 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-3 tracking-tighter">
                <AnimatedCounter to={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 font-medium text-lg leading-snug tracking-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
