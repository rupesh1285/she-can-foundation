import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Literacy Graduate",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Before the digital literacy program, I had never used a computer. Now, I run a small online business selling handicrafts, supporting my family entirely on my own."
    },
    {
      name: "Anjali Desai",
      role: "Vocational Training Alumni",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "The foundation didn't just teach me a skill; they gave me my confidence back. Today, I train other women in my village, passing on the empowerment I received."
    },
    {
      name: "Meera Reddy",
      role: "Scholarship Recipient",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Financial constraints almost ended my education. Thanks to She Can Foundation's scholarship, I am now completing my engineering degree and dreaming big."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[#1A0A12] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#E91E8C] rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-[#FF6BB5] rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 px-1 mb-6">
              <div className="w-8 h-[2px] bg-[#FF6BB5]"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#FF6BB5] uppercase">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tighter leading-tight max-w-2xl">
              Real Impact. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#FF6BB5]">Real Lives.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A0A12] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A0A12] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[500px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0 flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-full relative rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-[#E91E8C]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <Quote size={60} className="text-white/10 mb-8" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif leading-[1.4] mb-10 tracking-tight">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-wide">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#FF6BB5] font-medium uppercase tracking-widest text-xs mt-2">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#E91E8C] w-8' : 'bg-white/20 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
