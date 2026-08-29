import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | Lifeline Care Hospital`;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-text mb-4">Article Not Found</h2>
        <p className="text-text-muted mb-8">The article you are looking for does not exist.</p>
        <button onClick={() => navigate('/resources')} className="btn-primary">
          Back to Blog
        </button>
      </div>
    );
  }

  // Filter out current article for related articles
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/resources" className="inline-flex items-center text-text-muted hover:text-primary transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-1" /> Back to Articles
        </Link>
        
        <div className="mb-8">
          <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider bg-secondary/10 text-secondary uppercase mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted border-y border-border py-4">
            <div className="flex items-center font-medium text-text">
              <User size={16} className="mr-2 text-primary" /> {article.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" /> {article.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" /> {article.readTime}
            </div>
            <button className="flex items-center ml-auto hover:text-primary transition-colors">
              <Share2 size={16} className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-sm"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue max-w-none text-text-muted">
          <p className="lead text-xl text-text font-medium mb-8">
            {article.shortDescription}
          </p>
          <p className="whitespace-pre-line leading-relaxed">
            {article.content}
          </p>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 p-6 rounded-xl text-sm text-text-muted italic">
          <strong className="text-primary-dark font-semibold">Medical Disclaimer:</strong> Health information on this website is for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-primary-dark mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link key={rel.id} to={`/resources/${rel.id}`} className="group block">
                  <div className="h-40 overflow-hidden rounded-xl mb-4">
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
