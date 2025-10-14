import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-300 mb-2">
          © 2025 Elevate Global Ventures LLC — Honolulu, Hawai‘i
        </p>
        <p className="text-gray-300 mb-4">
          Automation · Staffing · Tax Services
        </p>
        <p className="text-gray-300">
          (808) 757-4053 dayana@elevateglobalventures.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;