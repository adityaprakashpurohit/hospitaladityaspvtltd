import React from 'react';
import SectionHeading from '../../../components/SectionHeading';
import { testimonials } from '../../../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsPreview: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="TRUSTED BY FAMILIES." 
          subtitle="Read what our patients have to say about their experience with us."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background-soft p-6 rounded-2xl border border-border">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-gray-300" : ""} />
                ))}
              </div>
              <p className="text-text-muted italic mb-6 leading-relaxed text-sm">
                "{testimonial.review}"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold mr-3 shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-text text-sm">{testimonial.name}</div>
                  <div className="text-xs text-text-muted">{testimonial.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPreview;
