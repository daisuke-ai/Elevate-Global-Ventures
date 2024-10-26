import React from 'react';
import { Globe2, Users, Wallet, Building } from 'lucide-react';

export const Mission = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-darkblue-900 mb-6">Our Mission</h2>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            Building Pathways to Success for Underserved Families and Haitian Migrants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Globe2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Cultural Heritage Preservation</h3>
            <p className="text-blue-800">
              Celebrating and upholding Haitian culture through programs that maintain strong connections to heritage.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Community Support Initiatives</h3>
            <p className="text-blue-800">
              Organizing programs for essential needs, including housing resources and language support.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Wallet className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Economic Empowerment</h3>
            <p className="text-blue-800">
              Providing financial literacy workshops and assistance in securing sustainable employment.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <Building className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Future Partnerships</h3>
            <p className="text-blue-800">
              Building relationships with local organizations to create comprehensive support networks.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-darkblue-800 text-white p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Why We Focus on Haitian Migrants</h3>
            <p className="text-lg leading-relaxed text-blue-100">
              Haitian migrants bring a rich cultural heritage to the U.S., but they often face significant 
              challenges due to language barriers, economic hardship, and limited access to support networks. 
              We're passionate about providing tailored support that meets these needs and builds strong, 
              empowered individuals who can contribute meaningfully to their communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};