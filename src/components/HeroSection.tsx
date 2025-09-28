import React from 'react';
import { Star, Award, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-100">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Awards Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium text-gray-700">Healthcare Innovation Award Winner</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">4.8 Campus Reviews</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Need someone to talk to?
            <span className="block text-teal-600">Our counselors and listeners are standing by.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with caring listeners and professional therapists for free emotional support. 
            Available 24/7 with complete confidentiality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-colors duration-200">
              Considering Therapy?
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Available Support</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border">
            <div className="text-3xl font-bold text-teal-600 mb-2">10k+</div>
            <div className="text-gray-600">Students Helped</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border">
            <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-600">Confidential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;