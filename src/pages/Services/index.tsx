import React, { useEffect } from 'react';
import { services } from '../../data/services';
import { Siren, Users, Bed, Stethoscope, Microscope, Pill, Scissors, HeartPulse, Ambulance } from 'lucide-react';


const iconMap: Record<string, React.ReactNode> = {
  Siren: <Siren size={40} />,
  Users: <Users size={40} />,
  Bed: <Bed size={40} />,
  Stethoscope: <Stethoscope size={40} />,
  Microscope: <Microscope size={40} />,
  Pill: <Pill size={40} />,
  Scissors: <Scissors size={40} />,
  HeartPulse: <HeartPulse size={40} />,
  Ambulance: <Ambulance size={40} />,
};

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Comprehensive medical services designed to support every step of your healthcare journey, from diagnosis to recovery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-card p-8 border border-border hover:shadow-floating transition-all duration-300 group flex flex-col fade-in">
              <div className="w-16 h-16 rounded-xl bg-primary-light/50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <button className="text-primary font-bold uppercase tracking-wider text-sm hover:text-primary-dark transition-colors text-left mt-auto inline-flex items-center group/btn">
                Learn More
                <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-background-soft py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Need More Information?</h2>
          <p className="text-text-muted mb-8 text-lg">
            Our support team is available to help you understand our services and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919000000000" className="btn-primary">
              <Siren size={20} className="mr-2" /> CALL SUPPORT
            </a>
            <a href="/contact" className="btn-secondary">
              SEND A MESSAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
