import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import { faqs } from '../../../data/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPreview: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="FREQUENTLY ASKED QUESTIONS." 
          centered={true}
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openId === faq.id ? 'border-primary shadow-md' : 'border-border'}`}
            >
              <button
                className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${openId === faq.id ? 'bg-primary-light/30' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => toggleAccordion(faq.id)}
              >
                <span className={`font-semibold ${openId === faq.id ? 'text-primary-dark' : 'text-text'}`}>
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp size={20} className="text-primary shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 py-4 text-text-muted text-sm border-t border-border bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">Still have questions?</p>
          <Link to="/contact" className="btn-secondary">
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPreview;
