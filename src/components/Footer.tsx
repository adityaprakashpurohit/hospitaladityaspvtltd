import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-primary p-2 rounded-lg">
                <HeartPulse size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">LIFELINE CARE</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Hospital</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              COMPASSION. EXPERTISE. BETTER HEALTH. Providing advanced medical care with a patient-centered approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold" aria-label="YouTube">
                YT
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hospital</h3>
            <ul className="space-y-3">
              {['About', 'Doctors', 'Departments', 'Services', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Patient Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Appointments', path: '/appointment' },
                { name: 'Patient Information', path: '/patient-information' },
                { name: 'Health Packages', path: '/health-packages' },
                { name: 'FAQs', path: '/faq' },
                { name: 'Health Articles', path: '/resources' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  123 Healthcare Avenue<br />
                  Bhubaneswar, Odisha<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <a href="tel:+919000000000" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary shrink-0" />
                <a href="mailto:care@lifelinehospital.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  care@lifelinehospital.com
                </a>
              </li>
              <li className="mt-6 pt-4 border-t border-gray-800">
                <div className="flex items-center">
                  <div className="bg-emergency/20 text-emergency-light p-2 rounded-full mr-3">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">24/7 Emergency</div>
                    <a href="tel:+919000000000" className="text-base font-bold text-white hover:text-emergency-light transition-colors">
                      +91 90000 00000
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Lifeline Care Hospital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span className="text-xs text-gray-500">Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
