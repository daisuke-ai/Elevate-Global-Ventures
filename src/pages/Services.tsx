import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { PropertyForm } from '../components/PropertyForm';
import { LoanForm } from '../components/LoanForm';
import { Home, DollarSign, Calculator, Clock, Shield, TrendingUp, Building2, Briefcase } from 'lucide-react';

const Services = () => {
  const [isPropertyFormOpen, setIsPropertyFormOpen] = useState(false);
  const [isLoanFormOpen, setIsLoanFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-darkblue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Real Estate Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to sell your property or need financing for your next real estate investment,
              we've got you covered with comprehensive solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Property Buying Service */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="text-center mb-12">
            <Home className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-darkblue-900 mb-4">We Buy Houses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a fair cash offer for your home and close on your timeline. No repairs needed, no realtor fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Closing</h3>
              <p className="text-gray-600">Close in as little as 7 days or on your timeline.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fair Cash Offer</h3>
              <p className="text-gray-600">Get a competitive cash offer with no hidden fees.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Any Condition</h3>
              <p className="text-gray-600">We buy homes in any condition. No repairs needed.</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsPropertyFormOpen(true)}
              className="btn-primary text-lg"
            >
              Get Your Cash Offer
            </button>
          </div>
        </div>

        {/* Private Lending Service */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="text-center mb-12">
            <Briefcase className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-darkblue-900 mb-4">Private Lending Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, flexible financing for your real estate investments. Competitive rates and quick approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fix & Flip Loans</h3>
              <p className="text-gray-600">Short-term financing for property renovation and resale projects.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rental Property Loans</h3>
              <p className="text-gray-600">Long-term financing solutions for buy-and-hold investors.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Calculator className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bridge Loans</h3>
              <p className="text-gray-600">Short-term financing to bridge funding gaps in real estate transactions.</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsLoanFormOpen(true)}
              className="btn-primary text-lg"
            >
              Apply for Financing
            </button>
          </div>
        </div>
      </div>

      {/* Forms */}
      <PropertyForm isOpen={isPropertyFormOpen} onClose={() => setIsPropertyFormOpen(false)} />
      <LoanForm isOpen={isLoanFormOpen} onClose={() => setIsLoanFormOpen(false)} />

      <Footer />
    </div>
  );
};

export default Services;
