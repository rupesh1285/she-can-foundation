import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', contribution: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/volunteers`, formData);
      toast.success('Thank you for joining us! We will reach out soon.');
      setFormData({ name: '', email: '', phone: '', city: '', contribution: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const inputClasses = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#FF4500] focus:ring-4 focus:ring-[#FFD6EC] transition-all bg-gray-50/50 hover:bg-white text-gray-800 font-medium";

  return (
    <section id="volunteer" className="py-24 bg-gradient-to-b from-white to-[#FFD6EC]/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(233,30,140,0.1)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden"
        >
          {/* Left Side: Image / Emotion */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A12]/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Volunteers helping" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-10 z-20">
              <div className="inline-block px-4 py-2 bg-[#FF4500] text-white rounded-full text-sm font-bold mb-4">Be The Change</div>
              <h3 className="text-3xl font-bold font-serif text-white mb-3">Join our community of changemakers.</h3>
              <p className="text-gray-200">Your time and skills can help transform the lives of thousands of women across India.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-10 md:p-14 lg:p-16">
            <div className="mb-10">
              <h2 className="text-3xl font-bold font-serif text-[#1A1A2E] mb-2">Apply to Volunteer</h2>
              <p className="text-gray-500">Fill out the form below and our team will get in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClasses} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClasses} placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={inputClasses} placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">City & State</label>
                  <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className={inputClasses} placeholder="Mumbai, Maharashtra" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">How do you want to contribute?</label>
                <div className="relative">
                  <select required value={formData.contribution} onChange={e => setFormData({...formData, contribution: e.target.value})} className={`${inputClasses} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select your role...</option>
                    <option value="Tech Volunteer">Tech Volunteer</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Field Work">Field Work</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Why do you want to join? (Optional)</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className={`${inputClasses} resize-none`} placeholder="Share your motivation..." />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading} 
                type="submit" 
                className="w-full py-5 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-[#FF4500] to-[#FF6BB5] shadow-[0_10px_20px_-10px_rgba(233,30,140,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(233,30,140,0.6)] disabled:opacity-70 transition-all flex justify-center items-center gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Application'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
