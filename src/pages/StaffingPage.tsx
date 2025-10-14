import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Clock, Shield, Star, MessageSquare, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const StaffingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Premium Split Layout */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
            {/* Left: Main content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
              <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Elevate Global Staffing</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                Build Your Dream Remote Team
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Trained virtual assistants and call-center professionals to support your daily operations. No hiring stress, just results.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                    <Users className="h-5 w-5" />
                  </span>
                  Pre-screened, trained professionals ready to work
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5" />
                  </span>
                  Hawai'i-based management ensures quality
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                    <DollarSign className="h-5 w-5" />
                  </span>
                  Flexible plans that scale with your business
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Get Started Today <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Right: Team collaboration image */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Remote team collaboration and virtual assistants"
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
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-16">Our Services & Process</h2>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Service Card 1: Virtual Assistants */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Assistants</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Administrative support, scheduling, and daily task management.</p>
                <div className="w-full bg-blue-50 rounded-full p-2">
                  <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</div>
                </div>
              </div>

              {/* Service Card 2: Customer Service */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Professional support reps for your customer inquiries.</p>
                <div className="w-full bg-green-50 rounded-full p-2">
                  <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">24/7 Available</div>
                </div>
              </div>

              {/* Service Card 3: Appointment Setters */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment Setters</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Lead qualification and appointment booking specialists.</p>
                <div className="w-full bg-yellow-50 rounded-full p-2">
                  <div className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full">High Converting</div>
                </div>
              </div>

              {/* Service Card 4: Specialized Support */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Support</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Bookkeeping, social media, and project coordination.</p>
                <div className="w-full bg-purple-50 rounded-full p-2">
                  <div className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">Custom Roles</div>
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
                  { icon: MessageSquare, title: "Consultation", desc: "Tell us what roles you need filled." },
                  { icon: Users, title: "Matching", desc: "We screen and assign qualified professionals." },
                  { icon: Calendar, title: "Onboarding", desc: "We handle setup, training, and tools." },
                  { icon: Star, title: "Scale", desc: "Add or adjust team members as you grow." },
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

        {/* Why Choose Us - Premium Split Layout */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
            {/* Left: Main content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
              <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                Hawai'i-Based Management, Global Talent
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                We combine the reliability of U.S.-based management with the efficiency of global talent, ensuring quality and cost-effectiveness.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5" />
                  </span>
                  Hawai'i-based management team
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                    <Star className="h-5 w-5" />
                  </span>
                  Dedicated training for each role
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-700">
                  <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                    <DollarSign className="h-5 w-5" />
                  </span>
                  Flexible plans that scale with you
                </li>
              </ul>
            </div>
            {/* Right: Team management image */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team management and collaboration"
                className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
                style={{marginTop: '0', marginBottom: '0'}}
              />
            </div>
          </div>
        </section>

        {/* Call to Action - Premium White Design */}
        <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-4 inline-block">Ready to Scale?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Ready to hire your first VA or remote agent?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Get started with a free consultation. We'll match you with the perfect team members for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
                Book a Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-white text-blue-700 border border-blue-200 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg group">
                Get Pricing Guide <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StaffingPage;
