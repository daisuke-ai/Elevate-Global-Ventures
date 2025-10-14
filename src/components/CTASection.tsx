import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-darkblue-800 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Want to grow your business with less effort?
        </h2>
        <p className="text-xl text-blue-100 leading-relaxed mb-8">
          Let’s build your system together — with automation, staffing, and business support that scales.
        </p>
        <Link to="/contact" className="btn-primary group text-lg">
          Book a Free Consultation <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
