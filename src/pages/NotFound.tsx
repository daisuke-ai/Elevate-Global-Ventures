import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative pt-20 pb-32 bg-darkblue-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white mb-4">404</h1>
            <p className="text-2xl text-blue-100 mb-8">Page Not Found</p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="btn-primary inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
