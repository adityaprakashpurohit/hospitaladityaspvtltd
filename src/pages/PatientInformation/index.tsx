import React, { useEffect } from 'react';
import { ClipboardList, Bed, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientInformation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patient Information | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Patient Information</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Everything you need to know before, during, and after your visit to Lifeline Care Hospital.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Before Your Visit */}
        <section className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="bg-primary-light/30 px-6 py-4 border-b border-border flex items-center">
            <ClipboardList className="text-primary mr-3" size={24} />
            <h2 className="text-2xl font-bold text-primary-dark">Before Your Visit</h2>
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Appointment Information</h3>
              <p className="text-text-muted">Please arrive 15 minutes prior to your scheduled appointment time to complete any necessary registration. If you need to cancel or reschedule, please do so at least 24 hours in advance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Documents to Bring</h3>
              <ul className="list-disc pl-5 text-text-muted space-y-1">
                <li>Valid Photo ID (Aadhaar, Passport, etc.)</li>
                <li>Previous medical records, X-rays, or test reports</li>
                <li>Current medication list</li>
                <li>Health insurance card (if applicable)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* During Your Visit */}
        <section className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="bg-primary-light/30 px-6 py-4 border-b border-border flex items-center">
            <Clock className="text-primary mr-3" size={24} />
            <h2 className="text-2xl font-bold text-primary-dark">During Your Visit</h2>
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Registration & Billing</h3>
              <p className="text-text-muted">Our central registration desk is located on the ground floor. Payment for consultations and OPD procedures is required prior to the service. We accept cash, credit/debit cards, and UPI.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Consultation & Diagnostics</h3>
              <p className="text-text-muted">After registration, you will be directed to the respective department waiting area. If your doctor prescribes diagnostic tests, our staff will guide you to the laboratory or imaging center.</p>
            </div>
          </div>
        </section>

        {/* For Inpatients */}
        <section className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="bg-primary-light/30 px-6 py-4 border-b border-border flex items-center">
            <Bed className="text-primary mr-3" size={24} />
            <h2 className="text-2xl font-bold text-primary-dark">For Inpatients</h2>
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Visiting Hours</h3>
              <p className="text-text-muted">Morning: 10:00 AM – 12:00 PM<br/>Evening: 5:00 PM – 7:00 PM<br/><span className="text-sm italic">Note: ICU visiting hours may vary and are restricted to immediate family members only.</span></p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Attendant Guidelines</h3>
              <p className="text-text-muted">One attendant is allowed to stay with the patient overnight in private and semi-private rooms. A valid attendant pass will be issued at the time of admission.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text mb-2">Discharge Process</h3>
              <p className="text-text-muted">Discharge processes are usually initiated in the morning after the doctor's rounds. The final billing and clearance may take 2-4 hours, especially if insurance pre-authorization is required.</p>
            </div>
          </div>
        </section>

        <div className="bg-primary-light/20 p-8 rounded-2xl border border-primary-light text-center">
          <HelpCircle size={40} className="mx-auto text-primary mb-4" />
          <h2 className="text-xl font-bold text-primary-dark mb-2">Have a specific question?</h2>
          <p className="text-text-muted mb-6">Our patient care coordinators are available to assist you.</p>
          <Link to="/faq" className="btn-secondary inline-flex">
            Read FAQs <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
