import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doctors } from '../../data/doctors';
import { ArrowLeft, MapPin, GraduationCap, Award, Calendar, Languages, Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const doctor = doctors.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (doctor) {
      document.title = `${doctor.name} | Lifeline Care Hospital`;
    }
  }, [doctor]);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-text mb-4">Doctor Not Found</h2>
        <p className="text-text-muted mb-8">The doctor profile you are looking for does not exist.</p>
        <button onClick={() => navigate('/doctors')} className="btn-primary">
          View All Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary-dark pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/doctors" className="inline-flex items-center text-primary-light hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} className="mr-1" /> Back to Doctors
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-2xl shadow-floating border border-border overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/3 relative bg-background-soft">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-[400px] md:h-full object-cover object-top"
              />
              <button 
                onClick={() => toggleFavorite(doctor.id)}
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full text-text-muted hover:text-red-500 transition-colors shadow-md"
                aria-label="Favorite"
              >
                <Heart size={20} className={isFavorite(doctor.id) ? "fill-red-500 text-red-500" : ""} />
              </button>
            </div>

            {/* Right Column - Info */}
            <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col">
              <div className="mb-2">
                <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider bg-secondary/10 text-secondary uppercase">
                  {doctor.department}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-2">{doctor.name}</h1>
              <p className="text-lg font-medium text-text mb-6">{doctor.role}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8 pb-8 border-b border-border">
                <div className="flex items-start">
                  <GraduationCap size={20} className="text-primary mt-0.5 mr-3 shrink-0" />
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wide font-semibold mb-1">Qualification</span>
                    <span className="text-sm font-medium text-text">{doctor.qualification}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award size={20} className="text-primary mt-0.5 mr-3 shrink-0" />
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wide font-semibold mb-1">Experience</span>
                    <span className="text-sm font-medium text-text">{doctor.experience}+ Years</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Languages size={20} className="text-primary mt-0.5 mr-3 shrink-0" />
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wide font-semibold mb-1">Languages</span>
                    <span className="text-sm font-medium text-text">{doctor.languages.join(", ")}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar size={20} className="text-primary mt-0.5 mr-3 shrink-0" />
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wide font-semibold mb-1">Available Days</span>
                    <span className="text-sm font-medium text-text">{doctor.availableDays.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <Link to={`/appointment?doctor=${doctor.id}`} className="btn-primary flex-1 text-center py-4 text-lg">
                  BOOK APPOINTMENT
                </Link>
                <div className="bg-background-soft px-6 py-4 rounded-md flex items-center justify-center border border-border shrink-0">
                  <span className="text-sm text-text-muted mr-2">Consultation Fee:</span>
                  <span className="text-xl font-bold text-primary-dark">₹{doctor.consultationFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-border pb-2">Biography</h2>
              <p className="text-text-muted leading-relaxed">
                {doctor.biography}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-border pb-2">Education & Fellowships</h2>
              <ul className="space-y-3">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                    <span className="text-text">{edu}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 sticky top-28">
              <h3 className="text-lg font-bold text-primary-dark mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.specialties.map((specialty, index) => (
                  <span key={index} className="bg-primary-light/30 text-primary-dark text-sm px-3 py-1.5 rounded-full font-medium border border-primary-light">
                    {specialty}
                  </span>
                ))}
              </div>
              
              <hr className="my-6 border-border" />
              
              <h3 className="text-lg font-bold text-primary-dark mb-4">Hospital Affiliations</h3>
              <div className="flex items-start">
                <MapPin size={18} className="text-secondary mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-text-muted">Lifeline Care Hospital, Bhubaneswar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
