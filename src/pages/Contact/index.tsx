import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, loading, success
    errors: {} as Record<string, string>
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Lifeline Care Hospital";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    const errors: Record<string, string> = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email as string)) errors.email = "Valid email is required";
    if (!data.phone || !/^\d{10}$/.test((data.phone as string).replace(/\D/g,''))) errors.phone = "Valid 10-digit phone is required";
    if (!data.message || (data.message as string).length < 10) errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      setFormState({ status: 'idle', errors });
      return;
    }

    setFormState({ status: 'loading', errors: {} });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success', errors: {} });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">WE'RE HERE TO HELP.</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Get in touch with us for any inquiries, feedback, or assistance. Our team is ready to support you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-card border border-border">
              <h3 className="text-xl font-bold text-primary-dark mb-6 border-b border-border pb-4">Hospital Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin size={24} className="mr-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-text mb-1">Address</span>
                    <span className="text-sm text-text-muted leading-relaxed">
                      Lifeline Care Hospital<br />
                      123 Healthcare Avenue<br />
                      Bhubaneswar, Odisha<br />
                      India
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={24} className="mr-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-text mb-1">Phone</span>
                    <a href="tel:+919000000000" className="text-sm text-text-muted hover:text-primary transition-colors">
                      +91 90000 00000
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={24} className="mr-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-text mb-1">Email</span>
                    <a href="mailto:care@lifelinehospital.com" className="text-sm text-text-muted hover:text-primary transition-colors">
                      care@lifelinehospital.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card border border-border">
              <h3 className="text-xl font-bold text-primary-dark mb-6 border-b border-border pb-4">Operating Hours</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-primary" />
                    <span className="font-medium text-text">OPD</span>
                  </div>
                  <span className="text-sm text-text-muted">8:00 AM – 8:00 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-emergency" />
                    <span className="font-bold text-emergency">Emergency</span>
                  </div>
                  <span className="text-sm font-bold text-emergency">24/7 Open</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-floating border border-border">
              <h2 className="text-2xl font-bold text-primary-dark mb-2">Send us a Message</h2>
              <p className="text-text-muted mb-8">Fill out the form below and our team will get back to you shortly.</p>

              {formState.status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center fade-in flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">MESSAGE SENT</h3>
                  <p className="text-green-700">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormState({ status: 'idle', errors: {} })}
                    className="mt-6 text-green-700 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${formState.errors.name ? 'border-red-500' : 'border-border'}`}
                        placeholder="John Doe"
                      />
                      {formState.errors.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${formState.errors.phone ? 'border-red-500' : 'border-border'}`}
                        placeholder="+91 9876543210"
                      />
                      {formState.errors.phone && <p className="text-red-500 text-xs mt-1">{formState.errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${formState.errors.email ? 'border-red-500' : 'border-border'}`}
                      placeholder="john@example.com"
                    />
                    {formState.errors.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-text mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text mb-1">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${formState.errors.message ? 'border-red-500' : 'border-border'}`}
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                    {formState.errors.message && <p className="text-red-500 text-xs mt-1">{formState.errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState.status === 'loading'}
                    className={`btn-primary w-full md:w-auto px-10 py-3 flex items-center justify-center ${formState.status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {formState.status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {formState.status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted">
          <MapPin size={48} className="text-primary mb-4 opacity-50" />
          <p className="font-medium text-lg">Interactive Map Placeholder</p>
          <p className="text-sm">Location: Bhubaneswar, Odisha</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
