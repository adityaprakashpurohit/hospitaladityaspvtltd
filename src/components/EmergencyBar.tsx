import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyBar: React.FC = () => {
  return (
    <div className="bg-emergency text-white text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="animate-pulse bg-white/20 px-2 py-0.5 rounded text-xs font-bold tracking-wider">
            24/7 EMERGENCY CARE
          </span>
          <a href="tel:+919000000000" className="flex items-center hover:text-emergency-light transition-colors">
            <Phone size={14} className="mr-1" />
            +91 90000 00000
          </a>
        </div>
        <div>
          <Link to="/emergency" className="inline-flex items-center text-white hover:text-emergency-light transition-colors uppercase tracking-wider text-xs font-bold">
            Emergency Help <ChevronRight size={14} className="ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBar;
