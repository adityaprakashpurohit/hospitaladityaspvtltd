import React, { useEffect, useState } from 'react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "150+", label: "Specialist Doctors" },
    { value: "30+", label: "Departments" },
    { value: "50K+", label: "Patients Served" },
    { value: "24/7", label: "Emergency Care" }
  ];

  return (
    <div id="stats-section" className="bg-primary py-16 text-white my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-primary-light uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
