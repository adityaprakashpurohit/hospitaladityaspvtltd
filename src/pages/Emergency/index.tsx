import React, { useEffect } from 'react';
import { Phone, MapPin, FileText, AlertTriangle, Clock } from 'lucide-react';

const Emergency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Emergency Care | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Critical Alert Header */}
      <div className="bg-emergency text-white py-12 md:py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full mb-6 animate-pulse">
            <AlertTriangle size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">EMERGENCY CARE — 24/7</h1>
          <p className="text-xl md:text-2xl font-medium text-emergency-light mb-10 max-w-2xl mx-auto">
            If you believe you are experiencing a medical emergency, seek immediate emergency medical assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+919000000000" className="bg-white text-emergency hover:bg-gray-100 font-extrabold py-5 px-10 rounded-xl text-2xl transition-all shadow-xl shadow-black/20 w-full sm:w-auto flex items-center justify-center">
              <Phone size={28} className="mr-3" /> CALL EMERGENCY
            </a>
            <a href="#directions" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-5 px-8 rounded-xl text-lg transition-all w-full sm:w-auto flex items-center justify-center">
              <MapPin size={24} className="mr-2" /> GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                <Clock className="mr-3 text-primary" size={28} /> 24-Hour Availability
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background-soft p-5 rounded-xl border border-border">
                  <h3 className="font-bold text-text mb-2">Emergency Department</h3>
                  <p className="text-text-muted">Fully staffed and open 24 hours a day, 7 days a week, 365 days a year.</p>
                </div>
                <div className="bg-background-soft p-5 rounded-xl border border-border">
                  <h3 className="font-bold text-text mb-2">Ambulance Services</h3>
                  <p className="text-text-muted">Advanced Life Support (ALS) ambulances available round-the-clock.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                <FileText className="mr-3 text-primary" size={28} /> What to Bring
              </h2>
              <p className="text-text-muted mb-6">
                In a true emergency, your health is the only priority. However, if possible, having the following items can assist our medical team:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">1</div>
                  <div>
                    <strong className="block text-text">Photo Identification</strong>
                    <span className="text-sm text-text-muted">Government-issued ID or driver's license.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">2</div>
                  <div>
                    <strong className="block text-text">Medication Information</strong>
                    <span className="text-sm text-text-muted">A list of all current medications, dosages, and known allergies.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">3</div>
                  <div>
                    <strong className="block text-text">Medical History</strong>
                    <span className="text-sm text-text-muted">Relevant medical documents, recent test results, or doctor's notes if available.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div id="directions" className="bg-primary-dark text-white p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold mb-4">Location & Entrance</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary-light text-sm uppercase tracking-wider font-semibold mb-1">Address</h4>
                  <p className="font-medium">123 Healthcare Avenue<br/>Bhubaneswar, Odisha, India</p>
                </div>
                <div>
                  <h4 className="text-primary-light text-sm uppercase tracking-wider font-semibold mb-1">Emergency Entrance</h4>
                  <p className="font-medium">Ground Floor — East Wing</p>
                  <p className="text-sm text-gray-300 mt-1">Look for the red "EMERGENCY" signs. Dedicated drop-off zone available.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-sm text-yellow-700 leading-relaxed">
                Do not drive yourself to the hospital if you are experiencing severe chest pain, severe bleeding, or impaired vision. Call for an ambulance immediately. This page is for informational purposes and does not provide medical diagnosis or treatment instructions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Emergency;
