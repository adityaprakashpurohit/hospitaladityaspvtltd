import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import { articles } from '../../../data/articles';
import { Calendar, Clock } from 'lucide-react';

const ArticlesPreview: React.FC = () => {
  return (
    <div className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading 
            title="HEALTH & WELLNESS." 
            subtitle="Latest insights and advice from our medical experts."
            className="mb-0"
          />
          <Link to="/resources" className="hidden md:inline-flex btn-secondary mt-6 md:mt-0 whitespace-nowrap">
            VIEW ALL ARTICLES
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-shadow duration-300 flex flex-col group border border-border">
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
                <h3 className="text-lg font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link to={`/resources/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-text-muted mb-6 flex-grow">
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
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/resources" className="btn-secondary w-full sm:w-auto">
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPreview;
