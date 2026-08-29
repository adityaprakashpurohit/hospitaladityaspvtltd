import React, { useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Terms & Conditions" className="mb-8 text-center" />
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border prose prose-lg max-w-none text-text-muted">
          <p><strong>Effective Date: August 15, 2026</strong></p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Lifeline Care Hospital website ("Website"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Website.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            <strong>The content on this Website is for informational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.
          </p>
          <p>
            <strong>In case of a medical emergency, immediately call your local emergency services or proceed to the nearest emergency room.</strong>
          </p>

          <h2>3. Appointments and Services</h2>
          <ul>
            <li>Online appointment requests are subject to confirmation by our staff.</li>
            <li>We reserve the right to modify, suspend, or discontinue any service or treatment without prior notice.</li>
            <li>Estimated waiting times and doctor availability are subject to change due to medical emergencies and unforeseen circumstances.</li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>When using our Website, you agree not to:</p>
          <ul>
            <li>Provide false or misleading personal or medical information.</li>
            <li>Use the Website for any unlawful purpose or in violation of these Terms.</li>
            <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, logos, graphics, and text on this Website are the property of Lifeline Care Hospital and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Lifeline Care Hospital shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Website or any errors or omissions in its content.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any queries regarding these Terms & Conditions, please contact us at:<br/>
            <strong>Email:</strong> legal@lifelinehospital.com<br/>
            <strong>Address:</strong> 123 Healthcare Avenue, Bhubaneswar, Odisha, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
