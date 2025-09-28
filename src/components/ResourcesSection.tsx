import React from 'react';
import { BookOpen, Brain, Heart, Phone, ExternalLink, Download } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      icon: Brain,
      title: "Anxiety & Stress Management",
      description: "Comprehensive guides and techniques for managing anxiety, panic attacks, and academic stress.",
      items: [
        "Breathing exercises and grounding techniques",
        "Cognitive behavioral therapy worksheets",
        "Study stress management strategies",
        "Sleep hygiene for anxiety relief"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Depression Support Resources",
      description: "Understanding depression and finding paths to recovery with professional guidance.",
      items: [
        "Recognizing depression symptoms",
        "Self-care routines and activities",
        "Building support networks",
        "When to seek professional help"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Mindfulness & Meditation",
      description: "Interactive guided exercises for building mindfulness and emotional regulation skills.",
      items: [
        "5-minute daily meditation sessions",
        "Mindful study techniques",
        "Body scan and relaxation exercises",
        "Mindful walking and movement"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Phone,
      title: "Crisis Support Hotlines",
      description: "Immediate help when you need it most. Available 24/7 for crisis situations.",
      items: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "Campus Safety: Your university number",
        "Local emergency services: 911"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      urgent: true
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mental Health Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and resources to support your mental health journey, from self-help guides to crisis support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                  resource.urgent ? 'ring-2 ring-red-200 border-red-200' : 'border-gray-100'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${resource.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${resource.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                      {resource.urgent && (
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full mt-1">
                          Emergency Resources
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>

                {/* Items */}
                <div className="space-y-3 mb-8">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.color} mt-2 flex-shrink-0`} />
                      <p className={`text-sm ${resource.urgent ? 'font-medium text-gray-700' : 'text-gray-600'}`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className={`flex-1 py-3 px-4 bg-gradient-to-r ${resource.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}>
                    {resource.urgent ? (
                      <>
                        <Phone className="h-4 w-4" />
                        Get Help Now
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4" />
                        Access Resources
                      </>
                    )}
                  </button>
                  
                  {!resource.urgent && (
                    <button className="sm:w-auto px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Guide
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding the Right Resources?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our resource specialists can help you find exactly what you need based on your situation and preferences.
          </p>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-200">
            Talk to a Resource Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;