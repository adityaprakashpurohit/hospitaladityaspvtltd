import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, UserSearch, Stethoscope, Siren } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: "Book Appointment",
      description: "Find a doctor and choose a convenient time.",
      icon: <Calendar size={32} />,
      link: "/appointment",
      color: "bg-blue-50 text-blue-600",
      hover: "hover:bg-blue-600 hover:text-white"
    },
    {
      title: "Find a Doctor",
      description: "Search our experienced specialists.",
      icon: <UserSearch size={32} />,
      link: "/doctors",
      color: "bg-indigo-50 text-indigo-600",
      hover: "hover:bg-indigo-600 hover:text-white"
    },
    {
      title: "Departments",
      description: "Explore our medical specialties.",
      icon: <Stethoscope size={32} />,
      link: "/departments",
      color: "bg-teal-50 text-teal-600",
      hover: "hover:bg-teal-600 hover:text-white"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical assistance.",
      icon: <Siren size={32} />,
      link: "/emergency",
      color: "bg-red-50 text-red-600",
      hover: "hover:bg-emergency hover:text-white"
    }
  ];

  return (
    <div className="relative z-20 -mt-10 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`bg-white rounded-xl shadow-card p-6 border-b-4 border-transparent hover:border-current transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-start ${action.hover.replace('hover:', 'hover:border-')}`}
          >
            <div className={`p-4 rounded-lg mb-4 transition-colors duration-300 ${action.color} group-${action.hover}`}>
              {action.icon}
            </div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">{action.title}</h3>
            <p className="text-sm text-text-muted group-hover:text-text transition-colors">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
