import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="group inline-block">
              <img
                src="/images/logo.png"
                alt="Elevate Global Ventures"
                className="h-12 w-auto mb-3 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                Elevate Global Ventures
              </h3>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hawaii-based, women-owned company helping small businesses scale through technology, staffing, and financial solutions.
            </p>
          </div>

          {/* Quick Links */}
          {/* Removed Quick Links section */}

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4 text-slate-900">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://evgai.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  EVGAI - Automation
                </a>
              </li>
              <li>
                <Link to="/staffing" className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Global Staffing
                </Link>
              </li>
              <li>
                <Link to="/tax" className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Sunrise Tax
                </Link>
              </li>
              <li>
                <Link to="/real-estate-support" className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Real Estate Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4 text-slate-900">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+18086465523" className="group flex items-start gap-3 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">+1 808-646-5523</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@elevateglobalventures.com" className="group flex items-start gap-3 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">Contact Us</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">200 N Vineyard Blvd<br />Honolulu, HI 96817</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0"></div>
                  <span className="text-sm text-blue-600 font-medium">Rendezvous by appointment only — no walk-ins.</span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a href="#" className="group w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm text-center md:text-left">
              © 2025 Elevate Global Ventures LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-xs">
              To opt out of SMS messages, reply STOP at any time. For help, reply HELP or email{' '}
              <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a>.
              Msg & data rates may apply. Consent is not a condition of purchase.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
