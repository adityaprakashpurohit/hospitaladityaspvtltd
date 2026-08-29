import React from 'react';
import SectionHeading from '../../../components/SectionHeading';
import { services } from '../../../data/services';
import { Siren, Users, Bed, Stethoscope, Microscope, Pill, Scissors, HeartPulse, Ambulance } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Siren: <Siren size={32} />,
  Users: <Users size={32} />,
  Bed: <Bed size={32} />,
  Stethoscope: <Stethoscope size={32} />,
  Microscope: <Microscope size={32} />,
  Pill: <Pill size={32} />,
  Scissors: <Scissors size={32} />,
  HeartPulse: <HeartPulse size={32} />,
  Ambulance: <Ambulance size={32} />,
};

const ServicesPreview: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="DESIGNED FOR BETTER CARE." 
          subtitle="A comprehensive range of medical services designed to support every step of your healthcare journey."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {services.slice(0, 6).map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-background-soft border-2 border-primary-light flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
