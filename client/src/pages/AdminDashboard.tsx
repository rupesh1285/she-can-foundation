import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Heart, LogOut, Users, Award, MessageSquare, Download, Trash2, CheckCircle, Circle, Shield, Plus } from 'lucide-react';
import type { Volunteer, Ambassador, Contact, Admin } from '../types';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'volunteers' | 'ambassadors' | 'contacts' | 'admins'>('volunteers');
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [adminsList, setAdminsList] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [deleteTarget, setDeleteTarget] = useState<{type: string, id: string} | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // New admin state
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  
  const { token, role, logout } = useAuth();
  const navigate = useNavigate();

  const api = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const requests = [
        api.get('/api/admin/volunteers'),
        api.get('/api/admin/ambassadors'),
        api.get('/api/admin/contacts')
      ];
      
      if (role === 'master') {
        requests.push(api.get('/api/admin/admins'));
      }
      
      const responses = await Promise.all(requests);
      setVolunteers(responses[0].data);
      setAmbassadors(responses[1].data);
      setContacts(responses[2].data);
      if (role === 'master') {
        setAdminsList(responses[3].data);
      }
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
  }, [role]);

  // Real-time EventSource connection for instant force-logout
  useEffect(() => {
    if (token) {
      const sse = new EventSource(`/api/admin/stream?token=${token}`);
      sse.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data);
          if (data.action === 'force_logout') {
            toast.error('Your admin access has been revoked by the Master Admin.', { duration: 5000 });
            handleLogout();
          }
        } catch (err) {}
      };
      
      return () => {
        sse.close();
      };
    }
  }, [token]);

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

  const handleDeleteClick = (type: string, id: string) => {
    setDeleteTarget({ type, id });
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await api.delete(`/api/admin/${deleteTarget.type}/${deleteTarget.id}`);
      toast.success('Record deleted');
      fetchData();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to delete record');
    }
    setDeleteTarget(null);
    setIsDeleting(false);
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingAdmin(true);
    try {
      await api.post('/api/admin/admins', { email: newAdminEmail, password: newAdminPassword });
      toast.success('Admin created successfully');
      setNewAdminEmail('');
      setNewAdminPassword('');
      fetchData();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to create admin');
    }
    setCreatingAdmin(false);
  };

  const downloadCSV = (type: string) => {
    if (type === 'admins') return;
    window.open(`/api/admin/${type}/export/csv?token=${token}`, '_blank');
  };

  const stats = [
    { label: 'Volunteers', count: volunteers.length, icon: <Users size={24} />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Ambassadors', count: ambassadors.length, icon: <Award size={24} />, color: 'bg-purple-100 text-purple-600' },
    { label: 'Messages', count: contacts.length, icon: <MessageSquare size={24} />, color: 'bg-green-100 text-green-600' },
    { label: 'New Today', count: [...volunteers, ...ambassadors, ...contacts].filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length, icon: <Heart size={24} />, color: 'bg-orange-100 text-[#FF4500]' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative">
      
      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A0A12]/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl transform transition-all border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-red-500">
              <Trash2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center text-[#1A1A2E] mb-2">
              {deleteTarget.type === 'admins' ? 'Delete Admin' : 'Confirm Deletion'}
            </h3>
            <p className="text-center text-gray-500 mb-8 font-medium px-2">
              {deleteTarget.type === 'admins' 
                ? 'Deleting this admin will invalidate their credentials. The admin will no longer be able to log in to the admin portal using these credentials.' 
                : 'Are you absolutely sure you want to delete this record? This action cannot be undone.'}
            </p>
            <div className="flex gap-4">
              <button 
                disabled={isDeleting}
                onClick={() => setDeleteTarget(null)} 
                className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                disabled={isDeleting}
                onClick={confirmDelete} 
                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#1A0A12] text-white p-6 flex flex-col shrink-0">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden shrink-0">
            <img src="/images/logo.png" alt="She Can Foundation Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold font-serif">Admin Portal</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <button onClick={() => setActiveTab('volunteers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'volunteers' ? 'bg-[#FF4500] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <Users size={20} /> Volunteers
          </button>
          <button onClick={() => setActiveTab('ambassadors')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'ambassadors' ? 'bg-[#FF4500] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <Award size={20} /> Ambassadors
          </button>
          <button onClick={() => setActiveTab('contacts')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contacts' ? 'bg-[#FF4500] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
            <MessageSquare size={20} /> Messages
          </button>
          {role === 'master' && (
            <button onClick={() => setActiveTab('admins')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'admins' ? 'bg-[#FF4500] text-white' : 'text-gray-400 hover:bg-white/10'}`}>
              <Shield size={20} /> Manage Admins
            </button>
          )}
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
              <h4 className="text-3xl font-bold text-[#1A1A2E]">{stat.count}</h4>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#1A1A2E] capitalize">{activeTab.replace('-', ' ')}</h3>
            {activeTab !== 'admins' && (
              <button onClick={() => downloadCSV(activeTab)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                <Download size={16} /> Export CSV
              </button>
            )}
          </div>

          <div className="p-6">
            {activeTab === 'admins' && role === 'master' && (
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-[#1A1A2E] mb-4 flex items-center gap-2"><Shield size={18} className="text-[#FF4500]"/> Add New Admin</h4>
                <form onSubmit={handleCreateAdmin} className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" required value={newAdminEmail} onChange={e => setNewAdminEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" required value={newAdminPassword} onChange={e => setNewAdminPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]" />
                  </div>
                  <button disabled={creatingAdmin} type="submit" className="px-6 py-2 bg-[#FF4500] hover:bg-[#CC3700] text-white font-medium rounded-lg flex items-center gap-2 transition-colors h-[42px]">
                    <Plus size={18} /> {creatingAdmin ? 'Creating...' : 'Create Admin'}
                  </button>
                </form>
              </div>
            )}

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading data...</div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm">
                      <th className="p-4 font-medium">{activeTab === 'admins' ? 'Email Address' : 'Name / Email'}</th>
                      {activeTab !== 'admins' && <th className="p-4 font-medium">Date</th>}
                      <th className="p-4 font-medium">{activeTab === 'admins' ? 'Role' : 'Details'}</th>
                      {activeTab !== 'admins' && <th className="p-4 font-medium">Status</th>}
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activeTab === 'admins' ? (
                      adminsList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4">
                            <p className="font-medium text-[#1A1A2E]">{item.email}</p>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${item.role === 'master' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                              {item.role === 'master' ? <Shield size={12} /> : <Users size={12} />}
                              {item.role.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 flex gap-2">
                            {item.role !== 'master' && (
                              <button onClick={() => handleDeleteClick('admins', (item._id || item.id) as string)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete record">
                                <Trash2 size={18} />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      (activeTab === 'volunteers' ? volunteers : activeTab === 'ambassadors' ? ambassadors : contacts).map((item: any) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4">
                            <p className="font-medium text-[#1A1A2E]">{item.name}</p>
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
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${item.status === 'new' ? 'bg-orange-100 text-[#FF4500]' : 'bg-green-100 text-green-700'}`}>
                              {item.status === 'new' ? <Circle size={10} fill="currentColor" /> : <CheckCircle size={12} />}
                              {item.status}
                            </span>
                          </td>
                          <td className="p-4 flex gap-2">
                            <button onClick={() => toggleStatus(activeTab, item._id)} className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Mark as reviewed">
                              <CheckCircle size={18} />
                            </button>
                            <button onClick={() => handleDeleteClick(activeTab, item._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete record">
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                    
                    {/* Empty states */}
                    {activeTab === 'admins' && adminsList.length === 0 && (
                      <tr><td colSpan={3} className="p-10 text-center text-gray-500">No admins found.</td></tr>
                    )}
                    {activeTab !== 'admins' && (activeTab === 'volunteers' ? volunteers : activeTab === 'ambassadors' ? ambassadors : contacts).length === 0 && (
                      <tr><td colSpan={5} className="p-10 text-center text-gray-500">No records found.</td></tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
