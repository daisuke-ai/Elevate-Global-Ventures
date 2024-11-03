import React, { useState } from 'react';
import { ArrowRight, Clock, DollarSign, Shield, Building2, TrendingUp, Calculator } from 'lucide-react';
import { PropertyForm } from './PropertyForm';
import { LoanForm } from './LoanForm';

export const Hero = () => {
  const [isPropertyFormOpen, setIsPropertyFormOpen] = useState(false);
  const [isLoanFormOpen, setIsLoanFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darkblue-900/95 via-darkblue-900/90 to-darkblue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Your Complete Real Estate Solution
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Whether you're looking to sell your property or need financing for your next investment,
            we've got you covered with comprehensive solutions.
          </p>
        </div>

        {/* Two Main Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Property Buying Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
            <div className="text-center mb-6">
              <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">We Buy Houses</h2>
              <p className="text-blue-100">
                Get a fair cash offer for your home and close on your timeline. 
                No repairs needed, no realtor fees.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-blue-100">
                <Clock className="h-5 w-5 inline-block mr-2" />
                Close in 7 Days
              </div>
              <div className="text-blue-100">
                <DollarSign className="h-5 w-5 inline-block mr-2" />
                Fair Cash Offer
              </div>
              <div className="text-blue-100">
                <Shield className="h-5 w-5 inline-block mr-2" />
                Any Condition
              </div>
              <div className="text-blue-50 bg-blue-500/40 rounded-lg px-2 py-1 border border-blue-400/50 animate-pulse">
                <DollarSign className="h-5 w-5 inline-block mr-2" />
                Free Moving! 🎁
              </div>
            </div>
            <button 
              onClick={() => setIsPropertyFormOpen(true)}
              className="btn-primary w-full group"
            >
              Get Your Cash Offer
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Lending Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
            <div className="text-center mb-6">
              <Building2 className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Private Lending</h2>
              <p className="text-blue-100">
                Fast, flexible financing for your real estate investments. 
                Competitive rates and quick approvals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-blue-100">
                <Building2 className="h-5 w-5 inline-block mr-2" />
                Fix & Flip Loans
              </div>
              <div className="text-blue-100">
                <TrendingUp className="h-5 w-5 inline-block mr-2" />
                Rental Property
              </div>
              <div className="text-blue-100">
                <Calculator className="h-5 w-5 inline-block mr-2" />
                Bridge Loans
              </div>
              <div className="text-blue-100">
                <DollarSign className="h-5 w-5 inline-block mr-2" />
                Quick Funding
              </div>
            </div>
            <button 
              onClick={() => setIsLoanFormOpen(true)}
              className="btn-primary w-full group"
            >
              Apply for Financing
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl">
            <div className="text-3xl font-bold text-white mb-1">1900+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl">
            <div className="text-3xl font-bold text-white mb-1">$250M+</div>
            <div className="text-blue-100">Funded</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl">
            <div className="text-3xl font-bold text-white mb-1">5 Years</div>
            <div className="text-blue-100">Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-blue-100">Support</div>
          </div>
        </div>
      </div>

      {/* Forms */}
      <PropertyForm isOpen={isPropertyFormOpen} onClose={() => setIsPropertyFormOpen(false)} />
      <LoanForm isOpen={isLoanFormOpen} onClose={() => setIsLoanFormOpen(false)} />
    </div>
  );
};
