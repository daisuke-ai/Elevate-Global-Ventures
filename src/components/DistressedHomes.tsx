import React, { useState } from 'react';
import { Home, Clock, DollarSign, Shield } from 'lucide-react';
import { PropertyForm } from './PropertyForm';

export const DistressedHomes = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-darkblue-900 mb-6">How to Sell Your Home Fast and Avoid Foreclosure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a fair cash offer for your home and close on your timeline. No repairs needed, no realtor fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Home className="h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Any Condition</h3>
            <p className="text-gray-600">We buy homes in any condition. No repairs or renovations needed.</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Clock className="h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Quick Closing</h3>
            <p className="text-gray-600">Close in as little as 7 days or on your timeline.</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <DollarSign className="h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Fair Cash Offer</h3>
            <p className="text-gray-600">Get a competitive cash offer with no hidden fees.</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Shield className="h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">No Obligations</h3>
            <p className="text-gray-600">Receive your offer with no pressure to accept.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="btn-primary text-lg"
          >
            Get Your Cash Offer Now
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