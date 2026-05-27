import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

// Loading fallback component
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FFD6EC]/10">
    <div className="w-16 h-16 border-4 border-[#FFD6EC] border-t-[#E91E8C] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
            <Footer />
          </>
        } />
        
        <Route path="/admin/login" element={
          <Suspense fallback={<Loader />}>
            <AdminLogin />
          </Suspense>
        } />
        
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
