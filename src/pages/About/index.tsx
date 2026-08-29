import React, { useEffect } from 'react';
import { ShieldCheck, Award, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/SectionHeading';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Lifeline Care</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            A legacy of trust, compassion, and clinical excellence. We are dedicated to providing world-class healthcare to our community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Hospital Building" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
          <div>
            <SectionHeading title="Our Mission" className="mb-6" />
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              To deliver exceptional, patient-centered healthcare through a combination of expert medical professionals, state-of-the-art technology, and compassionate service. We strive to improve the health and well-being of the communities we serve.
            </p>
            
            <SectionHeading title="Our Vision" className="mb-6" />
            <p className="text-lg text-text-muted leading-relaxed">
              To be the most trusted healthcare partner in the region, recognized for our clinical excellence, innovative treatments, and unwavering commitment to patient safety and satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <SectionHeading title="Our Core Values" centered={true} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <Heart size={32} />, title: "Compassion", desc: "Treating every patient with empathy, dignity, and respect." },
              { icon: <ShieldCheck size={32} />, title: "Integrity", desc: "Maintaining the highest ethical standards in all we do." },
              { icon: <Award size={32} />, title: "Excellence", desc: "Striving for the best clinical outcomes and continuous improvement." },
              { icon: <Users size={32} />, title: "Collaboration", desc: "Working as a unified team to provide integrated patient care." },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-card transition-shadow">
                <div className="w-16 h-16 mx-auto bg-primary-light/50 text-primary rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-background-soft rounded-3xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Join Our Journey to Better Health</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Experience healthcare that puts you first. Our team of specialists is ready to assist you.
          </p>
          <Link to="/doctors" className="btn-primary px-8 py-4 text-lg">
            MEET OUR DOCTORS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
