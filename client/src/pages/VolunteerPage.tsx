import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Send, CheckCircle2 } from 'lucide-react';

export const VolunteerPage = () => {
  const [volData, setVolData] = useState({ name: '', email: '', phone: '', city: '', contribution: 'education', message: '' });
  const [ambData, setAmbData] = useState({ name: '', email: '', phone: '', college: '', year: '', whyJoin: '' });
  
  const [loading, setLoading] = useState(false);

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(volData)
      });
      const data = await res.json();
      if(res.ok) {
        toast.success(data.message || 'Application submitted successfully!');
        setVolData({ name: '', email: '', phone: '', city: '', contribution: 'education', message: '' });
      } else {
        toast.error(data.message || 'Failed to submit application.');
      }
    } catch {
      toast.error('An error occurred.');
    } finally { setLoading(false); }
  };

  const handleAmbassadorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ambassador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ambData)
      });
      const data = await res.json();
      if(res.ok) {
        toast.success(data.message || 'Application submitted successfully!');
        setAmbData({ name: '', email: '', phone: '', college: '', year: '', whyJoin: '' });
      } else {
        toast.error(data.message || 'Failed to submit application.');
      }
    } catch {
      toast.error('An error occurred.');
    } finally { setLoading(false); }
  };

  return (
    <div className="pt-24 bg-[#FDFBF7]">
      <section className="container mx-auto px-4 md:px-8 py-12 text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-6">Be The Change</h1>
        <p className="text-xl text-gray-600">Join our community of changemakers and help us create a world where every woman has the opportunity to thrive and succeed.</p>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24 max-w-6xl">
        
        {/* General Volunteer Form */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-8 text-center">General Volunteer Registration</h2>
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Full Name</label>
                  <input type="text" required value={volData.name} onChange={e=>setVolData({...volData,name:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Email</label>
                  <input type="email" required value={volData.email} onChange={e=>setVolData({...volData,email:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Phone Number</label>
                  <input type="tel" required value={volData.phone} onChange={e=>setVolData({...volData,phone:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">City & State</label>
                  <input type="text" required value={volData.city} onChange={e=>setVolData({...volData,city:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">How would you like to contribute?</label>
                <select value={volData.contribution} onChange={e=>setVolData({...volData,contribution:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none">
                  <option value="education">Education & Teaching</option>
                  <option value="digital">Digital Literacy</option>
                  <option value="healthcare">Healthcare & Hygiene Drives</option>
                  <option value="community">Community Organizing</option>
                  <option value="other">Other Skills (Marketing, Tech, etc)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Message (Optional)</label>
                <textarea rows={3} value={volData.message} onChange={e=>setVolData({...volData,message:e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF4500]/50 outline-none resize-none"></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" disabled={loading} className="px-10 py-4 bg-[#FF4500] text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Register as Volunteer'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Campus Ambassador */}
        <div className="bg-[#0F172A] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 text-[#FF8C66] text-sm font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">Student Program</div>
              <h2 className="text-4xl font-serif font-bold mb-6">Become a Campus Ambassador</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                Represent She Can Foundation at your college. Earn certificates, Letter of Recommendation, and leadership experience while making real impact.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Verified Offer Letter",
                  "Completion Certificate",
                  "Performance Based LOR",
                  "Real NGO Project Experience",
                  "Flexible Remote Work",
                  "Future Core Team Opportunities"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 size={24} className="text-[#FF4500]" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <form onSubmit={handleAmbassadorSubmit} className="space-y-5">
                <div>
                  <input type="text" required placeholder="Full Name" value={ambData.name} onChange={e=>setAmbData({...ambData,name:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400" />
                </div>
                <div>
                  <input type="email" required placeholder="Email Address" value={ambData.email} onChange={e=>setAmbData({...ambData,email:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400" />
                </div>
                <div>
                  <input type="tel" required placeholder="Phone Number" value={ambData.phone} onChange={e=>setAmbData({...ambData,phone:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="College Name" value={ambData.college} onChange={e=>setAmbData({...ambData,college:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400" />
                  <input type="text" required placeholder="Current Year" value={ambData.year} onChange={e=>setAmbData({...ambData,year:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400" />
                </div>
                <div>
                  <textarea required rows={3} placeholder="Why do you want to join?" value={ambData.whyJoin} onChange={e=>setAmbData({...ambData,whyJoin:e.target.value})} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF4500] outline-none text-white placeholder-gray-400 resize-none"></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 bg-[#FF4500] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#CC3700] transition-colors disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Apply Now'} <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
