import React from 'react';
import { ArrowRight, Clock, DollarSign, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-darkblue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Need to Sell Your Home Fast?
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            We buy homes in any condition for cash. Get a fair offer within 24 hours 
            and close on your timeline. No repairs needed, no realtor fees, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg group">
              Get Your Cash Offer Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg">
              Learn How It Works
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <Clock className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Close in 7 Days</h3>
              <p className="text-blue-100">Quick closing on your timeline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <DollarSign className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fair Cash Offer</h3>
              <p className="text-blue-100">No hidden fees or commissions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <Shield className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Any Condition</h3>
              <p className="text-blue-100">No repairs or cleaning needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};