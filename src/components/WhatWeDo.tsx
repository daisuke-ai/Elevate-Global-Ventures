import React from 'react';
import { Globe, Users, TrendingUp, Handshake } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-darkblue-900 mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Cultural Heritage Preservation</h3>
            <p className="text-gray-600">We celebrate and uphold Haitian culture, offering services and programs that help individuals maintain a strong connection to their heritage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Community Support Initiatives</h3>
            <p className="text-gray-600">Our team organizes programs designed to address essential needs, including housing resources, language support, and family assistance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Economic Empowerment</h3>
            <p className="text-gray-600">From workshops on financial literacy to assistance in securing sustainable jobs, we work closely with individuals to build pathways toward economic stability and success.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <Handshake className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Future Plans and Partnerships</h3>
            <p className="text-gray-600">As we expand, we're committed to forging partnerships with local organizations, businesses, and cultural groups to broaden our impact and ensure comprehensive support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
