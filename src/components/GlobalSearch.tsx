import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, User, HeartPulse, FileText, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import { healthPackages } from '../data/packages';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      setSearchTerm('');
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  // Perform search across different data sources
  const term = searchTerm.toLowerCase().trim();
  
  const matchedDoctors = term ? doctors.filter(d => 
    d.name.toLowerCase().includes(term) || d.department.toLowerCase().includes(term)
  ).slice(0, 3) : [];
  
  const matchedDepartments = term ? departments.filter(d => 
    d.name.toLowerCase().includes(term)
  ).slice(0, 3) : [];
  
  const matchedPackages = term ? healthPackages.filter(p => 
    p.name.toLowerCase().includes(term)
  ).slice(0, 3) : [];

  const hasResults = matchedDoctors.length > 0 || matchedDepartments.length > 0 || matchedPackages.length > 0;
  const isSearching = term.length > 0;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm fade-in flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 pt-10 sm:pt-20 pb-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary-dark">Global Search</h2>
          <button 
            onClick={onClose}
            className="p-2 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="block w-full pl-14 pr-4 py-4 text-xl border-2 border-primary/20 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-lg"
            placeholder="Search for doctors, departments, or health packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex-grow overflow-y-auto custom-scrollbar h-[calc(100vh-250px)]">
          {!isSearching && (
            <div className="text-center py-20 text-text-muted">
              <Search size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-lg">Start typing to search across the hospital...</p>
            </div>
          )}

          {isSearching && !hasResults && (
            <div className="text-center py-20 bg-white rounded-xl border border-border">
              <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-text">No results found for "{searchTerm}"</h3>
              <p className="text-text-muted mt-2">Try checking for spelling errors or use different keywords.</p>
            </div>
          )}

          {isSearching && hasResults && (
            <div className="space-y-8 pb-10">
              {matchedDoctors.length > 0 && (
                <section>
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center border-b border-border pb-2">
                    <User size={16} className="mr-2" /> Doctors
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {matchedDoctors.map(doc => (
                      <div 
                        key={doc.id} 
                        onClick={() => handleNavigate(`/doctors/${doc.id}`)}
                        className="bg-white p-4 rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all flex items-center group"
                      >
                        <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                          <div className="font-bold text-text group-hover:text-primary transition-colors line-clamp-1">{doc.name}</div>
                          <div className="text-xs text-text-muted">{doc.department}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {matchedDepartments.length > 0 && (
                <section>
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center border-b border-border pb-2">
                    <HeartPulse size={16} className="mr-2" /> Departments
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedDepartments.map(dept => (
                      <div 
                        key={dept.id} 
                        onClick={() => handleNavigate(`/departments/${dept.id}`)}
                        className="bg-white p-4 rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="font-bold text-text group-hover:text-primary transition-colors">{dept.name}</div>
                        <ArrowRight size={16} className="text-text-muted group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {matchedPackages.length > 0 && (
                <section>
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center border-b border-border pb-2">
                    <FileText size={16} className="mr-2" /> Health Packages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedPackages.map(pkg => (
                      <div 
                        key={pkg.id} 
                        onClick={() => handleNavigate(`/health-packages/${pkg.id}`)}
                        className="bg-white p-4 rounded-xl border border-border hover:border-primary hover:shadow-md cursor-pointer transition-all flex flex-col group"
                      >
                        <div className="font-bold text-text group-hover:text-primary transition-colors mb-1">{pkg.name}</div>
                        <div className="text-sm font-bold text-primary-dark">₹{pkg.price}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
