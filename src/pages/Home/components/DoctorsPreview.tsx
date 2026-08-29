import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import { doctors } from '../../../data/doctors';

const DoctorsPreview: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading 
            title="MEET OUR EXPERTS." 
            subtitle="Dedicated professionals committed to your health."
            className="mb-0"
          />
          <Link to="/doctors" className="hidden md:inline-flex btn-secondary mt-6 md:mt-0 whitespace-nowrap">
            VIEW ALL DOCTORS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.slice(0, 4).map((doctor) => (
            <div key={doctor.id} className="bg-background-soft rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link to={`/appointment?doctor=${doctor.id}`} className="bg-primary text-white w-full py-2 text-center rounded text-sm font-semibold hover:bg-primary-dark transition-colors">
                    Book Appointment
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                  {doctor.department}
                </div>
                <h3 className="text-lg font-bold text-text mb-1">
                  <Link to={`/doctors/${doctor.id}`} className="hover:text-primary transition-colors">
                    {doctor.name}
                  </Link>
                </h3>
                <p className="text-sm text-text-muted mb-4">{doctor.qualification}</p>
                <div className="text-sm font-medium text-text">
                  {doctor.experience}+ Years Experience
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/doctors" className="btn-secondary w-full sm:w-auto">
            VIEW ALL DOCTORS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPreview;
