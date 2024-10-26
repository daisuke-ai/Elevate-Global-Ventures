import React from 'react';
import { Users, Clock, Share2 } from 'lucide-react';

export const Stats = () => {
  return (
    <div className="bg-white py-20 -mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card p-8 text-center">
            <Users className="h-12 w-12 text-navy-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">1900+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="card p-8 text-center">
            <Clock className="h-12 w-12 text-navy-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">5 Years</h3>
            <p className="text-gray-600">of Experience</p>
          </div>
          <div className="card p-8 text-center">
            <Share2 className="h-12 w-12 text-navy-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">150K+</h3>
            <p className="text-gray-600">Social Media Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};