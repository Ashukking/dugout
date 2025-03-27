
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">GC</span>
              </div>
              <span className="font-bold text-xl md:text-2xl text-white">GameZone</span>
            </div>
            
            <p className="text-white/70">
              The ultimate entertainment destination with a variety of sports, games, and activities for all ages.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#activities" className="text-white/70 hover:text-white transition-colors">Activities</a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Book Now</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70">123 Game Street, Fun City, FC 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70">info@gamezone.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Monday - Thursday</p>
                  <p className="text-white/70">10:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Friday - Saturday</p>
                  <p className="text-white/70">10:00 AM - 1:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Sunday</p>
                  <p className="text-white/70">11:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} GameZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
