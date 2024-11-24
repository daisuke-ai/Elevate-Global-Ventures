import React, { useState } from 'react';
import { ArrowRight, Clock, DollarSign, Shield, Truck } from 'lucide-react';
import { PropertyForm } from './PropertyForm';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [isPropertyFormOpen, setIsPropertyFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darkblue-900/95 via-darkblue-900/90 to-darkblue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Need to Sell Your Home Fast?
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-4">
            We buy homes in any condition for cash. Get a fair offer within 24 hours and close on your timeline.
          </p>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            No repairs needed, no realtor fees, no hassle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPropertyFormOpen(true)}
              className="btn-primary group text-lg"
            >
              Get Your Cash Offer Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/services" className="btn-secondary text-lg">
              Learn How It Works
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Special Offer
            </div>
            <Truck className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Moving Fees Covered</h3>
            <p className="text-blue-100 text-sm">We pay all moving expenses</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <Clock className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Close in 7 Days</h3>
            <p className="text-blue-100 text-sm">Quick closing on your timeline</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <DollarSign className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Fair Cash Offer</h3>
            <p className="text-blue-100 text-sm">No hidden fees or commissions</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <Shield className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Any Condition</h3>
            <p className="text-blue-100 text-sm">No repairs or cleaning needed</p>
          </div>
        </div>
      </div>

      {/* Property Form */}
      <PropertyForm isOpen={isPropertyFormOpen} onClose={() => setIsPropertyFormOpen(false)} />
    </div>
  );
};