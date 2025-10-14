import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Globe2, Users, Building2, Sprout } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-darkblue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Diverse team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are a global team of consultants, united by a shared purpose: to empower individuals, 
              uplift communities, and create lasting impact.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Globe2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Serving communities across borders with cultural understanding</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
            <p className="text-gray-600">Building stronger, more resilient communities together</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Building2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real Estate Expertise</h3>
            <p className="text-gray-600">Strategic property solutions for sustainable growth</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Sprout className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sustainable Impact</h3>
            <p className="text-gray-600">Creating lasting positive change in every community</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-darkblue-900 mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Elevate Global Ventures, we specialize in financial stability, real estate strategy, 
              and business growth consulting, with a unique commitment to serving immigrant and 
              underserved populations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our approach goes beyond providing solutions; we're dedicated to fostering resilience, 
              dignity, and sustainable success. With expertise spanning credit health, real estate 
              advisory, and financial literacy, our team guides clients toward building strong 
              financial foundations and achieving their dreams.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team meeting" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-darkblue-900 mb-12">Meet Our Team</h2>
          
          {/* Team Member Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <div className="md:flex-shrink-0 hidden">
            </div>
            <div className="p-0">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Real Estate Consultant</div>
              <h3 className="mt-2 text-2xl font-semibold text-darkblue-900">Dayana Lynch</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A visionary real estate consultant and community advocate with experience flipping and 
                renovating over 22 properties and managing a portfolio of 55 rentals. Through Zaka 
                Properties in the Dominican Republic, Dayana brings international expertise in buying, 
                selling, and managing properties.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Her innovative approach includes integrating home farming into new developments, 
                promoting self-sufficiency and sustainable living. As a dedicated volunteer and 
                nonprofit collaborator, she's committed to empowering communities and fostering resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;