import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-background-soft overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-background-soft sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left fade-in">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
                ADVANCED CARE • COMPASSIONATE PEOPLE
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-primary-dark sm:text-5xl md:text-6xl mb-6">
                <span className="block xl:inline">CARE THAT PUTS</span>{' '}
                <span className="block text-primary">YOU FIRST.</span>
              </h1>
              <p className="mt-3 text-base text-text-muted sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                Expert medical care, advanced technology, and compassionate specialists — all focused on helping you and your family live healthier lives.
              </p>
              
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/appointment" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 mb-3 sm:mb-0 shadow-lg shadow-primary/30">
                  BOOK AN APPOINTMENT <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/doctors" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                  FIND A DOCTOR
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative fade-in" style={{ animationDelay: '0.2s' }}>
        <img
          className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Doctor consulting with a patient"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-soft to-transparent lg:from-background-soft lg:via-background-soft/20 lg:to-transparent opacity-80 lg:opacity-100"></div>
        
        {/* Floating Trust Card */}
        <div className="absolute bottom-8 left-8 lg:left-0 lg:-ml-16 bg-white p-4 rounded-xl shadow-floating flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <ShieldCheck size={28} />
          </div>
          <div>
            <div className="text-sm font-bold text-primary-dark">Trusted Healthcare</div>
            <div className="text-xs text-text-muted mt-0.5"><span className="font-bold text-text">25+</span> Years • <span className="font-bold text-text">50K+</span> Patients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
