import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#0F172A] overflow-hidden flex items-center pt-20">
      
      {/* Premium Dark Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#FF4500]/20 blur-[120px] opacity-60 animate-blob"></div>
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#FF8C66]/15 blur-[150px] opacity-60 animate-blob animation-delay-400"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex flex-col items-start pt-10 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></span>
              <span className="text-sm font-bold text-white tracking-wide uppercase">NITI Aayog Affiliated 🇮🇳</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-bold tracking-tighter leading-[0.95] text-white mb-6"
            >
              Empowering <br/>
              Women.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF8C66]">
                Transforming
              </span> Lives.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl mb-10"
            >
              A youth-driven NGO uplifting underprivileged women through education, digital literacy, and community-driven programs across India.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link 
                to="/volunteer"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#CC3700] text-white font-bold text-lg overflow-hidden flex items-center gap-2 shadow-xl shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Volunteer With Us <Heart size={20} className="fill-white" />
                </span>
              </Link>
              
              <Link 
                to="/programs" 
                className="group flex items-center gap-3 text-lg font-bold text-white hover:text-[#FF8C66] transition-colors"
              >
                Our Programs
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center group-hover:bg-[#FF4500] group-hover:border-transparent transition-colors border border-white/20">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform text-white" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[80vh] w-full mt-10 lg:mt-0 flex items-center justify-center"
          >
            <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[90%] rounded-[2.5rem] p-3 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-[#FF4500]/20 rotate-2 hover:rotate-0 transition-transform duration-700">
              <ImagePlaceholder 
                label="HERO — Group photo of She Can Foundation volunteers and community women"
                path="/images/Hero image.avif"
                className="h-full w-full rounded-[2rem] object-cover shadow-inner"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 p-6 bg-[#0F172A]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-xs"
            >
              <p className="font-serif font-bold text-xl text-white leading-tight">
                "Creating opportunities for every woman to rise."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
