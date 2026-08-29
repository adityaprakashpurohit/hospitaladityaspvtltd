import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { departments } from '../../data/departments';
import { doctors } from '../../data/doctors';
import { CheckCircle2, ArrowLeft, HeartPulse, Brain, Bone, Baby, Activity, Stethoscope } from 'lucide-react';


const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={48} />,
  Brain: <Brain size={48} />,
  Bone: <Bone size={48} />,
  Baby: <Baby size={48} />,
  Activity: <Activity size={48} />,
  Stethoscope: <Stethoscope size={48} />,
};

const DepartmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const department = departments.find(d => d.id === id);
  const relatedDoctors = doctors.filter(doc => doc.department === department?.name);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (department) {
      document.title = `${department.name} | Lifeline Care Hospital`;
    }
  }, [department]);

  if (!department) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-text mb-4">Department Not Found</h2>
        <p className="text-text-muted mb-8">The department you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/departments')} className="btn-primary">
          View All Departments
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <Link to="/departments" className="inline-flex items-center text-primary-light hover:text-white transition-colors mb-6 text-sm font-medium">
              <ArrowLeft size={16} className="mr-1" /> Back to Departments
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{department.name}</h1>
            <p className="text-lg text-primary-light max-w-2xl">
              {department.description}
            </p>
          </div>
          <div className="hidden md:flex text-white opacity-20">
            {iconMap[department.iconName] || <Stethoscope size={48} />}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="fade-in">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">About the Department</h2>
              <p className="text-text-muted leading-relaxed text-lg">
                {department.longDescription}
              </p>
            </section>

            <section className="fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Services & Treatments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {department.services.map((service, index) => (
                  <div key={index} className="flex items-start bg-background-soft p-4 rounded-lg border border-border">
                    <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="font-medium text-text">{service}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background-soft rounded-2xl p-6 border border-border sticky top-28">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Need an Appointment?</h3>
              <p className="text-sm text-text-muted mb-6">
                Book a consultation with our experienced specialists in the {department.name} department.
              </p>
              <Link to={`/appointment?department=${department.id}`} className="btn-primary w-full">
                BOOK APPOINTMENT
              </Link>
              
              <hr className="my-6 border-border" />
              
              <h3 className="text-lg font-bold text-primary-dark mb-4">Department Specialists</h3>
              {relatedDoctors.length > 0 ? (
                <div className="space-y-4">
                  {relatedDoctors.map(doctor => (
                    <Link key={doctor.id} to={`/doctors/${doctor.id}`} className="flex items-center group">
                      <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full object-cover mr-3 border border-border" />
                      <div>
                        <div className="font-bold text-sm text-text group-hover:text-primary transition-colors">{doctor.name}</div>
                        <div className="text-xs text-text-muted">{doctor.qualification}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-text-muted italic">Specialists list currently unavailable.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
