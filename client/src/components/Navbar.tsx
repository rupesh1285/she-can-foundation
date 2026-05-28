import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Stories', href: '/stories' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-[2rem] transition-all duration-500 border ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(233,30,140,0.15)] border-white/50 py-3 px-6' 
          : 'bg-white/40 backdrop-blur-xl border-white/30 py-4 px-8 shadow-2xl shadow-black/5'
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* Brand - Real Logo Placeholder */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shrink-0">
            <img 
              src="/images/logo.png" 
              alt="She Can Foundation Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback text if image not placed yet
                (e.target as HTMLElement).style.display = 'none';
                (e.target as HTMLElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-[8px] font-bold text-center leading-tight text-gray-400 p-1">
              [LOGO: logo.png]
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-[#0F172A] leading-none">She Can!</span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#FF4500] uppercase leading-tight mt-1">Foundation</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 bg-white/50 px-8 py-3 rounded-full border border-white/60 shadow-[inset_0_2px_10px_rgba(255,255,255,1)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-bold tracking-wide transition-colors relative group ${isActive ? 'text-[#FF4500]' : 'text-gray-700 hover:text-[#FF4500]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF4500] transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/donate" 
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF8C66] text-white text-sm font-bold shadow-[0_10px_20px_-10px_rgba(225,29,72,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(225,29,72,0.8)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center text-[#0F172A]"
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
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-6 pb-4 px-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-lg font-bold ${location.pathname === link.href ? 'text-[#FF4500]' : 'text-[#0F172A]'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-200/50 w-full my-2"></div>
              <Link to="/donate" className="mt-2 text-center py-4 rounded-xl bg-gradient-to-r from-[#FF4500] to-[#FF8C66] text-white font-bold">Donate Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};