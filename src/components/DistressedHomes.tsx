import React, { useState } from 'react';
import { Home, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react'; // Added ArrowRight
import { PropertyForm } from './PropertyForm';

export const DistressedHomes = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-darkblue-900 to-darkblue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How to Sell Your Home Fast and Avoid Foreclosure</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get a fair cash offer for your home and close on your timeline. No repairs needed, no realtor fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <Home className="h-12 w-12 text-blue-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white mb-3">Any Condition</h3>
            <p className="text-blue-100">We buy homes in any condition. No repairs or renovations needed.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <Clock className="h-12 w-12 text-blue-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white mb-3">Quick Closing</h3>
            <p className="text-blue-100">Close in as little as 7 days or on your timeline.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <DollarSign className="h-12 w-12 text-blue-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white mb-3">Fair Cash Offer</h3>
            <p className="text-blue-100">Get a competitive cash offer with no hidden fees.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <Shield className="h-12 w-12 text-blue-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white mb-3">No Obligations</h3>
            <p className="text-blue-100">Receive your offer with no pressure to accept.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="btn-secondary-white group text-lg"
          >
            Get Your Cash Offer Now <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <PropertyForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
};