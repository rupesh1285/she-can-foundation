import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[110vh] bg-[#FDFBF7] overflow-hidden flex items-center pt-24 pb-16">
      
      {/* Light Premium Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#FFDED6] blur-[150px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[80%] rounded-full bg-[#FF4500]/10 blur-[150px] opacity-70 animate-blob animation-delay-400"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#FFEAE3] blur-[120px] opacity-60 animate-blob animation-delay-200"></div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Takes 6 columns on LG) */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex flex-col items-start lg:col-span-6 pt-10 lg:pt-0 z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 border border-white backdrop-blur-xl shadow-sm mb-8"
            >
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF4500]"></span>
              </div>
              <span className="text-sm font-bold text-[#0F172A] tracking-wider uppercase">NITI Aayog Affiliated 🇮🇳</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold tracking-tighter leading-[0.9] text-[#0F172A] mb-8"
            >
              Empower a <br/>
              Woman.<br/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF8C66]">
                  Change the World.
                </span>
                <span className="absolute bottom-2 left-0 w-full h-5 bg-[#FFDED6] -z-10 transform -rotate-1 origin-left rounded-sm opacity-50"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mb-12"
            >
              We are a youth-driven NGO bridging the gap in education, health, and digital literacy for marginalized women across India.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link 
                to="/donate"
                className="group relative px-10 py-5 rounded-full bg-[#FF4500] text-white font-bold text-xl overflow-hidden flex items-center gap-3 shadow-2xl shadow-[#FF4500]/30 hover:-translate-y-1 hover:shadow-[#FF4500]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#CC3700] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Donate Now <Heart size={24} className="fill-white group-hover:scale-110 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/volunteer" 
                className="group flex items-center gap-4 text-xl font-bold text-[#0F172A] hover:text-[#FF4500] transition-colors bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200 hover:border-[#FF4500]/30"
              >
                Join as Volunteer
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#FFDED6] transition-colors border border-gray-100">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Collage (Takes 6 columns on LG) */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 relative h-[700px] w-full mt-16 lg:mt-0 hidden md:block"
          >
            {/* Main Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-64 h-[350px] z-20"
            >
              <div className="w-full h-full p-2 bg-white rounded-3xl shadow-2xl border border-gray-100 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group">
                <ImagePlaceholder 
                  label="HERO 1"
                  path="/images/New image 1.jpg"
                  ratio="3:4"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Top Right HUGE 16:9 Image (Image 2) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="absolute top-[5%] right-[5%] w-80 h-auto z-10"
            >
              <div className="w-full p-2.5 bg-white rounded-[2rem] shadow-xl border border-gray-100 rotate-3 hover:rotate-6 transition-transform duration-500">
                <ImagePlaceholder 
                  label="HERO 2"
                  path="/images/New image 2.jpg"
                  ratio="16:9"
                  className="w-full h-auto object-cover rounded-[1.5rem]"
                />
              </div>
            </motion.div>

            {/* NEW: Top Left Image (Fills gap between text and collage) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="absolute top-[10%] left-[-5%] w-48 h-auto z-30"
            >
              <div className="w-full p-2 bg-white rounded-[1.5rem] shadow-lg border border-gray-100 -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <ImagePlaceholder 
                  label="HERO 5"
                  path="/images/Volunteers giving fod to people.webp"
                  ratio="4:3"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* Bottom Right Floating Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.7, type: "spring" }}
              className="absolute bottom-[15%] right-[10%] w-60 h-auto z-30"
            >
              <div className="w-full p-2 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 -rotate-3 hover:-rotate-6 transition-transform duration-500">
                <ImagePlaceholder 
                  label="HERO 3"
                  path="/images/new image 3.jpeg"
                  ratio="4:3"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl text-[#FF4500] cursor-pointer">
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Floating Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="absolute bottom-[5%] left-[15%] w-52 h-auto z-40"
            >
              <div className="w-full p-2 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 -rotate-6 hover:-rotate-12 transition-transform duration-500">
                <ImagePlaceholder 
                  label="HERO 4"
                  path="/images/new image 4.jpeg"
                  ratio="1:1"
                  className="w-full h-auto object-cover rounded-[1rem]"
                />
              </div>
            </motion.div>
            
            {/* NEW: Far Right Middle Small Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.9, type: "spring" }}
              className="absolute top-[45%] right-[-10%] w-40 h-auto z-10"
            >
              <div className="w-full p-1.5 bg-white rounded-2xl shadow-xl border border-gray-100 rotate-12 hover:rotate-6 transition-transform duration-500">
                <ImagePlaceholder 
                  label="HERO 6"
                  path="/images/Kids and mother with food.avif"
                  ratio="1:1"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
