import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Heart, LogOut, Users, Award, MessageSquare, Download, Trash2, CheckCircle, Circle } from 'lucide-react';
import { Volunteer, Ambassador, Contact } from '../types';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'volunteers' | 'ambassadors' | 'contacts'>('volunteers');
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
    headers: { Authorization: `Bearer ${token}` }
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [vRes, aRes, cRes] = await Promise.all([
        api.get('/api/admin/volunteers'),
        api.get('/api/admin/ambassadors'),
        api.get('/api/admin/contacts')
      ]);
      setVolunteers(vRes.data);
      setAmbassadors(aRes.data);
      setContacts(cRes.data);
    } catch (error) {
      toast.error('Failed to load data. Session might be expired.');
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        handleLogout();
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const toggleStatus = async (type: string, id: string) => {
    try {
      await api.patch(`/api/admin/${type}/${id}/status`);
      toast.success('Status updated');
      fetchData();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (type: string, id: string) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      await api.delete(`/api/admin/${type}/${id}`);
      toast.success('Record deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete record');
    }
  };

  const downloadCSV = (type: string) => {
    window.open(`${api.defaults.baseURL}/api/admin/${type}/export/csv?token=${token}`, '_blank');
  };

  const stats = [
    { label: 'Volunteers', count: volunteers.length, icon: <Users size={24} />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Ambassadors', count: ambassadors.length, icon: <Award size={24} />, color: 'bg-purple-100 text-purple-600' },
    { label: 'Messages', count: contacts.length, icon: <MessageSquare size={24} />, color: 'bg-green-100 text-green-600' },
    { label: 'New Today', count: [...volunteers, ...ambassadors, ...contacts].filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length, icon: <Heart size={24} />, color: 'bg-pink-100 text-[#E11D48]' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0F172A] text-white p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-10">
          <Heart className="text-[#E11D48]" fill="#E11D48" size={24} />
          <span className="text-xl font-bold font-serif">Admin Portal</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <button onClick={() => setActiveTab('volunteers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'volunteers' ? 'bg-[#E11D48] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <Users size={20} /> Volunteers
          </button>
          <button onClick={() => setActiveTab('ambassadors')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'ambassadors' ? 'bg-[#E11D48] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <Award size={20} /> Ambassadors
          </button>
          <button onClick={() => setActiveTab('contacts')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contacts' ? 'bg-[#E11D48] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <MessageSquare size={20} /> Messages
          </button>
        </nav>

        <button onClick={handleLogout} className="mt-auto w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h4 className="text-3xl font-bold text-[#0F172A]">{stat.count}</h4>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#0F172A] capitalize">{activeTab}</h3>
            <button onClick={() => downloadCSV(activeTab)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
              <Download size={16} /> Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-10 text-center text-gray-500">Loading data...</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm">
                    <th className="p-4 font-medium">Name / Email</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Details</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(activeTab === 'volunteers' ? volunteers : activeTab === 'ambassadors' ? ambassadors : contacts).map((item: any) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <p className="font-medium text-[#0F172A]">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.email}</p>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        {activeTab === 'volunteers' && <p className="text-sm text-gray-700"><span className="font-medium">Role:</span> {item.contribution}</p>}
                        {activeTab === 'ambassadors' && <p className="text-sm text-gray-700"><span className="font-medium">College:</span> {item.college}</p>}
                        {activeTab === 'contacts' && <p className="text-sm text-gray-700 truncate max-w-xs">{item.message}</p>}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${item.status === 'new' ? 'bg-pink-100 text-[#E11D48]' : 'bg-green-100 text-green-700'}`}>
                          {item.status === 'new' ? <Circle size={10} fill="currentColor" /> : <CheckCircle size={12} />}
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button onClick={() => toggleStatus(activeTab, item._id)} className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Mark as reviewed">
                          <CheckCircle size={18} />
                        </button>
                        <button onClick={() => handleDelete(activeTab, item._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete record">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {(activeTab === 'volunteers' ? volunteers : activeTab === 'ambassadors' ? ambassadors : contacts).length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-10 text-center text-gray-500">No records found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
