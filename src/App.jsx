import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';

// Public pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes with MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* Redirecting old routes to Home sections for now since we consolidated content */}
            <Route path="about" element={<HomePage />} />
            <Route path="services" element={<HomePage />} />
            <Route path="contact" element={<HomePage />} />
          </Route>

       
        </Routes>
        <Toaster />
    </BrowserRouter>
  );
}

export default App;