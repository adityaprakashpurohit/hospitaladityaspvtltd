import React, { useEffect, useState, useCallback } from 'react';
import { galleryImages } from '../../data/gallery';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gallery | Lifeline Care Hospital";
  }, []);

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Hospital Gallery</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Take a visual tour of our modern facilities, advanced technology, and dedicated team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-border text-text-muted hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-card fade-in border border-border"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 size={18} />
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-primary-light uppercase tracking-wider block mb-1">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 focus:outline-none transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={showPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white p-4 focus:outline-none transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button 
            onClick={showNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white p-4 focus:outline-none transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] w-full px-12 relative flex flex-col items-center">
            <img 
              src={filteredImages[lightboxIndex].url} 
              alt={filteredImages[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain select-none shadow-2xl rounded-sm"
            />
            <div className="absolute bottom-[-40px] text-center w-full text-white">
              <p className="text-lg font-medium">{filteredImages[lightboxIndex].caption}</p>
              <p className="text-sm text-gray-400 mt-1">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
