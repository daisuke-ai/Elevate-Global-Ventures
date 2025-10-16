import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Phone, DollarSign, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/40 to-blue-100/30"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>

        <div className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Empowering Businesses with
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              AI, Staffing & Financial Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hawaii-based, women-owned company helping small businesses scale operations efficiently through technology, outsourcing, and smart financial services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://evgai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Automation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-800 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Get Support Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="relative py-24 fade-in-section overflow-hidden">
        {/* Modern background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* EVGAI */}
            <div className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 hover:border-slate-900 hover:shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">EVGAI</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4">Automation Systems</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Custom-built automations, chatbots, and CRM workflows to scale your business faster.
              </p>
              <a
                href="https://evgai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-3 transition-all"
              >
                Visit EVGAI.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Staffing */}
            <div className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 hover:border-indigo-600 hover:shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Elevate Global Staffing</h3>
              <p className="text-sm font-semibold text-indigo-600 mb-4">Call Center</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Trained virtual assistants and call-center professionals to support your daily operations.
              </p>
              <Link
                to="/staffing"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tax Services */}
            <div className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 hover:border-emerald-600 hover:shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sunrise Tax</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-4">Business Services</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Bookkeeping, tax prep, and small business admin support — handled efficiently and accurately.
              </p>
              <Link
                to="/tax"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Real Estate */}
            <div className="group bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 hover:border-amber-600 hover:shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Real Estate Support</h3>
              <p className="text-sm font-semibold text-amber-600 mb-4">Property Services</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Back-office coordination, data entry, and property management support for real estate teams.
              </p>
              <Link
                to="/real-estate-support"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 fade-in-section overflow-hidden">
        {/* Beautiful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-blue-50/30 to-sky-50/20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300/15 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <img
                src="/images/logo.png"
                alt="Elevate Global Ventures"
                className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  About Our Company
                </span>
              </h2>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Based in Hawai'i, Elevate Global Ventures LLC combines technology, staffing, and financial expertise to help small businesses grow with less stress.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a women- and minority-owned company, we bring integrity, innovation, and a personal touch to every client partnership.
              </p>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                About Our Company
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 fade-in-section overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-cyan-50/30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Ready to Scale Your Business?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's build your system together — with automation, staffing, and business support that scales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://evgai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-800 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Explore EVGAI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
