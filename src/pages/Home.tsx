import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Home as HomeIcon, DollarSign, MessageSquare, CheckCircle, Star } from 'lucide-react';

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section (with intro/about content merged) */}
      <section className="relative pt-28 pb-24 bg-gradient-to-b from-white via-blue-50/60 to-white overflow-hidden">
        {/* Soft background image and overlays */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550592704-585888126b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business people collaboration background"
            className="w-full h-full object-cover object-center opacity-35 blur-sm select-none pointer-events-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/55 to-white/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center" style={{ minHeight: '540px' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Empowering Businesses with AI Automation, Virtual Staffing & Tax Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-900/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Hawai‘i-based, women-owned company helping small businesses scale operations efficiently through technology, outsourcing, and smart financial services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://evgai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg font-semibold group"
            >
              Explore Automation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#support-services"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 border border-blue-100 rounded-full shadow hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all duration-200 text-lg font-semibold group"
            >
              Get Support Services <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
          {/* Left: Main content */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
            <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Elevate Global Ventures</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              About Our Company
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
              Based in Hawai'i, Elevate Global Ventures LLC combines technology, staffing, and financial expertise to help small businesses grow with less stress.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              As a women- and minority-owned company, we bring integrity, innovation, and a personal touch to every client partnership.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-base md:text-lg text-gray-700">
                <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 mr-4">
                  <MessageSquare className="h-5 w-5" />
                </span>
                Technology-driven solutions for modern businesses
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-700">
                <span className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-2 mr-4">
                  <CheckCircle className="h-5 w-5" />
                </span>
                Women- and minority-owned company
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-700">
                <span className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full p-2 mr-4">
                  <Star className="h-5 w-5" />
                </span>
                Personal touch in every partnership
              </li>
            </ul>
            <a href="/about"
               className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
              About Our Company <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Right: Logo image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <img
              src="/images/logo.png"
              alt="Elevate Global Ventures Logo"
              className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
              style={{marginTop: '0', marginBottom: '0'}}
            />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section id="support-services" className="py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.06),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1: EVGAI — Automation Systems */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🧠 EVGAI — Automation Systems</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Custom-built automations, chatbots, and CRM workflows to scale your business faster.</p>
              <a href="https://evgai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium group">
                Visit EVGAI.com <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Service Card 2: Elevate Global Staffing & Call Center */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Elevate Global Staffing & Call Center</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Trained virtual assistants and call-center professionals to support your daily operations.</p>
              <a href="/staffing" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium group">
                Learn More <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Service Card 3: Sunrise Tax & Business Services */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Sunrise Tax & Business Services</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Bookkeeping, tax prep, and small business admin support — handled efficiently and accurately.</p>
              <a href="/tax" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium group">
                Learn More <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Service Card 4: Real Estate Support */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HomeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏘 Real Estate Support</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">Back-office coordination, data entry, and property management support for real estate teams.</p>
              <a href="/real-estate-support" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium group">
                Learn More <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED CTA SECTION */}
      <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 gap-12">
          {/* Left: Main content */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-12 md:mb-0">
            <span className="uppercase tracking-widest text-xs md:text-sm font-bold text-blue-600 mb-3 inline-block">Ready to Scale Your Business?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Want to grow your business with less effort?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Let's build your system together — with automation, staffing, and business support that scales.
            </p>
            <a href="/contact" className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group">
              Book a Free Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Right: Business collaboration image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business team collaboration and growth"
              className="rounded-[2.5rem] shadow-2xl w-full max-w-md md:max-w-lg border-8 border-white/70 object-cover object-center"
              style={{marginTop: '0', marginBottom: '0'}}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;