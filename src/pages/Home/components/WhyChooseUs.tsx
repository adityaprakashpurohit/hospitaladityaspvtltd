import React from 'react';

import { Award, Laptop, Users, Clock, Network, FileText } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Experienced Specialists",
      description: "Experienced doctors across multiple specialties working together.",
      icon: <Award size={24} />
    },
    {
      title: "Advanced Technology",
      description: "Modern diagnostic and treatment facilities.",
      icon: <Laptop size={24} />
    },
    {
      title: "Patient-Centered Care",
      description: "Care designed around patients and their families.",
      icon: <Users size={24} />
    },
    {
      title: "24/7 Emergency",
      description: "Emergency services available around the clock.",
      icon: <Clock size={24} />
    },
    {
      title: "Integrated Care",
      description: "Multiple specialties working together seamlessly.",
      icon: <Network size={24} />
    },
    {
      title: "Transparent Experience",
      description: "Clear information and patient guidance at every step.",
      icon: <FileText size={24} />
    }
  ];

  return (
    <div className="bg-primary-dark text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">OUR ADVANTAGE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">WHY FAMILIES CHOOSE LIFELINE CARE.</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="bg-secondary/20 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-primary-light text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
