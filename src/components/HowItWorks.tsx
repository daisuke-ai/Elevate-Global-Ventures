import React from 'react';
import { MessageSquare, CheckCircle, Calendar, DollarSign } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="bg-blue-50 text-darkblue-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: MessageSquare, title: "Contact Us", description: "Reach out through our online form or give us a call." },
            { icon: DollarSign, title: "Discuss Your Needs", description: "We'll listen to your situation and explore how we can help." },
            { icon: CheckCircle, title: "Personalized Plan", description: "We'll create a tailored support plan to meet your specific needs." },
            { icon: Calendar, title: "Ongoing Support", description: "We'll provide continuous assistance to help you thrive." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
