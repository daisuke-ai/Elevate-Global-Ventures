import React from 'react';
import { Globe2, Users, Wallet, Building, Star, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Mission = () => {
  const testimonials = [
    {
      content: "Thanks to Elevate Global Ventures, my family found stability and support when we needed it most after arriving from Haiti.",
      author: "Jean Baptiste",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      content: "The cultural programs helped my children stay connected to their roots while adapting to our new life.",
      author: "Marie Dubois",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      content: "Their economic empowerment program gave me the skills to start my own business and support my community.",
      author: "Pierre Louis",
      image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen bg-gradient-to-br from-darkblue-800 via-darkblue-700 to-darkblue-900 text-white">
        <div className="absolute inset-0">
          <div className="hidden lg:grid grid-cols-3 h-full opacity-20">
            <div className="bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}></div>
          </div>
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Empowering Communities,<br className="hidden sm:block" />Preserving Heritage
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              At Elevate Global Ventures, we're dedicated to empowering underserved families and Haitian migrants, 
              offering support that fosters resilience, connection, and opportunity. We believe that every individual, 
              regardless of background, should have the resources to thrive and contribute to a vibrant, inclusive future.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Hero Bottom Cards */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkblue-900 to-transparent py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl">
                <Globe2 className="h-8 sm:h-12 w-8 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-center">Cultural Preservation</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl">
                <Users className="h-8 sm:h-12 w-8 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-center">Community Building</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl">
                <Wallet className="h-8 sm:h-12 w-8 sm:w-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-center">Economic Empowerment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content remains unchanged */}
      <div className="py-20 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Cultural Heritage</h3>
              <p className="text-gray-600">Preserving and celebrating Haitian culture through community programs.</p>
              <img 
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cultural Heritage"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Building strong support networks for migrant families.</p>
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Community Support"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Wallet className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Economic Growth</h3>
              <p className="text-gray-600">Providing resources for financial independence and stability.</p>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Economic Growth"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-darkblue-900 mb-3">Housing Support</h3>
              <p className="text-gray-600">Assisting families in finding stable, affordable housing solutions.</p>
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Housing Support"
                className="mt-4 rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-darkblue-900 mb-12">Community Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <span className="font-semibold text-darkblue-900">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mission;