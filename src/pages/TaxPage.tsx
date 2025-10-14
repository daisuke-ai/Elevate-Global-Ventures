import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, FileText, Shield, DollarSign, CheckCircle, Briefcase } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const TaxPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Premium Split Layout */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
            {/* Left: Main content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
              <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Sunrise Tax & Business Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                Smart, Simple Tax & Business Admin Support
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Our bookkeeping and tax prep team helps small business owners stay compliant and focused on growth.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                    <Calculator className="h-5 w-5" />
                  </span>
                  Expert bookkeeping and tax preparation
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5" />
                  </span>
                  Full compliance and audit protection
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                    <DollarSign className="h-5 w-5" />
                  </span>
                  Maximize deductions and savings
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Get a Free Tax Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Right: Tax/finance image */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional tax and bookkeeping services"
                className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
                style={{marginTop: '0', marginBottom: '0'}}
              />
            </div>
          </div>
        </section>

        {/* Services & Process - Combined Section */}
        <section className="py-28 relative bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.06),transparent_60%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-16">Our Tax Services</h2>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Service Card 1: Tax Preparation */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Preparation</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Individual and business tax returns with maximum deductions.</p>
                <div className="w-full bg-blue-50 rounded-full p-2">
                  <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</div>
                </div>
              </div>

              {/* Service Card 2: Bookkeeping */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bookkeeping</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Monthly financial tracking and reporting for your business.</p>
                <div className="w-full bg-green-50 rounded-full p-2">
                  <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">Ongoing Support</div>
                </div>
              </div>

              {/* Service Card 3: Business Setup */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Setup</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">LLC formation, EIN registration, and business structure guidance.</p>
                <div className="w-full bg-yellow-50 rounded-full p-2">
                  <div className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full">New Business</div>
                </div>
              </div>

              {/* Service Card 4: Audit Support */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Support</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Professional representation and documentation for IRS audits.</p>
                <div className="w-full bg-purple-50 rounded-full p-2">
                  <div className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">Protection</div>
                </div>
              </div>
            </div>

            {/* How It Works Timeline */}
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-16">How It Works</h3>
              <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12 relative z-10">
                {/* Stepper bridge connectors (desktop only) */}
                <div className="hidden md:block absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 opacity-60 z-0" style={{ transform: 'translateY(-50%)' }} />
                {/* Steps */}
                {[
                  { icon: FileText, title: "Initial Consultation", desc: "We review your financial situation and tax needs." },
                  { icon: Calculator, title: "Document Collection", desc: "We gather all necessary tax documents and records." },
                  { icon: CheckCircle, title: "Preparation & Review", desc: "We prepare your returns and review for accuracy." },
                  { icon: Shield, title: "Filing & Support", desc: "We file your returns and provide ongoing support." },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 min-w-[200px] z-10 flex flex-col items-center relative mb-16 md:mb-0">
                    <div className={
                      `w-16 h-16 flex items-center justify-center mb-6 rounded-full shadow-xl border-4 ` +
                      [
                        'bg-gradient-to-br from-blue-500 to-blue-700 border-blue-300',
                        'bg-gradient-to-br from-green-400 to-green-600 border-green-200',
                        'bg-gradient-to-br from-yellow-400 to-orange-400 border-yellow-200',
                        'bg-gradient-to-br from-purple-400 to-blue-600 border-purple-200',
                      ][idx]
                    }>
                      <span className="text-2xl font-bold text-white font-mono mr-1">{idx+1}</span>
                      <item.icon className="h-7 w-7 text-white ml-1" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-base max-w-xs md:max-w-sm mx-auto leading-relaxed">{item.desc}</p>
                    </div>
                    {/* Connector (mobile only, except last) */}
                    {idx < 3 && (
                      <div className="md:hidden w-1.5 h-14 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 opacity-60 mx-auto my-2 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action - Premium CTA */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-4 inline-block">Ready to Get Started?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Get Your Free Tax Consultation Today
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Let our tax experts help you maximize your refund and ensure full compliance. No obligation, just expert advice.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Get Free Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaxPage;
