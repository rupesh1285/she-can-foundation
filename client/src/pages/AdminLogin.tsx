import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { Heart } from 'lucide-react';

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
      login(res.data.token);
      toast.success('Logged in successfully');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FFD6EC]/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-xl p-8">
        <div className="flex flex-col items-center mb-8">
          <Heart className="text-[#FF4500] mb-4" fill="#FF4500" size={48} />
          <h2 className="text-3xl font-bold font-serif text-[#1A1A2E]">Admin Portal</h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500] bg-gray-50" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              required 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500] bg-gray-50" 
            />
          </div>
          <button 
            disabled={loading} 
            type="submit" 
            className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#FF4500] to-[#FF6BB5] hover:shadow-lg disabled:opacity-70 transition-all"
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
