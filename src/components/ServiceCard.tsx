import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  external?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, link, external = false }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 border border-white/20 hover:border-blue-400/50">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-blue-100 mb-6 flex-grow">{description}</p>
      {external ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary-white group text-sm">
          {buttonText} <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <Link to={link} className="btn-secondary-white group text-sm">
          {buttonText} <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};
