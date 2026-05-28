import React from 'react';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { Programs } from '../components/Programs';
import { InstagramSection } from '../components/InstagramSection';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ImpactStats />
      
      {/* Programs Preview */}
      <Programs isPreview={true} />

      {/* Stories/Impact Preview */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-[#0F172A]">Real Impact. Real Lives.</h2>
            </div>
            <Link to="/stories" className="text-[#E11D48] font-bold hover:underline hidden md:block">Read All Stories &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl">
              <ImagePlaceholder 
                label="STORY — Ground level photo: sanitary pad drive"
                path="/images/Image of a man having food in hand and he is happy.avif"
                ratio="16:9"
                className="mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">Her Period Shouldn't End Her Education</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Every month, girls in small villages are forced to miss school because they cannot afford sanitary pads. She Can Foundation has reached 1,20,000+ girls...</p>
              <Link to="/stories" className="text-[#E11D48] font-bold hover:underline">Read full story &rarr;</Link>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl">
              <ImagePlaceholder 
                label="STORY — Women learning on computers/phones"
                path="/images/Happy kids image of backward class.avif"
                ratio="16:9"
                className="mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">From No Phone to Running a Business</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Through our digital literacy programs, women who had never used a smartphone are now running small businesses online and supporting their families...</p>
              <Link to="/stories" className="text-[#E11D48] font-bold hover:underline">Read full story &rarr;</Link>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/stories" className="inline-block px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-[#E11D48]">Read All Stories</Link>
          </div>
        </div>
      </section>

      <InstagramSection />

      {/* Volunteer CTA */}
      <section className="py-32 bg-[#E11D48] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Be The Change</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-[#FFE4E6]">Join our community of changemakers and help us create a world where every woman has the opportunity to thrive and succeed.</p>
          <Link to="/volunteer" className="inline-block px-12 py-5 bg-white text-[#E11D48] font-bold rounded-full text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            Join Our Community
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
