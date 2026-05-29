import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { Shield, ArrowRight } from 'lucide-react';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`/api/admin/login`, { email, password });
      login(res.data.token, res.data.admin.role);
      toast.success('Logged in successfully');
      navigate('/admin/dashboard');
    } catch {
      toast.error('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-8">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/Must use image, having so much happy children and voulnteer.avif")' }}
      >
        <div className="absolute inset-0 bg-[#1A0A12]/70 backdrop-blur-sm"></div>
      </div>

      {/* Big Window Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-5xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/20 bg-white/10 backdrop-blur-2xl">
        
        {/* Left Side: Branding & Motivation */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-between bg-gradient-to-br from-[#FF4500]/90 to-[#CC3700]/95 text-white">
          <div>
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-xl p-3">
              <img src="/images/logo.png" alt="She Can Foundation" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Welcome back, <br/>Changemaker.
            </h1>
            <p className="text-lg text-white/90 font-medium leading-relaxed">
              Empowering communities, one decision at a time. Your work behind the scenes creates the impact that changes lives on the frontlines.
            </p>
          </div>
          <div className="hidden md:block mt-12">
            <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white/80">
              <Shield size={20} />
              Secure Admin Portal
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 bg-white flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">Sign In</h2>
            <p className="text-gray-500 font-medium">Access your dashboard to manage foundation operations.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                required 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="admin@shecanfoundation.ngo"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent bg-gray-50/50 transition-all text-gray-800 font-medium" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input 
                required 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="••••••••"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent bg-gray-50/50 transition-all text-gray-800 font-medium" 
              />
            </div>
            <button 
              disabled={loading} 
              type="submit" 
              className="w-full py-4 mt-6 rounded-xl text-white font-bold bg-[#FF4500] hover:bg-[#CC3700] shadow-lg hover:shadow-xl disabled:opacity-70 transition-all flex items-center justify-center gap-3 text-lg"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
              {!loading && <ArrowRight size={22} />}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
