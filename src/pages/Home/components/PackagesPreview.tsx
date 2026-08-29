import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import { healthPackages } from '../../../data/packages';
import { Check } from 'lucide-react';

const PackagesPreview: React.FC = () => {
  return (
    <div className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="PREVENTIVE HEALTH PACKAGES." 
          subtitle="Proactive healthcare for a better tomorrow. Choose a package that suits your needs."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {healthPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl shadow-card p-8 flex flex-col relative ${index === 1 ? 'border-2 border-primary transform md:-translate-y-4 shadow-floating' : 'border border-border'}`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-xl font-bold text-text mb-2 text-center">{pkg.name}</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-extrabold text-primary-dark">₹{pkg.price}</span>
              </div>
              <p className="text-sm text-text-muted text-center mb-8 h-16">
                {pkg.description}
              </p>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {pkg.includedTests.slice(0, 4).map((test, i) => (
                    <li key={i} className="flex items-start text-sm text-text">
                      <Check size={16} className="text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>{test}</span>
                    </li>
                  ))}
                  {pkg.includedTests.length > 4 && (
                    <li className="text-sm text-text-muted italic ml-6">
                      + {pkg.includedTests.length - 4} more tests
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="mt-auto flex flex-col gap-3">
                <Link to={`/health-packages/${pkg.id}`} className={index === 1 ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                  VIEW DETAILS
                </Link>
                <Link to={`/appointment?package=${pkg.id}`} className="text-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPreview;
