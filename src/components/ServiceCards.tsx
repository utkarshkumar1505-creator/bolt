import React from 'react';
import { MessageCircle, UserCheck, TrendingUp, ArrowRight } from 'lucide-react';

const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Free 24/7 Chat",
      description: "Connect instantly with caring listeners for emotional support and guidance whenever you need it.",
      features: ["Instant connection", "Completely anonymous", "No appointment needed"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Professional Therapy",
      description: "Licensed therapists available for ongoing support with a low monthly fee and flexible scheduling.",
      features: ["Licensed professionals", "Affordable pricing", "Flexible scheduling"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Grow at Your Own Pace",
      description: "Self-help guides, interactive exercises, and personalized growth paths for continuous improvement.",
      features: ["Self-paced learning", "Interactive tools", "Progress tracking"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to Wellness
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to get support that fits your needs, schedule, and comfort level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`h-8 w-8 ${service.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3`}>
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-all duration-200" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;