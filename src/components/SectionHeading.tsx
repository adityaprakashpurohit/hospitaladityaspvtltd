import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary mt-6 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionHeading;
