import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Calendar, 
  UserCheck, 
  Shield, 
  MessageCircle,
  Star,
  Search
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Personalized Matchmaking",
      description: "Our expert matchmakers personally curate profiles based on your preferences, values, and lifestyle to find your ideal life partner.",
      features: ["Hand-picked profiles", "Compatibility analysis", "Personal consultation"]
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Profile Verification",
      description: "Every profile undergoes thorough verification to ensure authenticity and safety for all our members.",
      features: ["Background checks", "Document verification", "Photo authentication"]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Relationship Counseling",
      description: "Pre and post-marriage counseling services to ensure a strong foundation for your relationship.",
      features: ["Pre-marriage guidance", "Communication skills", "Conflict resolution"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Event Management",
      description: "Complete wedding planning and event management services to make your special day unforgettable.",
      features: ["Wedding planning", "Venue selection", "Catering coordination"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy Protection",
      description: "Your privacy is our priority. We ensure complete confidentiality throughout your matchmaking journey.",
      features: ["Secure platform", "Data protection", "Confidential meetings"]
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Services",
      description: "Exclusive premium packages with dedicated relationship managers and priority support.",
      features: ["Dedicated manager", "Priority matching", "Exclusive events"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive matchmaking services designed to help you find your perfect life partner 
            with confidence and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4 mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-playfair text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Heart className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="gradient-hero text-white shadow-romantic text-lg px-8 py-4"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;