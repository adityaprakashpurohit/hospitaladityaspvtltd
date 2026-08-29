import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const features = [
    "Experienced Specialists",
    "Advanced Medical Technology",
    "Patient-Centered Care",
    "24/7 Emergency Services"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Lifeline Care Hospital Building" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#14A6A6_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary text-xs font-bold tracking-wider uppercase mb-4">
            ABOUT LIFELINE CARE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-6 leading-tight">
            HEALTHCARE BUILT <br className="hidden md:block" />
            <span className="text-primary">AROUND YOU.</span>
          </h2>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            Lifeline Care Hospital combines experienced medical professionals, modern technology, and compassionate care to deliver better healthcare experiences for individuals and families. We believe in a holistic approach to healing that treats the patient, not just the disease.
          </p>
          
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-text font-medium">
                <CheckCircle2 size={24} className="text-secondary mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/about" className="inline-flex items-center font-bold text-primary hover:text-primary-dark group text-lg transition-colors">
            LEARN MORE ABOUT US 
            <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
