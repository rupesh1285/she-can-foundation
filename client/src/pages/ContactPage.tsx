import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Failed to send message.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-[#FDFBF7]">
      <section className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-center text-[#0F172A] mb-16">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-[#E11D48] to-[#9f1239] text-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-bold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:president@shecanfoundation.org" className="text-xl font-bold hover:underline break-words">president@shecanfoundation.org</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-bold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+918283841830" className="text-xl font-bold hover:underline">+91 82838 41830</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-bold uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-lg font-medium leading-relaxed">
                      107/73 A, Jawahir Nagar,<br/>
                      Bhaduriya Chauraha, R.K. Nagar,<br/>
                      Kanpur Nagar, UP 208012
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4 relative z-10">
              <a href="https://www.instagram.com/shecanfoundation.ngo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#E11D48] transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/shecanfoundation" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#E11D48] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 focus:border-[#E11D48] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 focus:border-[#E11D48] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 focus:border-[#E11D48] transition-colors resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a253a] transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 max-w-6xl mx-auto">
          <ImagePlaceholder 
            label="CONTACT — Community photo / Field work"
            path="/public/images/about-field.jpg"
            ratio="16:9"
            className="rounded-[3rem]"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
