import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { healthPackages } from '../../data/packages';
import { ArrowLeft, CheckCircle2, Clock, Info, FileText } from 'lucide-react';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const pkg = healthPackages.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pkg) {
      document.title = `${pkg.name} | Lifeline Care Hospital`;
    }
  }, [pkg]);

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-text mb-4">Package Not Found</h2>
        <p className="text-text-muted mb-8">The health package you are looking for does not exist.</p>
        <button onClick={() => navigate('/health-packages')} className="btn-primary">
          View All Packages
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary-dark pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/health-packages" className="inline-flex items-center text-primary-light hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} className="mr-1" /> Back to Packages
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-2xl shadow-floating border border-border overflow-hidden p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-8 mb-8">
            <div>
              <div className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider bg-secondary/10 text-secondary uppercase mb-3">
                PREVENTIVE HEALTHCARE
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4">{pkg.name}</h1>
              <p className="text-lg text-text-muted max-w-2xl">
                {pkg.description}
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-left md:text-right shrink-0">
              <div className="text-sm text-text-muted uppercase tracking-wider font-semibold mb-1">Package Price</div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-4">₹{pkg.price}</div>
              <Link to={`/appointment?package=${pkg.id}`} className="btn-primary w-full md:w-auto px-8 py-3">
                BOOK NOW
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle2 className="text-secondary mr-3" size={28} /> Tests Included
              </h2>
              <ul className="space-y-4 bg-background-soft p-6 rounded-xl border border-border">
                {pkg.includedTests.map((test, index) => (
                  <li key={index} className="flex items-start text-text font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-text mb-3 flex items-center">
                  <Info className="text-primary mr-2" size={20} /> Suitable For
                </h3>
                <p className="text-text-muted bg-white p-4 rounded-lg border border-border">
                  {pkg.suitableFor}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text mb-3 flex items-center">
                  <Clock className="text-primary mr-2" size={20} /> Duration & Reports
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <div className="text-xs text-text-muted uppercase font-semibold mb-1">Time Required</div>
                    <div className="font-medium text-text">{pkg.duration}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <div className="text-xs text-text-muted uppercase font-semibold mb-1">Report Availability</div>
                    <div className="font-medium text-text">{pkg.reportAvailability}</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center">
                  <FileText className="text-yellow-600 mr-2" size={20} /> Preparation Instructions
                </h3>
                <p className="text-yellow-700 text-sm leading-relaxed font-medium">
                  {pkg.preparationInstructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
