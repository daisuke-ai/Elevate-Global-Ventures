import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-darkblue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our services? We're here to help you with all your real estate needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Phone className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 808-427-1739</p>
            <p className="text-gray-500 text-sm mt-2">Monday - Friday: 9AM - 6PM HST</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Mail className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-2">Email Us</h3>
            <p className="text-gray-600">info@elevateglobalventures.com</p>
            <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-darkblue-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">200 N Vineyard Blvd</p>
            <p className="text-gray-600">Honolulu, HI 96817</p>
            <p className="text-gray-500 text-sm mt-2">Ste. A325 A325 - 5603</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Rearranged Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Text Content Above Form */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to sell your property, need financing, or just want to learn more about our services,
            we're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          {/* Features List - Centered */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Quick Response Time</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>Professional Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <span>Serving All of Hawaii</span>
            </div>
          </div>
        </div>

        {/* Embedded Form Container - Full Width in this section */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/6XeSDCBDkQDwf2Gv2p9J"
            style={{width:'100%', height:'744px', border:'none', borderRadius:'3px'}}
            id="inline-6XeSDCBDkQDwf2Gv2p9J" 
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 3"
            data-layout-iframe-id="inline-6XeSDCBDkQDwf2Gv2p9J"
            data-form-id="6XeSDCBDkQDwf2Gv2p9J"
            title="Form 3"
                >
          </iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0574667853927!2d-157.8624388!3d21.3169444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e7575f9a1a1%3A0x9c5f394e8f40f50f!2s200%20N%20Vineyard%20Blvd%2C%20Honolulu%2C%20HI%2096817!5e0!3m2!1sen!2sus!4v1635787245123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="filter grayscale"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;