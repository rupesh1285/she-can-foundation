import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { Programs } from '../components/Programs';
import { InstagramSection } from '../components/InstagramSection';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="w-full overflow-hidden bg-white">
      <Hero />
      
      {/* Huge Dynamic Mission Quote */}
      <section className="py-32 bg-[#FF4500] text-white relative overflow-hidden">
        <motion.div 
          style={{ scale }} 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter leading-tight max-w-5xl mx-auto"
          >
            "When you empower a woman, <br className="hidden md:block" />
            <span className="text-[#FFDED6]">you empower a generation.</span>"
          </motion.h2>
        </div>
      </section>

      <ImpactStats />
      
      {/* Programs Preview */}
      <Programs isPreview={true} />

      {/* Stories/Impact Preview */}
      <section className="py-24 bg-[#FDFBF7] rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-[#0F172A]">Real Stories.</h2>
              <p className="text-xl text-gray-500 font-medium mt-4">The lives changed by our initiatives.</p>
            </div>
            <Link to="/stories" className="text-[#FF4500] font-bold hover:underline hidden md:flex items-center gap-2 group text-lg">
              Read All Stories <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
              className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF4500]/10 transition-all duration-500"
            >
              <div className="overflow-hidden rounded-[2rem] mb-8 relative">
                <ImagePlaceholder 
                  label="STORY — Ground level photo: sanitary pad drive"
                  path="/images/Pad Distribution.png"
                  ratio="16:9"
                  className="group-hover:scale-105 transition-transform duration-700 w-full"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#FF4500] uppercase tracking-wider">Healthcare</div>
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-[#0F172A]">Her Period Shouldn't End Her Education</h3>
              <p className="text-gray-600 text-lg mb-6 line-clamp-3 leading-relaxed">Every month, girls in small villages are forced to miss school because they cannot afford sanitary pads. She Can Foundation has reached 1,20,000+ girls, ensuring their education never has to pause...</p>
              <Link to="/stories" className="text-[#0F172A] font-bold hover:text-[#FF4500] inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read full story &rarr;</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF4500]/10 transition-all duration-500"
            >
              <div className="overflow-hidden rounded-[2rem] mb-8 relative">
                <ImagePlaceholder 
                  label="STORY — Women learning on computers/phones"
                  path="/images/Happy kids image of backward class.avif"
                  ratio="16:9"
                  className="group-hover:scale-105 transition-transform duration-700 w-full"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#FF4500] uppercase tracking-wider">Digital Literacy</div>
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-[#0F172A]">From No Phone to Running a Business</h3>
              <p className="text-gray-600 text-lg mb-6 line-clamp-3 leading-relaxed">Through our digital literacy programs, women who had never used a smartphone are now running small businesses online, accessing government schemes, and supporting their families...</p>
              <Link to="/stories" className="text-[#0F172A] font-bold hover:text-[#FF4500] inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read full story &rarr;</Link>
            </motion.div>
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/stories" className="inline-block px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-[#FF4500] shadow-md">Read All Stories</Link>
          </div>
        </div>
      </section>

      <InstagramSection />

      {/* Volunteer CTA */}
      <section className="py-32 bg-[#0F172A] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFDED6] rounded-full blur-[150px] opacity-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-black mb-8 tracking-tighter">Be The Change</h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed font-medium">Join our community of changemakers and help us create a world where every woman thrives.</p>
          <Link to="/volunteer" className="inline-block px-12 py-5 bg-[#FF4500] text-white font-bold rounded-full text-xl shadow-xl shadow-[#FF4500]/20 hover:shadow-2xl hover:shadow-[#FF4500]/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            Join Our Community
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
