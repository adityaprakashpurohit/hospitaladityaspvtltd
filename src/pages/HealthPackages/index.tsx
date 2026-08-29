import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { healthPackages } from '../../data/packages';
import { Check, ShieldCheck } from 'lucide-react';


const HealthPackages: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Health Packages | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-6">
            <ShieldCheck size={48} className="text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Preventive Health Packages</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Proactive healthcare for a better tomorrow. Regular health checkups can help detect issues before they become serious.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {healthPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl p-8 flex flex-col relative z-20 transition-all duration-300 hover:shadow-floating ${
                index === 1 
                  ? 'border-2 border-primary shadow-xl md:-translate-y-4' 
                  : 'border border-border shadow-card'
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-text mb-2">{pkg.name}</h3>
                <div className="flex items-end justify-center mb-4">
                  <span className="text-sm text-text-muted mb-1 mr-1">₹</span>
                  <span className="text-4xl font-extrabold text-primary-dark">{pkg.price}</span>
                </div>
                <p className="text-sm text-text-muted h-16 flex items-center justify-center">
                  {pkg.description}
                </p>
              </div>
              
              <div className="border-t border-border pt-6 flex-grow">
                <h4 className="text-sm font-bold text-text mb-4 uppercase tracking-wider">Includes:</h4>
                <ul className="space-y-4 mb-8">
                  {pkg.includedTests.map((test, i) => (
                    <li key={i} className="flex items-start text-sm text-text">
                      <div className="bg-secondary/10 p-1 rounded-full mr-3 shrink-0">
                        <Check size={14} className="text-secondary" />
                      </div>
                      <span className="mt-0.5">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border">
                <Link 
                  to={`/health-packages/${pkg.id}`} 
                  className={index === 1 ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  VIEW FULL DETAILS
                </Link>
                <Link 
                  to={`/appointment?package=${pkg.id}`} 
                  className="text-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors py-2"
                >
                  BOOK THIS PACKAGE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Information section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-background-soft rounded-2xl p-8 border border-border text-center">
          <h2 className="text-xl font-bold text-primary-dark mb-4">Why regular health checkups are important?</h2>
          <p className="text-text-muted mb-6">
            Many lifestyle diseases like diabetes, hypertension, and heart disease remain silent in their early stages. Regular health screening helps in early detection, providing a better chance for effective treatment and avoiding serious complications.
          </p>
          <p className="text-sm font-medium text-text">
            For corporate bookings or customized packages, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
