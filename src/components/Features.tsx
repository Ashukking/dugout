
import { Check, Clock, Users, Star, Coffee, Smile } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Extended Hours",
      description: "Open late to accommodate your schedule, with special night-time events and lighting.",
      color: "#8B5CF6" // Vivid Purple
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Group Bookings",
      description: "Special packages for parties, corporate events and team building activities.",
      color: "#F97316" // Bright Orange
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Professional Facilities",
      description: "State-of-the-art equipment and professionally maintained playing surfaces.",
      color: "#0EA5E9" // Ocean Blue
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "Premium Food Court",
      description: "Enjoy delicious meals and refreshments from our varied food court options.",
      color: "#D946EF" // Magenta Pink
    },
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      title: "Membership Benefits",
      description: "Exclusive perks and discounts for our regular members and frequent visitors.",
      color: "#22C55E" // Bright Green
    },
    {
      icon: <Smile className="h-6 w-6 text-primary" />,
      title: "All Ages Welcome",
      description: "Activities and spaces designed for everyone from children to adults.",
      color: "#EF4444" // Bright Red
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-secondary/10 to-secondary/40 relative overflow-hidden">
      {/* Background gradient circles with animations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sport-pickleball/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sport-football/10 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Why Choose GameZone</h2>
          <p className="text-muted-foreground text-lg">
            We provide more than just games - we create experiences that bring people together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 group hover:shadow-xl transition-all hover:-translate-y-2 reveal"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                boxShadow: `0 8px 20px -4px ${feature.color}30` 
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors animate-pulse-soft" style={{animationDelay: `${index * 0.2}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: feature.color}}>{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
