import React from 'react';
import { Clock, DollarSign, Home } from 'lucide-react';

export const WhatWeOffer = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-navy-50 rounded-lg">
            <DollarSign className="h-12 w-12 text-navy-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-navy-900">Fast, Fair Offers</h3>
            <p className="text-navy-700">We provide cash offers based on the current market value of your home, ensuring you get a fair price quickly.</p>
          </div>
          <div className="p-6 bg-navy-50 rounded-lg">
            <Home className="h-12 w-12 text-navy-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-navy-900">No Repairs Needed</h3>
            <p className="text-navy-700">Don't worry about costly repairs or renovations. We buy homes in any condition, saving you time and money.</p>
          </div>
          <div className="p-6 bg-navy-50 rounded-lg">
            <Clock className="h-12 w-12 text-navy-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-navy-900">Flexible Closing Dates</h3>
            <p className="text-navy-700">Choose a closing date that works for you, whether it's in a few days or a few weeks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};