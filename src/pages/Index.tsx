
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ActivityCard from '@/components/ActivityCard';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { 
  Trophy, 
  Dumbbell, 
  Activity, 
  Music, 
  Utensils, 
  Waves
} from 'lucide-react';

const Index = () => {
  const activities = [
    {
      title: "Cricket Arena",
      description: "Professional indoor cricket pitches with automated bowling machines and scoring systems.",
      icon: <Trophy className="h-5 w-5 text-white" />,
      color: "#8B5CF6", // Vivid Purple
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pickle Ball Courts",
      description: "Multiple courts with professional equipment and coaching available for all skill levels.",
      icon: <Activity className="h-5 w-5 text-white" />,
      color: "#F97316", // Bright Orange
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Football Field",
      description: "Indoor 5-a-side football pitches with artificial turf and professional lighting.",
      icon: <Dumbbell className="h-5 w-5 text-white" />,
      color: "#0EA5E9", // Ocean Blue
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Trampoline Zone",
      description: "Interconnected trampolines for freestyle jumping, dodgeball, and fitness classes.",
      icon: <Activity className="h-5 w-5 text-white" />,
      color: "#D946EF", // Magenta Pink
      image: "https://images.unsplash.com/photo-1595435934819-5842b2a76fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dance Floor",
      description: "State-of-the-art sound system and lighting for dance events and classes.",
      icon: <Music className="h-5 w-5 text-white" />,
      color: "#22C55E", // Bright Green
      image: "https://images.unsplash.com/photo-1545128485-c400ce7b45d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Court",
      description: "Various food options from quick snacks to full meals, with healthy choices available.",
      icon: <Utensils className="h-5 w-5 text-white" />,
      color: "#EF4444", // Bright Red
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Steam Room",
      description: "Luxury steam rooms for relaxation and recovery after your activities.",
      icon: <Waves className="h-5 w-5 text-white" />,
      color: "#06B6D4", // Cyan Blue
      image: "https://images.unsplash.com/photo-1525094998993-83c9302bd5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initially check on load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Activities Section */}
      <section id="activities" className="section-padding relative overflow-hidden">
        {/* Enhanced background gradient circles with animation */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sport-pickleball/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sport-trampoline/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 text-primary text-sm font-medium mb-4">
              <span>Endless Possibilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Explore Our Activities</h2>
            <p className="text-muted-foreground text-lg">
              Whatever your interests, we've got something that will excite and challenge you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard 
                key={index}
                title={activity.title}
                description={activity.description}
                icon={activity.icon}
                color={activity.color}
                image={activity.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Gallery Section with enhanced animations */}
      <section id="gallery" className="section-padding relative overflow-hidden">
        <div className="absolute -top-20 left-40 w-96 h-96 bg-sport-dance/30 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-20 right-40 w-96 h-96 bg-sport-food/30 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-accent/40 to-primary/40 text-accent text-sm font-medium mb-4">
              <span>Capture The Excitement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Gallery</h2>
            <p className="text-muted-foreground text-lg">
              Take a visual tour of our facilities and see the excitement firsthand
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg aspect-square hover-scale reveal"
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: `0 10px 15px -3px ${activity.color}20`
                }}
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium">{activity.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
