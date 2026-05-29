import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Award } from 'lucide-react';

export const CampusAmbassador = () => {
  const [formData, setFormData] = useState({ name: '', email: '', college: '', city: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/ambassadors`, formData);
      toast.success('Application submitted successfully!');
      setFormData({ name: '', email: '', college: '', city: '' });
    } catch {
      toast.error('Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFD6EC]/50 text-[#FF4500] mb-6">
              <Award size={32} />
            </div>
            <h2 className="text-4xl font-bold font-serif text-[#1A1A2E] mb-4">Become a Campus Ambassador</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FF4500] to-[#FF6BB5] mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Represent She Can Foundation at your college. Earn certificates, Letter of Recommendation (LOR), and invaluable leadership experience while making a real difference.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-[#FF4500] text-xl">✓</span> Lead initiatives on campus
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-[#FF4500] text-xl">✓</span> Network with industry leaders
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-[#FF4500] text-xl">✓</span> Exclusive access to workshops
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#FFD6EC]/10 p-8 rounded-[2rem] border border-[#FFD6EC]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">College Email</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">College Name</label>
                  <input required type="text" value={formData.college} onChange={e => setFormData({...formData, college: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                </div>
                <button disabled={loading} type="submit" className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#FF4500] to-[#FF6BB5] hover:shadow-lg disabled:opacity-70 transition-all mt-4">
                  {loading ? 'Applying...' : 'Apply Now'}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
