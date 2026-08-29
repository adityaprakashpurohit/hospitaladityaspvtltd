import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Brain, Bone, Baby, Activity, Stethoscope, ArrowRight } from 'lucide-react';
import { departments } from '../../../data/departments';
import SectionHeading from '../../../components/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={36} />,
  Brain: <Brain size={36} />,
  Bone: <Bone size={36} />,
  Baby: <Baby size={36} />,
  Activity: <Activity size={36} />,
  Stethoscope: <Stethoscope size={36} />,
};

const DepartmentsPreview: React.FC = () => {
  return (
    <div className="bg-background-soft py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading 
            title="SPECIALIZED CARE. ONE TRUSTED DESTINATION." 
            subtitle="Comprehensive healthcare across a wide range of medical specialties."
            className="mb-0"
          />
          <Link to="/departments" className="hidden md:inline-flex btn-secondary mt-6 md:mt-0 whitespace-nowrap">
            VIEW ALL DEPARTMENTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.slice(0, 6).map((dept) => (
            <div key={dept.id} className="bg-white rounded-xl p-8 shadow-card hover:shadow-floating transition-all duration-300 border border-border group flex flex-col h-full">
              <div className="text-primary bg-primary-light w-16 h-16 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[dept.iconName] || <Stethoscope size={36} />}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{dept.name}</h3>
              <p className="text-text-muted mb-6 flex-grow">{dept.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                  {dept.specialistCount} Specialists
                </span>
                <Link to={`/departments/${dept.id}`} className="p-2 bg-gray-50 text-primary rounded-full hover:bg-primary hover:text-white transition-colors group/btn">
                  <ArrowRight size={20} className="transform group-hover/btn:rotate-45 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/departments" className="btn-secondary w-full sm:w-auto">
            VIEW ALL DEPARTMENTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPreview;
