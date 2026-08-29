import React, { useEffect } from 'react';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import Stats from './components/Stats';
import AboutPreview from './components/AboutPreview';
import DepartmentsPreview from './components/DepartmentsPreview';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import DoctorsPreview from './components/DoctorsPreview';
import PackagesPreview from './components/PackagesPreview';
import TestimonialsPreview from './components/TestimonialsPreview';
import ArticlesPreview from './components/ArticlesPreview';
import FAQPreview from './components/FAQPreview';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Lifeline Care Hospital | Multi-Specialty Hospital";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuickActions />
      <Stats />
      <AboutPreview />
      <DepartmentsPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorsPreview />
      <PackagesPreview />
      <TestimonialsPreview />
      <ArticlesPreview />
      <FAQPreview />
      
      {/* Final CTA Section */}
      <div className="bg-primary-dark py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">READY TO TAKE CARE OF YOUR HEALTH?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <a href="/appointment" className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-md transition-colors w-full sm:w-auto">
            BOOK APPOINTMENT
          </a>
          <a href="tel:+919000000000" className="bg-transparent border border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-md transition-colors w-full sm:w-auto">
            CALL US NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
