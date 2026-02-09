import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MainLayout() {
  useEffect(() => {
    // Force RTL direction for the main layout
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    return () => {
      // Clean up (optional, mainly for SPA switching)
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-dubai bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;