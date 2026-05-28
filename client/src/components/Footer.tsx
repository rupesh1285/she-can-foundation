import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden pt-32 pb-12">
      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center opacity-5 pointer-events-none select-none z-0">
        <h1 className="text-[25vw] font-serif font-black tracking-tighter whitespace-nowrap leading-none">
          SHE CAN
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Call to Action */}
        <div className="border-b border-white/10 pb-20 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-bold tracking-tighter leading-[0.9] mb-12 max-w-4xl"
          >
            Let's create <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FDA4AF]">impact</span> together.
          </motion.h2>
          
          <Link to="/volunteer" className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border-b-4 border-white/30 hover:border-[#E11D48] pb-2 transition-colors group">
            Start a conversation 
            <ArrowUpRight size={40} className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 text-[#E11D48]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-xl overflow-hidden border border-white/20 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    (e.target as HTMLElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-[8px] font-bold text-center leading-tight text-gray-800 p-1">
                  [LOGO]
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-3xl tracking-tight leading-none mb-1">She Can!</span>
                <span className="text-xs font-bold tracking-[0.3em] text-[#E11D48] uppercase leading-tight">Foundation</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Empowering women. Transforming lives. <br/><br/>
              Registered under Indian Society Act XXI of 1860.<br/>
              Registration No: KAP/00504/2023-2024
            </p>
            <div className="flex gap-4 mt-auto">
              {[
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/shecanfoundation.ngo" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/shecanfoundation" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E11D48] hover:border-[#E11D48] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Impact Stories', path: '/stories' },
                { name: 'Volunteer', path: '/volunteer' }
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-lg font-bold text-white hover:text-[#E11D48] transition-colors w-fit">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Contact Info</h4>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:president@shecanfoundation.org" className="text-lg font-bold hover:text-[#E11D48] transition-colors break-words">president@shecanfoundation.org</a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a href="tel:+918283841830" className="text-lg font-bold hover:text-[#E11D48] transition-colors">+91 82838 41830</a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                <p className="text-base font-bold leading-snug">107/73 A, Jawahir Nagar,<br/>Bhaduriya Chauraha, R.K. Nagar,<br/>Kanpur Nagar, UP 208012</p>
              </div>
              <div>
                <Link to="/admin/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors mt-4">
                  Admin Portal <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} She Can Foundation. All rights reserved. <br className="md:hidden" />
            Website built with ❤️ as a contribution to She Can Foundation's mission.
          </p>
        </div>
      </div>
    </footer>
  );
};
