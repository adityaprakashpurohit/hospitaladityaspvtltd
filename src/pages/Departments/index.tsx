import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, HeartPulse, Brain, Bone, Baby, Activity, Stethoscope, ArrowRight } from 'lucide-react';
import { departments } from '../../data/departments';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={36} />,
  Brain: <Brain size={36} />,
  Bone: <Bone size={36} />,
  Baby: <Baby size={36} />,
  Activity: <Activity size={36} />,
  Stethoscope: <Stethoscope size={36} />,
};

const Departments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Departments | Lifeline Care Hospital";
  }, []);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Departments</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Comprehensive healthcare across a wide range of medical specialties. Find the right care for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search */}
        <div className="mb-12 max-w-md mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors sm:text-sm"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Departments Grid */}
        {filteredDepartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-xl p-8 shadow-card hover:shadow-floating transition-all duration-300 border border-border group flex flex-col h-full fade-in">
                <div className="text-primary bg-primary-light w-16 h-16 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[dept.iconName] || <Stethoscope size={36} />}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">{dept.name}</h3>
                <p className="text-text-muted mb-6 flex-grow">{dept.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                    {dept.specialistCount} Specialists
                  </span>
                  <Link to={`/departments/${dept.id}`} className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
                    Explore <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-background-soft rounded-xl border border-border">
            <Stethoscope size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-text">No departments found</h3>
            <p className="text-text-muted mt-1">Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
