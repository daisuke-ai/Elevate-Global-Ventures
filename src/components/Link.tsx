import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-navy-700 hover:text-navy-600 px-3 py-2 rounded-md text-sm font-medium 
                 flex items-center transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
};