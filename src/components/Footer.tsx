import React from 'react';
import { HeartHandshake, Mail, Phone, MapPin, Shield, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-600 rounded-lg">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SafeMind</h3>
                <p className="text-gray-400">Campus</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Confidential mental health support for students • Available 24/7
            </p>
            
            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-300">100% Confidential & HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-300">24/7 Crisis Support Available</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-300">Licensed Mental Health Professionals</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Free Chat',
                'Professional Therapy',
                'Crisis Resources',
                'Community Forum',
                'Volunteer Opportunities'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Help Now</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-400">Crisis Hotline</p>
                  <p className="text-gray-300">988</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-teal-400">Support Email</p>
                  <p className="text-gray-300">help@safemind.campus</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-400">Campus Location</p>
                  <p className="text-gray-300">Student Health Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 p-6 bg-red-900/20 border border-red-800 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-600 rounded-lg flex-shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-2">Crisis Emergency</h4>
              <p className="text-gray-300 leading-relaxed">
                If you're in immediate danger or having thoughts of self-harm, please call 911 or the National Suicide Prevention Lifeline at 988 immediately. For campus emergencies, contact campus safety or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SafeMind Campus. All rights reserved. • Privacy Policy • Terms of Service
            </p>
            <p className="text-gray-400 text-sm">
              Licensed mental health services • Accredited by APA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;