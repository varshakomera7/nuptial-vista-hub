import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";
import weddingImage from "@/assets/wedding-success.jpg";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh",
      location: "Mumbai",
      story: "Eternal Bonds helped us find each other when we had almost given up hope. Their personalized approach and understanding of our values made all the difference. Today, we're happily married with a beautiful daughter.",
      rating: 5,
      married: "2 years ago"
    },
    {
      name: "Sneha & Vikram",
      location: "Delhi",
      story: "The team at Eternal Bonds was incredibly professional and supportive throughout our journey. They understood our requirements perfectly and introduced us to each other. We couldn't be happier!",
      rating: 5,
      married: "1 year ago"
    },
    {
      name: "Meera & Arjun",
      location: "Bangalore",
      story: "We were both busy professionals who had little time for traditional matchmaking. Eternal Bonds made the process so smooth and efficient. We found our perfect match and are now planning our future together.",
      rating: 5,
      married: "6 months ago"
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real couples who found their perfect match through Eternal Bonds. 
            Their happiness is our greatest achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={weddingImage} 
                alt="Happy couple at their wedding ceremony"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-soft animate-scale-in">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-romantic transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-golden fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.story}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location} • Married {testimonial.married}
                      </div>
                    </div>
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-2xl shadow-soft p-8 animate-scale-in">
            <div className="grid grid-cols-3 gap-8 divide-x divide-border">
              <div className="px-8">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="px-8">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Couples</div>
              </div>
              <div className="px-8">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;