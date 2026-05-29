import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message.');
    }
    setLoading(false);
  };

  const inputClasses = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#FF4500] focus:ring-4 focus:ring-[#FFD6EC] transition-all bg-white text-gray-800 font-medium placeholder:text-gray-400";

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1A1A2E] mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Have a question or want to work together? We'd love to hear from you.</p>
        </div>

        <div className="flex flex-col lg:flex-row bg-[#FFD6EC]/10 rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#FFD6EC]/50 overflow-hidden">
          
          <div className="lg:w-2/5 relative overflow-hidden group p-10 md:p-14 text-white flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500] to-[#1A0A12] z-0 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-10"></div>
            <div className="absolute bottom-[-20%] left-[-20%] w-80 h-80 bg-[#FF6BB5]/20 rounded-full blur-3xl z-10"></div>
            
            <div className="relative z-20 flex-1">
              <h3 className="text-3xl font-bold font-serif mb-8 text-white tracking-wide">Contact Information</h3>
              
              <div className="space-y-8">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">
                    <Mail size={24} className="text-[#FFD6EC]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium mb-1">Email us at</p>
                    <p className="font-bold text-lg">shecanfoundation.ngo@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">
                    <MapPin size={24} className="text-[#FFD6EC]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium mb-1">Headquarters</p>
                    <p className="font-bold text-lg">New Delhi, India</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">
                    <Phone size={24} className="text-[#FFD6EC]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium mb-1">Call us</p>
                    <p className="font-bold text-lg">+91 98765 43210</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-10 md:p-14 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Your Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClasses} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Your Email</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClasses} placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Message</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={5} className={`${inputClasses} resize-none`} placeholder="How can we help you?" />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading} 
                type="submit" 
                className="w-full py-5 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-[#1A0A12] to-[#3a1528] shadow-lg disabled:opacity-70 transition-all flex justify-center items-center gap-2 mt-4"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};
