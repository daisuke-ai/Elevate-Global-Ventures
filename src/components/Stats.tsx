import React from 'react';
import { Users, Clock, Share2 } from 'lucide-react';

export const Stats = () => {
  return (
    <div className="bg-gradient-to-br from-darkblue-900 to-darkblue-800 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1900+</h3>
            <p className="text-blue-100">Happy Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center">
            <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">5 Years</h3>
            <p className="text-blue-100">of Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center">
            <Share2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">150K+</h3>
            <p className="text-blue-100">Social Media Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};