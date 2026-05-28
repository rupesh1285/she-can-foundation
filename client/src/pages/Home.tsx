import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { Programs } from '../components/Programs';
import { InstagramSection } from '../components/InstagramSection';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ImpactStats />
      
      {/* Programs Preview */}
      <Programs isPreview={true} />

      {/* Stories/Impact Preview */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-[#0F172A]">Real Impact. Real Lives.</h2>
            </div>
            <Link to="/stories" className="text-[#FF4500] font-bold hover:underline hidden md:block">Read All Stories &rarr;</Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <ImagePlaceholder 
                  label="STORY — Ground level photo: sanitary pad drive"
                  path="/images/Pad Distribution.png"
                  ratio="16:9"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">Her Period Shouldn't End Her Education</h3>
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Every month, girls in small villages are forced to miss school because they cannot afford sanitary pads. She Can Foundation has reached 1,20,000+ girls...</p>
              <Link to="/stories" className="text-[#FF4500] font-bold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read full story &rarr;</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <ImagePlaceholder 
                  label="STORY — Women learning on computers/phones"
                  path="/images/Happy kids image of backward class.avif"
                  ratio="16:9"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">From No Phone to Running a Business</h3>
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Through our digital literacy programs, women who had never used a smartphone are now running small businesses online and supporting their families...</p>
              <Link to="/stories" className="text-[#FF4500] font-bold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read full story &rarr;</Link>
            </motion.div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/stories" className="inline-block px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-[#FF4500]">Read All Stories</Link>
          </div>
        </div>
      </section>

      <InstagramSection />

      {/* Volunteer CTA */}
      <section className="py-32 bg-[#FF4500] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Be The Change</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-[#FFDED6] leading-relaxed">Join our community of changemakers and help us create a world where every woman has the opportunity to thrive and succeed.</p>
          <Link to="/volunteer" className="inline-block px-12 py-5 bg-white text-[#FF4500] font-bold rounded-full text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            Join Our Community
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
