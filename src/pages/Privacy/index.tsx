import React, { useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Lifeline Care Hospital";
  }, []);

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Privacy Policy" className="mb-8 text-center" />
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border prose prose-lg max-w-none text-text-muted">
          <p><strong>Last Updated: August 15, 2026</strong></p>
          
          <h2>1. Introduction</h2>
          <p>
            Lifeline Care Hospital ("we", "our", "us") is committed to protecting the privacy and security of your personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, date of birth, gender, address, email address, and phone number.</li>
            <li><strong>Health Information:</strong> Medical history, test results, diagnoses, treatment plans, and prescriptions.</li>
            <li><strong>Financial Information:</strong> Insurance details, billing address, and payment history (we do not store full credit card numbers).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and website usage data collected through cookies.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Your information is used for the following purposes:</p>
          <ul>
            <li>To provide and manage your medical care and treatments.</li>
            <li>To process billing, payments, and insurance claims.</li>
            <li>To communicate with you regarding appointments, test results, and follow-up care.</li>
            <li>To improve our healthcare services and website functionality.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement robust technical and organizational measures to protect your personal and health data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2>5. Sharing Your Information</h2>
          <p>We do not sell your personal data. We may share your information only with:</p>
          <ul>
            <li>Healthcare professionals involved in your care.</li>
            <li>Insurance providers and third-party billing services.</li>
            <li>Legal and regulatory authorities when required by law.</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Privacy Officer at:<br/>
            <strong>Email:</strong> privacy@lifelinehospital.com<br/>
            <strong>Phone:</strong> +91 90000 00001
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
