import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, FileText, Users, Calendar, DollarSign, Briefcase, MessageSquare, BarChart3, Shield, Star } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const RealEstateSupportPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Premium Split Layout */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
            {/* Left: Main content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
              <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Real Estate Support Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                Back-Office Excellence for Real Estate Teams
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Back-office coordination, data entry, and property management support for real estate teams.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                    <FileText className="h-5 w-5" />
                  </span>
                  Expert administrative and transaction support
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                    <Users className="h-5 w-5" />
                  </span>
                  Dedicated virtual assistants for real estate
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  Streamlined operations and increased productivity
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Book a Free Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Right: Real estate team image */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional real estate team and support services"
                className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
                style={{marginTop: '0', marginBottom: '0'}}
              />
            </div>
          </div>
        </section>

        {/* What We Offer - Premium Services Grid */}
        <section className="py-28 relative bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.06),transparent_60%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-16">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Administrative Support */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative Support</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Transaction Coordination
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Document Preparation & Management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Scheduling & Calendar Management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        CRM Management & Data Entry
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Marketing & Client Outreach */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing & Client Outreach</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Social Media Management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Email Marketing Campaigns
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Lead Follow-up & Nurturing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Content Creation Assistance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Property Management Assistance */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Property Management Assistance</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Tenant Screening Support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Lease Agreement Preparation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Maintenance Coordination
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Rent Collection & Accounting Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial & Bookkeeping Support */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Financial & Bookkeeping Support</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Bookkeeping for Property Portfolios
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Expense Tracking & Reconciliation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Financial Report Generation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Invoice Processing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us - Premium Split Layout */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
            {/* Left: Main content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
              <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Why Partner With Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                Expert Real Estate Virtual Assistants
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Our specialized virtual assistants understand the real estate industry and provide seamless support to help you focus on what matters most.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5" />
                  </span>
                  Streamlined Operations
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                    <Star className="h-5 w-5" />
                  </span>
                  Cost-Effective Solutions
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  Increased Productivity
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-purple-400 to-pink-400 text-white rounded-full p-2 mr-4">
                    <Users className="h-5 w-5" />
                  </span>
                  Focus on Core Business
                </li>
              </ul>
            </div>
            {/* Right: Team collaboration image */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team collaboration and virtual assistance"
                className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
                style={{marginTop: '0', marginBottom: '0'}}
              />
            </div>
          </div>
        </section>

        {/* Call to Action - Premium CTA */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-4 inline-block">Ready to Streamline?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Ready to streamline your real estate business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Let our expert virtual assistants handle your back-office operations so you can focus on closing deals and growing your business.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Book a Free Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealEstateSupportPage;
