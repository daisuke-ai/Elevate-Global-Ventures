import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, FileText, Users, PieChart, FileCheck, CheckCircle2, Clock, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const TaxPage = () => {
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Your Finances
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Organized and Optimized
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bookkeeping, tax prep, and small business admin support — handled efficiently, accurately, and always on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About the Service Section */}
      <section id="about" className="py-24 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <img
                src="/images/Professional accountant reviewing documents on a laptop.jpg"
                alt="Professional accountant reviewing documents"
                className="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Numbers Don't Have to Be Stressful
                </span>
              </h2>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We take the weight of financial management off your shoulders. Our expert team of bookkeepers and tax specialists ensures that your business stays compliant, organized, and ready for growth.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                From managing daily transactions to preparing tax filings and financial reports, Sunrise Tax & Business Services is your one-stop back-office partner for accuracy and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Support Section */}
      <section id="services" className="py-24 bg-slate-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                End-to-End Support for Small Businesses
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial services to keep your business running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Bookkeeping */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Bookkeeping</h3>
              <p className="text-slate-600 leading-relaxed">
                Accurate tracking of income, expenses, and cash flow to keep your finances organized.
              </p>
            </div>

            {/* Tax Preparation */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Tax Preparation</h3>
              <p className="text-slate-600 leading-relaxed">
                Expert tax filing and compliance for small businesses and individuals.
              </p>
            </div>

            {/* Payroll Management */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Payroll Management</h3>
              <p className="text-slate-600 leading-relaxed">
                On-time payroll with tax withholdings handled properly and efficiently.
              </p>
            </div>

            {/* Financial Reporting */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Financial Reporting</h3>
              <p className="text-slate-600 leading-relaxed">
                Monthly reports that help you see where your business stands financially.
              </p>
            </div>

            {/* Admin Support */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Admin Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Invoicing, vendor management, and document organization handled seamlessly.
              </p>
            </div>

            {/* Compliance & Audit */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Compliance & Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay compliant with regulations and prepared for audits with expert guidance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Why Choose Sunrise Tax
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Tax Professionals</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our certified team stays current with tax laws to maximize your deductions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Always On Time</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Never miss a deadline with our proactive scheduling and reminders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Protection</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We stand behind our work and provide full support if questions arise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Growth-Focused Insights</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Get actionable insights to help your business grow and thrive financially.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <img
                src="/images/Modern workspace with financial documents.jpg"
                alt="Modern workspace with financial documents"
                className="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Ready to Simplify Your Finances?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let our tax and bookkeeping experts handle the numbers while you focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxPage;
