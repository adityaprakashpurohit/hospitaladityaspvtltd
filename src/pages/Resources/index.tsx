import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { Calendar, Clock, Search, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Health Articles & Blog | Lifeline Care Hospital";
  }, []);

  const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">Health & Wellness Blog</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Educational resources, tips, and insights from our medical professionals to help you live a healthier life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 lg:w-2/3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-border text-text-muted hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow duration-300 flex flex-col group border border-border fade-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link to={`/resources/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-muted mb-6 flex-grow line-clamp-3">
                    {article.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-text-muted border-t border-border pt-4 mt-auto">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-border shadow-sm">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-text">No articles found</h3>
            <p className="text-text-muted mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
