import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export const StoriesPage = () => {
  return (
    <div className="pt-24 bg-[#FDFBF7]">
      <section className="container mx-auto px-4 md:px-8 py-12 text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-6">Real Impact.<br/>Real Lives.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how your support is directly transforming the lives of women and communities across India.</p>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-12 pb-24">
        <div className="flex flex-col gap-16">
          
          {/* Story 1 */}
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl items-center">
            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder 
                label="STORY — Ground level photo: sanitary pad drive"
                path="/public/images/story-1.jpg"
                ratio="16:9"
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="inline-block px-4 py-2 bg-[#FFE4E6] text-[#E11D48] text-sm font-bold uppercase tracking-widest rounded-full mb-6">Healthcare & Menstrual Hygiene</div>
              <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6">Her Period Shouldn't End Her Education</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every month, girls in small villages are forced to miss school because they cannot afford sanitary pads. She Can Foundation has reached 1,20,000+ girls with free pads and dignity kits across India. By removing this barrier, we ensure that their education continues uninterrupted, giving them the power to shape their own futures.
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 bg-[#0F172A] text-white rounded-[3rem] p-8 md:p-12 shadow-xl items-center">
            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder 
                label="STORY — Women learning on computers/phones"
                path="/public/images/story-2.jpg"
                ratio="16:9"
                className="rounded-3xl shadow-lg border border-white/10"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="inline-block px-4 py-2 bg-white/10 text-[#FDA4AF] text-sm font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">Digital Literacy</div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">From No Phone to Running a Business</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Through our digital literacy programs, women who had never used a smartphone are now running small businesses online and supporting their families. We teach essential skills like online banking, digital safety, and social media marketing to bridge the technology gap for women in the modern, connected economy.
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="flex flex-col lg:flex-row gap-12 bg-[#E11D48] text-white rounded-[3rem] p-8 md:p-12 shadow-xl items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="lg:w-1/2 w-full relative z-10">
              <ImagePlaceholder 
                label="STORY — Community kitchen/meal drive"
                path="/public/images/story-3.jpg"
                ratio="16:9"
                className="rounded-3xl shadow-2xl border border-white/20"
              />
            </div>
            <div className="lg:w-1/2 w-full relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full mb-6 backdrop-blur-md">Community Programs</div>
              <h2 className="text-4xl font-serif font-bold mb-6">No One Goes Hungry</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Our community programs have organized food distribution drives, reaching hundreds of families in need across Kanpur and surrounding areas. In times of crisis and hardship, our volunteers mobilize to provide warm meals, essential groceries, and community support to the most vulnerable.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-[#FFE4E6] py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-3xl md:text-5xl font-serif font-bold text-[#E11D48] leading-tight mb-8">
            "When you educate and empower a woman, you change the trajectory of her entire family and community."
          </p>
          <div className="w-16 h-1 bg-[#E11D48] mx-auto mb-8 rounded-full"></div>
          <Link to="/volunteer" className="inline-block px-10 py-4 bg-[#0F172A] text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all">
            Be Part of the Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
