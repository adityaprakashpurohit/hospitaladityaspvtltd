import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-background">
      <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <AlertCircle size={48} />
      </div>
      <h1 className="text-4xl font-extrabold text-primary-dark mb-4">THIS PAGE COULDN'T BE FOUND.</h1>
      <p className="text-lg text-text-muted mb-8 max-w-md">
        Let's get you back to the care you were looking for. The page might have been moved or deleted.
      </p>
      <Link to="/" className="btn-primary px-8">
        BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
