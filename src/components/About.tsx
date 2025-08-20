import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Users, Award, Clock } from "lucide-react";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  const achievements = [
    {
      icon: <Heart className="h-6 w-6" />,
      number: "10,000+",
      label: "Successful Marriages"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "50,000+",
      label: "Happy Families"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "25+",
      label: "Years of Excellence"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      number: "24/7",
      label: "Support Available"
    }
  ];

  const values = [
    "Personalized approach to every client",
    "Complete privacy and confidentiality",
    "Verified and authentic profiles only",
    "Expert relationship counseling",
    "Cultural and traditional values",
    "Modern technology with human touch"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              About Eternal Bonds
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 25 years, Eternal Bonds has been India's most trusted name in matrimonial 
              services. We understand that finding the right life partner is one of life's most 
              important decisions, and we're here to guide you every step of the way.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our unique approach combines traditional values with modern technology, ensuring 
              that you find not just a match, but a soulmate who shares your dreams, values, and vision for the future.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="gradient-hero text-white shadow-romantic"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Professional consultation at Eternal Bonds"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-soft p-6 animate-scale-in">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary mb-4">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;