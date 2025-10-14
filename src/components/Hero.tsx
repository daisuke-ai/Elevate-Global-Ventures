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
          backgroundImage: 'url("https://images.unsplash.com/photo-1550592704-585888126b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darkblue-900/95 via-darkblue-900/90 to-darkblue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Empowering Businesses with AI Automation, Virtual Staffing & Tax Solutions
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-4">
            Hawai‘i-based, women-owned company helping small businesses scale operations efficiently through technology, outsourcing, and smart financial services.
          </p>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://evgai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group text-lg"
            >
              Explore Automation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#support-services" className="btn-secondary text-lg">
              Get Support Services <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
            <Truck className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
            <p className="text-blue-100 text-sm">Automate tasks, scale faster</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <Clock className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Virtual Staffing</h3>
            <p className="text-blue-100 text-sm">Flexible, skilled remote teams</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <DollarSign className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Tax & Finance</h3>
            <p className="text-blue-100 text-sm">Smart financial solutions</p>
          </div>

          <div className="bg-darkblue-800/80 backdrop-blur-lg p-6 rounded-xl border border-blue-400/30">
            <Shield className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Real Estate Support</h3>
            <p className="text-blue-100 text-sm">Dedicated back-office for realtors</p>
          </div>
        </div>
      </div>

      {/* Property Form */}
      {/* The PropertyForm is no longer relevant for the main hero section */}
      {/* <PropertyForm isOpen={isPropertyFormOpen} onClose={() => setIsPropertyFormOpen(false)} /> */}
    </div>
  );
};