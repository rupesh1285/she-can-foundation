import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Volunteer', href: '#volunteer' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-[2rem] transition-all duration-500 border ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(233,30,140,0.15)] border-white/50 py-3 px-6' 
          : 'bg-white/40 backdrop-blur-xl border-white/30 py-4 px-8 shadow-2xl shadow-black/5'
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-12 h-12 rounded-[1.2rem] bg-gradient-to-br from-[#E91E8C] to-[#FF6BB5] shadow-[0_10px_20px_-10px_rgba(233,30,140,0.6)] flex items-center justify-center text-white"
          >
            <Heart size={24} className="fill-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-[#1A1A2E] leading-none">She Can</span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#E91E8C] uppercase leading-tight mt-1">Foundation</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-3 rounded-full border border-white/60 shadow-[inset_0_2px_10px_rgba(255,255,255,1)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold tracking-wide text-gray-700 hover:text-[#E91E8C] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E91E8C] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="text-sm font-bold text-gray-700 hover:text-[#E91E8C] transition-colors px-2">Contact</a>
          <a 
            href="#volunteer" 
            className="px-6 py-2.5 rounded-full bg-[#1A1A2E] text-white text-sm font-bold shadow-[0_10px_20px_-10px_rgba(26,26,46,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(26,26,46,0.8)] hover:bg-[#E91E8C] hover:-translate-y-0.5 transition-all duration-300"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center text-[#1A1A2E]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-6 pb-4 px-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-[#1A1A2E]"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-200/50 w-full my-2"></div>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#1A1A2E]">Contact</a>
              <a href="#volunteer" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center py-4 rounded-xl bg-[#E91E8C] text-white font-bold">Join Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};