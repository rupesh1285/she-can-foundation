import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

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
        
        // easeOutQuart easing function for smooth deceleration
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
  const stats = [
    { value: 120000, suffix: "+", label: "Girls Helped" },
    { value: 8400, suffix: "+", label: "Supporters" },
    { value: 63, suffix: "+", label: "Programs" },
    { value: 29, suffix: "", label: "States" }
  ];

  return (
    <section className="py-16 bg-[#0F172A] relative z-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex-1 min-w-[200px] text-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-white tracking-tighter mb-3">
                <Counter to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[#FF8C66] font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
