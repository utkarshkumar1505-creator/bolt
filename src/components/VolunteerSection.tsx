import React from 'react';
import { Heart, Users, BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { VolunteerOpportunity } from '../types';

const VolunteerSection: React.FC = () => {
  const opportunities: VolunteerOpportunity[] = [
    {
      id: '1',
      title: "Peer Listener Training",
      commitment: "2-3 hours/week",
      description: "Become a trained peer listener to provide emotional support through our chat platform. Complete training program and support fellow students.",
      requirements: [
        "Complete 20-hour training program",
        "Maintain confidentiality standards",
        "Commit to 6-month minimum",
        "Demonstrate empathy and active listening"
      ]
    },
    {
      id: '2',
      title: "Crisis Support Volunteer",
      commitment: "4 hours/week",
      description: "Provide critical support during mental health emergencies. Work with licensed professionals to help students in crisis situations.",
      requirements: [
        "Additional crisis intervention training",
        "Mental Health First Aid certification",
        "Background check required",
        "Previous volunteer experience preferred"
      ]
    },
    {
      id: '3',
      title: "Wellness Workshop Assistant",
      commitment: "1-2 hours/week",
      description: "Help facilitate wellness workshops, mindfulness sessions, and group activities that promote mental health awareness on campus.",
      requirements: [
        "Interest in mental health education",
        "Good communication skills",
        "Flexible schedule",
        "Team player attitude"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Difference",
      description: "Directly impact fellow students' mental health and wellbeing"
    },
    {
      icon: BookOpen,
      title: "Gain Valuable Skills",
      description: "Develop counseling, communication, and crisis management skills"
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with like-minded peers passionate about mental health"
    },
    {
      icon: CheckCircle,
      title: "Professional Development",
      description: "Earn certifications and references for future career opportunities"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Volunteer With Us</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our mission to support student mental health. Make a meaningful impact while developing valuable skills and connections.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Opportunities */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Volunteer Opportunities</h3>
            
            {opportunities.map((opportunity, index) => (
              <div
                key={opportunity.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h4>
                        <div className="flex items-center gap-2 text-green-600 mb-4">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{opportunity.commitment}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{opportunity.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Requirements:</h5>
                      <div className="space-y-2">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-gray-600">{req}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Card */}
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        {index === 0 ? '50+' : index === 1 ? '25+' : '75+'}
                      </div>
                      <div className="text-sm text-gray-600">Current volunteers</div>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 mb-4">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <button className="w-full py-2 px-4 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of student volunteers who are making a real impact on campus mental health. 
              Your support can change lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200">
                Start Your Application
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                Attend Info Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;