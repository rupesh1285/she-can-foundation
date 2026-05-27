import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#1A0A12] text-white overflow-hidden pt-32 pb-12">
      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center opacity-5 pointer-events-none select-none z-0">
        <h1 className="text-[25vw] font-serif font-black tracking-tighter whitespace-nowrap leading-none">
          SHE CAN
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Massive Call to Action */}
        <div className="border-b border-white/10 pb-20 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-bold tracking-tighter leading-[0.9] mb-12 max-w-4xl"
          >
            Let's create <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#FF6BB5]">impact</span> together.
          </motion.h2>
          
          <a href="#volunteer" className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border-b-4 border-white/30 hover:border-[#E91E8C] pb-2 transition-colors group">
            Start a conversation 
            <ArrowUpRight size={40} className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 text-[#E91E8C]" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-5 lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Heart size={28} className="fill-[#E91E8C] text-[#E91E8C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-3xl tracking-tight leading-none mb-1">She Can</span>
                <span className="text-xs font-bold tracking-[0.3em] text-[#E91E8C] uppercase leading-tight">Foundation</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Registered under the Indian Society Registration Act of 1860. Empowering women through education and digital initiatives.
            </p>
            <div className="flex gap-4 mt-auto">
              {[
                { icon: <Instagram size={20} />, href: "https://instagram.com/shecanfoundation.ngo" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E91E8C] hover:border-[#E91E8C] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About Us', 'Programs', 'Impact', 'Volunteer'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-lg font-bold text-white hover:text-[#E91E8C] transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Contact</h4>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:shecanfoundation.ngo@gmail.com" className="text-lg font-bold hover:text-[#E91E8C] transition-colors break-words">shecanfoundation.ngo@gmail.com</a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                <p className="text-lg font-bold">New Delhi, India</p>
              </div>
              <div>
                <a href="/admin/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors mt-4">
                  Admin Portal <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium">© {new Date().getFullYear()} She Can Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white font-medium text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white font-medium text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
