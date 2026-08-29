import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Filter, X } from 'lucide-react';
import { doctors } from '../../data/doctors';
import { departments } from '../../data/departments';
import { useFavorites } from '../../hooks/useFavorites';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Find a Doctor | Lifeline Care Hospital";
  }, []);

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDept = selectedDept === "All" || doc.department === selectedDept;
    
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">FIND THE RIGHT SPECIALIST.</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Search our experienced specialists and book a consultation today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:sticky md:top-28">
              <div className="flex items-center justify-between md:mb-6 cursor-pointer md:cursor-default" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h2 className="text-lg font-bold text-text flex items-center">
                  <Filter size={18} className="mr-2 text-primary" /> Filters
                </h2>
                <button className="md:hidden text-text-muted">
                  {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
                </button>
              </div>

              <div className={`mt-4 md:mt-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                <h3 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">Department</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="department" 
                      value="All" 
                      checked={selectedDept === "All"}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="text-primary focus:ring-primary h-4 w-4"
                    />
                    <span className="text-sm text-text hover:text-primary transition-colors">All Departments</span>
                  </label>
                  {departments.map(dept => (
                    <label key={dept.id} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="department" 
                        value={dept.name} 
                        checked={selectedDept === dept.name}
                        onChange={(e) => setSelectedDept(e.target.value)}
                        className="text-primary focus:ring-primary h-4 w-4"
                      />
                      <span className="text-sm text-text hover:text-primary transition-colors">{dept.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 border border-border rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base shadow-sm"
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Doctor Grid */}
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-card transition-all duration-300 flex flex-col fade-in">
                    <div className="relative h-56 overflow-hidden bg-background-soft">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover object-top"
                      />
                      <button 
                        onClick={() => toggleFavorite(doctor.id)}
                        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-text-muted hover:text-red-500 transition-colors shadow-sm"
                        aria-label="Favorite"
                      >
                        <Heart size={18} className={isFavorite(doctor.id) ? "fill-red-500 text-red-500" : ""} />
                      </button>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                        {doctor.department}
                      </div>
                      <h3 className="text-lg font-bold text-text mb-1">{doctor.name}</h3>
                      <p className="text-xs text-text-muted mb-3 h-8 line-clamp-2">{doctor.qualification}</p>
                      
                      <div className="space-y-2 text-sm mb-6 flex-grow">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Experience</span>
                          <span className="font-medium text-text">{doctor.experience}+ Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Consultation</span>
                          <span className="font-medium text-text">₹{doctor.consultationFee}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <Link to={`/doctors/${doctor.id}`} className="btn-secondary py-2 text-sm">
                          VIEW PROFILE
                        </Link>
                        <Link to={`/appointment?doctor=${doctor.id}`} className="btn-primary py-2 text-sm">
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-border shadow-sm">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-text">NO DOCTORS FOUND</h3>
                <p className="text-text-muted mt-2">Try another name or specialty.</p>
                <button 
                  onClick={() => { setSearchTerm(""); setSelectedDept("All"); }}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
