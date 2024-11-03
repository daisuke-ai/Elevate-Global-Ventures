import React, { useState } from 'react';
import { Building2, TrendingUp, Calculator, Clock, ArrowRight } from 'lucide-react';
import { LoanForm } from './LoanForm';

export const PrivateLending = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-darkblue-900 via-darkblue-800 to-darkblue-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Private Lending Solutions</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fast, flexible financing for your real estate investments. Get competitive rates and quick approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <Building2 className="h-12 w-12 text-blue-400 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-4">Fix & Flip Loans</h3>
            <ul className="space-y-3 text-blue-100 mb-6">
              <li>• Up to 90% of purchase price</li>
              <li>• 100% of renovation costs</li>
              <li>• 6-24 month terms</li>
              <li>• Interest rates from 8.99%</li>
            </ul>
            <p className="text-sm text-blue-200">Perfect for property renovation and resale projects</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-blue-400 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-4">Rental Property Loans</h3>
            <ul className="space-y-3 text-blue-100 mb-6">
              <li>• Up to 80% LTV</li>
              <li>• 30-year terms available</li>
              <li>• No personal income verification</li>
              <li>• Rates from 6.99%</li>
            </ul>
            <p className="text-sm text-blue-200">Ideal for long-term rental property investments</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <Calculator className="h-12 w-12 text-blue-400 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-4">Bridge Loans</h3>
            <ul className="space-y-3 text-blue-100 mb-6">
              <li>• Up to 85% LTV</li>
              <li>• 6-12 month terms</li>
              <li>• Interest-only payments</li>
              <li>• Close in as fast as 7 days</li>
            </ul>
            <p className="text-sm text-blue-200">Quick funding for time-sensitive opportunities</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Our lending experts are ready to help you find the perfect financing solution for your investment strategy.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-blue-100">Quick Approvals</span>
                </div>
                <div className="flex items-center">
                  <Calculator className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-blue-100">Competitive Rates</span>
                </div>
              </div>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="btn-primary w-full md:w-auto flex items-center justify-center group"
              >
                Apply for Financing
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Real Estate Investment"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue-900 to-transparent opacity-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <LoanForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};