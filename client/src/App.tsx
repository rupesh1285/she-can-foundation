import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ProgramsPage = React.lazy(() => import('./pages/ProgramsPage'));
const StoriesPage = React.lazy(() => import('./pages/StoriesPage'));
const VolunteerPage = React.lazy(() => import('./pages/VolunteerPage'));
const DonatePage = React.lazy(() => import('./pages/DonatePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

// Layout component to include Navbar and Footer conditionally
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

// Loading fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
    <div className="w-12 h-12 border-4 border-[#FFDED6] border-t-[#FF4500] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" toastOptions={{ className: 'font-bold' }} />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/programs" element={<Layout><ProgramsPage /></Layout>} />
          <Route path="/stories" element={<Layout><StoriesPage /></Layout>} />
          <Route path="/volunteer" element={<Layout><VolunteerPage /></Layout>} />
          <Route path="/donate" element={<Layout><DonatePage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

          {/* Admin Routes without general Layout */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
