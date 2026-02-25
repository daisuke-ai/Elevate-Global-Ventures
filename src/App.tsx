import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Mission from './pages/Mission';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import StaffingPage from './pages/Staffing'; // Staffing and Call Center services page
import TaxPage from './pages/TaxPage'; // Placeholder for the new tax page
import RealEstateSupportPage from './pages/RealEstateSupportPage'; // Placeholder for the new real estate support page
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/staffing" element={<StaffingPage />} />
        <Route path="/tax" element={<TaxPage />} />
        <Route path="/real-estate-support" element={<RealEstateSupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;