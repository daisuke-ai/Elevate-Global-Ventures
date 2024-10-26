import React, { useState } from 'react';
import { Download, Bell } from 'lucide-react';

export const EbookSection = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First E-book */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="E-book Cover"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-darkblue-900">The Ultimate Guide to Free Home Sales</h3>
            <p className="text-gray-600 mb-6">Learn how to sell your home quickly and efficiently without any hassle.</p>
            <button className="btn-primary w-full flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" strokeWidth={1.5} />
              Download Now
            </button>
          </div>

          {/* Second E-book (Coming Soon) */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
              Coming Soon
            </div>
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Credit Repair Guide Cover"
              className="w-full h-64 object-cover rounded-lg mb-6 filter blur-sm"
            />
            <h3 className="text-2xl font-bold mb-4 text-darkblue-900">Credit Repair Guide</h3>
            <p className="text-gray-600 mb-6">Get expert tips on improving your credit score and financial health.</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <button className="btn-primary w-full flex items-center justify-center">
                <Bell className="h-5 w-5 mr-2" strokeWidth={1.5} />
                Sign Up for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};