import React, { useEffect, useState } from 'react';
import { faqs } from '../../data/faq';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([faqs[0]?.id]));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ | Lifeline Care Hospital";
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and facilities.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 border border-border rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base shadow-sm"
            placeholder="Search for questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-sm ${openIds.has(faq.id) ? 'border-primary shadow-md' : 'border-border'}`}
              >
                <button
                  className={`w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none transition-colors ${openIds.has(faq.id) ? 'bg-primary-light/10' : 'hover:bg-gray-50'}`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className={`font-bold text-lg pr-8 ${openIds.has(faq.id) ? 'text-primary-dark' : 'text-text'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIds.has(faq.id) ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'}`}>
                    {openIds.has(faq.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIds.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 py-5 text-text-muted leading-relaxed border-t border-border bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-border">
            <p className="text-lg text-text font-medium mb-2">No results found</p>
            <p className="text-text-muted">We couldn't find any questions matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm("")} className="mt-4 text-primary font-medium hover:underline">
              Clear search
            </button>
          </div>
        )}

        <div className="mt-16 bg-background-soft border border-border rounded-2xl p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
            <MessageCircle size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary-dark mb-2">Still need help?</h2>
          <p className="text-text-muted mb-6">If you couldn't find the answer to your question, our support team is ready to assist you.</p>
          <Link to="/contact" className="btn-primary px-8">
            CONTACT SUPPORT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
