import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Headphones, Target, Wrench, CheckCircle2, UserCheck, ClipboardCheck, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Staffing = () => {
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
              Your Operations, Powered by
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              People Who Care
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trained virtual assistants and call-center professionals that keep your business running — efficiently, reliably, and around the clock.
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
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
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
                src="/images/Call center team or virtual assistants working together.webp"
                alt="Call center team professionals"
                className="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Why Choose Elevate Global Staffing
                </span>
              </h2>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We provide businesses with dedicated virtual assistants and call-center teams trained to handle your day-to-day tasks — from customer support and scheduling to lead management and follow-ups.
              </p>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our professionals are skilled, English-fluent, and trained to adapt quickly to your business systems.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                We handle recruitment, training, supervision, and performance monitoring, so you get a high-performing remote team without the overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-24 bg-slate-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                A Team That Works Like an Extension of Yours
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive staffing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Virtual Assistants */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Virtual Assistants</h3>
              <p className="text-slate-600 leading-relaxed">
                Handle admin, scheduling, inbox management, and data entry with precision and efficiency.
              </p>
            </div>

            {/* Customer Support */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Customer Support Agents</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage calls, chats, and emails with empathy and professionalism to keep your customers happy.
              </p>
            </div>

            {/* Lead Management */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lead Management Specialists</h3>
              <p className="text-slate-600 leading-relaxed">
                Nurture and qualify leads using your CRM to maximize conversion rates.
              </p>
            </div>

            {/* Appointment Setters */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ClipboardCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Appointment Setters</h3>
              <p className="text-slate-600 leading-relaxed">
                Keep your sales pipeline full and organized with strategic appointment scheduling.
              </p>
            </div>

            {/* Tech Support */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Tech Support Staff</h3>
              <p className="text-slate-600 leading-relaxed">
                Assist customers and troubleshoot software or systems with technical expertise.
              </p>
            </div>

            {/* Flexible Solutions */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Need something specific? We can train staff for your unique business requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A seamless process from onboarding to ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Learn Your Operations</h3>
              <p className="text-slate-600 leading-relaxed">
                Understand your workflow, tools, and expectations to build the perfect team.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Recruit & Train</h3>
              <p className="text-slate-600 leading-relaxed">
                Source and train your staff to match your business tone and systems perfectly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Manage Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                Ongoing monitoring, reporting, and optimization for consistent results.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">You Focus on Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                We handle the daily tasks so you can focus on scaling your business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  The Elevate Global Advantage
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">English-Fluent Professionals</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Clear communication for customer satisfaction and seamless collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Managed Teams</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We handle HR, training, and supervision—you just focus on results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Solutions</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Start small and scale up as your business grows—no long-term commitments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <ClipboardCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Assurance</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Regular performance reviews and optimization to maintain excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <img
                src="/images/Modern call center workspace setup.jpg"
                alt="Modern call center workspace"
                className="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Ready to Build Your Dream Team?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how our staffing solutions can help you scale efficiently and focus on what matters most—growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
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

export default Staffing;
