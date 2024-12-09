import React, { useState, useEffect } from 'react';
import { Book, Home, Phone, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isScrolled || !isHomePage ? 'text-darkblue-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/">
              <Home className={`h-8 w-8 ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${
                isScrolled || !isHomePage ? 'text-darkblue-900' : 'text-white'
              }`}>
                Elevate Global Ventures
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/mission">
              <Globe className="h-5 w-5 mr-1" />
              Our Mission
            </NavLink>
            <NavLink to="/about">
              <Book className="h-5 w-5 mr-1" />
              About Us
            </NavLink>
            <NavLink to="/services">
              <Home className="h-5 w-5 mr-1" />
              Services
            </NavLink>
            <NavLink to="/contact">
              <Phone className="h-5 w-5 mr-1" />
              Contact Us
            </NavLink>
            <NavLink to="/blog">
              <Globe className="h-5 w-5 mr-1" />
              Blog
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'} hover:text-blue-700 focus:outline-none`}
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
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/mission" className="block text-darkblue-800 px-3 py-2 rounded-md text-base font-medium">
                <Globe className="h-5 w-5 mr-1 inline" />
                Our Mission
              </Link>
              <Link to="/about" className="block text-darkblue-800 px-3 py-2 rounded-md text-base font-medium">
                <Book className="h-5 w-5 mr-1 inline" />
                About Us
              </Link>
              <Link to="/services" className="block text-darkblue-800 px-3 py-2 rounded-md text-base font-medium">
                <Home className="h-5 w-5 mr-1 inline" />
                Services
              </Link>
              <Link to="/contact" className="block text-darkblue-800 px-3 py-2 rounded-md text-base font-medium">
                <Phone className="h-5 w-5 mr-1 inline" />
                Contact Us
              </Link>
              <Link to="/blog" className="block text-darkblue-800 px-3 py-2 rounded-md text-base font-medium">
                <Globe className="h-5 w-5 mr-1 inline" />
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};