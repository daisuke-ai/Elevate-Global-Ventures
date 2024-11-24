import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            <p className="text-gray-600">+1 (808) 123-4567</p>
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
            <p className="text-gray-600">Ste. A325 A325 - 5603</p>
            <p className="text-gray-600">Honolulu, HI 96817</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-darkblue-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking to sell your property, need financing, or just want to learn more about our services,
              we're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-600">
                <Clock className="h-6 w-6 text-blue-600" />
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <span>Professional Support</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <Globe className="h-6 w-6 text-blue-600" />
                <span>Serving All of Hawaii</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="(808) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sell">Selling Property</option>
                  <option value="loan">Loan Information</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full group flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
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