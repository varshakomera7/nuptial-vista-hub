import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-golden" />
              <span className="text-2xl font-playfair font-bold text-golden">
                Eternal Bonds
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              India's most trusted marriage bureau, bringing hearts together for over 25 years. 
              Your journey to eternal happiness starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-6 text-golden">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-golden transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-golden transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-golden transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#success" className="text-white/80 hover:text-golden transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-golden transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-6 text-golden">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-golden transition-colors">
                  Personalized Matchmaking
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-golden transition-colors">
                  Profile Verification
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-golden transition-colors">
                  Relationship Counseling
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-golden transition-colors">
                  Event Management
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-golden transition-colors">
                  Premium Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-6 text-golden">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-golden mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p>123 Wedding Street, Love Lane</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden flex-shrink-0" />
                <span className="text-white/80">info@eternalbonds.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Eternal Bonds. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;