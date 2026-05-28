import React from 'react';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export const DonatePage = () => {
  return (
    <div className="pt-24 bg-[#FDFBF7] min-h-screen">
      <section className="container mx-auto px-4 md:px-8 py-12 text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-6">Support Our Mission</h1>
        <p className="text-xl text-gray-600">Your donation directly funds sanitary pad drives, education programs, and community initiatives.</p>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[2rem] border border-[#E11D48]/10 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#FFE4E6] text-[#E11D48] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-4xl font-black font-serif text-[#0F172A] mb-2">₹300</h3>
            <p className="text-gray-600 font-medium">Provides 3 girls with sanitary pads for a month</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-[#E11D48]/10 shadow-xl text-center scale-105 border-b-4 border-b-[#E11D48]">
            <div className="w-16 h-16 bg-[#E11D48] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-4xl font-black font-serif text-[#0F172A] mb-2">₹1,000</h3>
            <p className="text-gray-600 font-medium">Keeps 10 girls in school safely and with dignity</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-[#E11D48]/10 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#0F172A] text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-4xl font-black font-serif text-[#0F172A] mb-2">₹5,000</h3>
            <p className="text-gray-600 font-medium">Sponsors a 2-week digital literacy workshop</p>
          </div>
        </div>

        <div className="text-center bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE4E6] rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-8 relative z-10">Make a secure donation via Razorpay</h2>
          
          <a 
            href="https://shecanfoundation.org/donate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 inline-block px-16 py-6 bg-gradient-to-r from-[#E11D48] to-[#FDA4AF] text-white font-bold rounded-full text-2xl shadow-[0_20px_40px_-10px_rgba(225,29,72,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(225,29,72,0.7)] hover:-translate-y-1 transition-all"
          >
            Donate Now
          </a>
          
          <p className="mt-8 text-sm text-gray-500 font-medium relative z-10">
            You will be redirected to our secure Razorpay donation page.<br/>
            We accept UPI, Cards, Net Banking.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
