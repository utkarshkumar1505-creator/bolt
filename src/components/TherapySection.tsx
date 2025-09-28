import React, { useState } from 'react';
import { UserCheck, Mail, User, Target, Send } from 'lucide-react';
import { TherapyRequest } from '../types';
import { toast } from './ui/toast';

const TherapySection: React.FC = () => {
  const [formData, setFormData] = useState<TherapyRequest>({
    fullName: '',
    email: '',
    specialization: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const specializations = [
    'Anxiety & Panic Disorders',
    'Depression & Mood Disorders',
    'Relationship Issues',
    'Trauma & PTSD',
    'Academic Stress & Performance',
    'Social Anxiety',
    'Eating Disorders',
    'General Mental Health Support'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Therapy request submitted successfully! You\'ll receive a response within 24 hours.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      specialization: '',
      goals: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="therapy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-teal-100 rounded-xl">
                <UserCheck className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Therapy</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with licensed therapists who understand student life and mental health challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Professional Therapy?</h3>
                <div className="space-y-4">
                  {[
                    "Licensed mental health professionals",
                    "Affordable student pricing ($39/month)",
                    "Flexible scheduling around your classes",
                    "Specialized in student mental health",
                    "Video, audio, or text sessions available",
                    "Complete confidentiality guaranteed"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-semibold text-sm">
                    S
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "My therapist helped me manage my anxiety and improve my academic performance. The flexible scheduling worked perfectly with my course load."
                    </p>
                    <p className="text-sm text-teal-600 font-medium">- Sarah, Psychology Major</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request Professional Support</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@university.edu"
                  />
                </div>

                <div>
                  <label htmlFor="specialization" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Target className="h-4 w-4" />
                    Preferred Specialization
                  </label>
                  <select
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a specialization</option>
                    {specializations.map((spec, index) => (
                      <option key={index} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    What are your therapy goals?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Describe what you hope to achieve through therapy..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                All information is confidential and HIPAA compliant. You'll receive a response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapySection;