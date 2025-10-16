import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) => {
    const isActive = location.pathname === to;
    const linkClass = `px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-blue-600'
        : 'text-slate-700 hover:text-blue-600'
    }`;

    if (external) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={linkClass}>
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Elevate Global Ventures"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:via-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                  Elevate Global Ventures
                </span>
                <span className="text-xs font-medium text-slate-500 group-hover:text-sky-600 transition-colors duration-300">
                  Empowering Growth
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServicesDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-200"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-slate-200 py-2 animate-fade-in">
                  <a
                    href="https://evgai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    EVGAI - Automation
                  </a>
                  <Link
                    to="/staffing"
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    Global Staffing
                  </Link>
                  <Link
                    to="/tax"
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    Sunrise Tax
                  </Link>
                  <Link
                    to="/real-estate-support"
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    Real Estate Support
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact">Contact</NavLink>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="group ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-6 space-y-1">
              <Link
                to="/"
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 bg-slate-50 rounded-lg p-2">
                    <a
                      href="https://evgai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      EVGAI - Automation
                    </a>
                    <Link
                      to="/staffing"
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Global Staffing
                    </Link>
                    <Link
                      to="/tax"
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sunrise Tax
                    </Link>
                    <Link
                      to="/real-estate-support"
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Real Estate Support
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="group mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-base font-semibold rounded-xl hover:from-sky-700 hover:to-blue-800 transition-all duration-300 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
