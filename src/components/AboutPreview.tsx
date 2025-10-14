import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-darkblue-900 to-darkblue-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-6">
          Based in Hawai‘i, Elevate Global Ventures LLC combines technology, staffing, and financial expertise to help small businesses grow with less stress.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-8">
          As a women- and minority-owned company, we bring integrity, innovation, and a personal touch to every client partnership.
        </p>
        <Link to="/about" className="btn-secondary-white group text-lg">
          About Our Company <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
