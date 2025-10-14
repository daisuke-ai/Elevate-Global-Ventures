import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // No longer need scroll effect if navbar is always white
    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > 10);
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) => {
    const linkClass = `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50`;
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
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/logo.png" 
                alt="Elevate Global Ventures Logo" 
                className="h-12 w-auto filter-none group-hover:scale-105 transition-transform duration-200" 
              />
              <span className="ml-3 text-lg font-bold text-darkblue-900 group-hover:text-blue-600 transition-colors duration-200">
                Elevate Global Ventures
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-xl shadow-xl bg-white border border-gray-100 focus:outline-none">
                  <div className="py-2">
                    <NavLink to="https://evgai.com" external={true} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Automation
                    </NavLink>
                    <NavLink to="/staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Staffing
                    </NavLink>
                    <NavLink to="/tax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Tax Services
                    </NavLink>
                    <NavLink to="/real-estate-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Real Estate Support
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm group">
              Book a Free Consultation <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
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
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>

              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center w-full px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesDropdownOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg">
                  <Link to="https://evgai.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Automation
                  </Link>
                  <Link to="/staffing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Staffing
                  </Link>
                  <Link to="/tax" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Tax Services
                  </Link>
                  <Link to="/real-estate-support" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Real Estate Support
                  </Link>
                </div>
              )}
              <NavLink to="/contact">Contact</NavLink>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm group w-full mt-4">
                Book a Free Consultation <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};