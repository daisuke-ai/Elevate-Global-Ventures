import React, { useState } from 'react';
import { Download, Bell } from 'lucide-react';

export const EbookSection = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          {/* First E-book */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="E-book Cover"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-darkblue-900">The Ultimate Guide to Free Home Sales</h3>
            <p className="text-gray-600 mb-6">Learn how to sell your home quickly and efficiently without any hassle.</p>
            <a 
              href="https://drive.google.com/file/d/1CpaBmws1OtmhrVB28-_DxnqNZCPHmtLQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" strokeWidth={1.5} />
              Download Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};