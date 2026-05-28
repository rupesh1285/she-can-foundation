import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="pt-24 bg-[#FDFBF7]">
      {/* Hero Banner */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-center text-[#0F172A] mb-12">About Us</h1>
      </section>

      {/* Who We Are & How It Started */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              She Can Foundation is a youth-driven NGO working towards creating opportunities, awareness, and positive social impact through education, digital initiatives, and community-driven programs. We believe every woman deserves the chance to rise.
            </p>

            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6">How It Started</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              She Can Foundation was founded with a shared vision of creating a world where every woman has the opportunity to thrive and succeed.
            </p>
          </div>
          <div>
            <ImagePlaceholder 
              label="ABOUT — Field work photo: women sitting in outdoor learning session"
              path="/public/images/about-field.jpg"
              ratio="4:3"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-[#FFE4E6]/50 rounded-[3rem] border border-[#E11D48]/10">
              <h3 className="text-3xl font-serif font-bold text-[#E11D48] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower women and girls from marginalized communities through targeted interventions in education, health, and skill development, enabling them to lead independent and dignified lives.
              </p>
            </div>
            <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-3xl font-serif font-bold text-[#0F172A] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                An equitable society where every woman has access to resources, knowledge, and opportunities to realize her full potential and contribute actively to her community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 shrink-0">
              <ImagePlaceholder 
                label="FOUNDER — Photo of Reeta Mishra, Founder & President"
                path="/public/images/founder-reeta.jpg"
                ratio="1:1"
                className="rounded-full shadow-[0_0_50px_rgba(225,29,72,0.3)] border-4 border-white/10"
              />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic text-gray-300">
                "Together, we can break down barriers and empower women. At She Can Foundation, we believe that if we all do our part, there is no challenge too great to overcome. Join us in our mission to create a world where every woman has the opportunity to thrive and succeed."
              </p>
              <div>
                <h4 className="text-2xl font-bold text-white">Reeta Mishra</h4>
                <p className="text-[#FDA4AF] uppercase tracking-widest text-sm font-bold mt-1">Founder & President, She Can Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-12">Registration & Legitimacy</h2>
          
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ImagePlaceholder 
                label="CERTIFICATE"
                path="/public/images/certificate.jpg"
                ratio="4:3"
                className="w-96"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8 border-b border-gray-100 pb-4">
                Registered under Indian Society Act XXI of 1860
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">Registration No</p>
                  <p className="font-mono text-[#0F172A] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">KAP/00504/2023-2024</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">File No</p>
                  <p className="font-mono text-[#0F172A] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">K/KAP/0058902</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">Date</p>
                  <p className="text-[#0F172A] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">24/04/2023</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">Valid Until</p>
                  <p className="text-[#0F172A] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">23/04/2028</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">Location</p>
                  <p className="text-[#0F172A] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">Kanpur Nagar, Uttar Pradesh</p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center">
                <ImagePlaceholder 
                  label="CERTIFICATE — Society Registration Certificate image"
                  path="/public/images/certificate.jpg"
                  ratio="4:3"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link to="/volunteer" className="inline-block px-10 py-4 bg-[#E11D48] text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
