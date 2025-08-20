import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6">
              Find Your
              <span className="block text-golden">Perfect Match</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              India's most trusted marriage bureau with over 25 years of experience 
              in bringing hearts together. Your journey to eternal happiness starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-cream shadow-elegant text-lg px-8 py-4"
              >
                Find Matches <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-golden" />
                </div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Happy Couples</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-golden" />
                </div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-90">Active Members</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-golden" />
                </div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,80 900,40 1200,120 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;