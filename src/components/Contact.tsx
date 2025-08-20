import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: [
        "123 Wedding Street, Love Lane",
        "Mumbai, Maharashtra 400001",
        "India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "info@eternalbonds.com",
        "support@eternalbonds.com",
        "matches@eternalbonds.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: By Appointment"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to find your perfect life partner? 
            Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0 shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-2" />
                  Start Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="age" className="text-foreground">Age</Label>
                  <Input 
                    id="age" 
                    type="number"
                    placeholder="Enter your age"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Tell us about your preferences</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your preferences, expectations, and any specific requirements..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full gradient-hero text-white shadow-romantic"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="bg-white/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-romantic transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action Card */}
            <Card className="gradient-hero border-0 shadow-romantic animate-scale-in">
              <CardContent className="p-6 text-center text-white">
                <Heart className="h-12 w-12 mx-auto mb-4 text-golden" />
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Ready to Find Love?
                </h3>
                <p className="text-white/90 mb-4">
                  Join thousands of happy couples who found their perfect match with us.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white text-primary hover:bg-cream border-white"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;