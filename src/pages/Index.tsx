
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ActivityCard from '@/components/ActivityCard';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { 
  Cricket, 
  Football, 
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
      icon: <Cricket className="h-5 w-5 text-white" />,
      color: "#4CAF50",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pickle Ball Courts",
      description: "Multiple courts with professional equipment and coaching available for all skill levels.",
      icon: <Activity className="h-5 w-5 text-white" />,
      color: "#FFC107",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Football Field",
      description: "Indoor 5-a-side football pitches with artificial turf and professional lighting.",
      icon: <Football className="h-5 w-5 text-white" />,
      color: "#2196F3",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Trampoline Zone",
      description: "Interconnected trampolines for freestyle jumping, dodgeball, and fitness classes.",
      icon: <Activity className="h-5 w-5 text-white" />,
      color: "#E91E63",
      image: "https://images.unsplash.com/photo-1595435934819-5842b2a76fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dance Floor",
      description: "State-of-the-art sound system and lighting for dance events and classes.",
      icon: <Music className="h-5 w-5 text-white" />,
      color: "#9C27B0",
      image: "https://images.unsplash.com/photo-1545128485-c400ce7b45d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Court",
      description: "Various food options from quick snacks to full meals, with healthy choices available.",
      icon: <Utensils className="h-5 w-5 text-white" />,
      color: "#FF5722",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Steam Room",
      description: "Luxury steam rooms for relaxation and recovery after your activities.",
      icon: <Waves className="h-5 w-5 text-white" />,
      color: "#00BCD4",
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
        {/* Background gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sport-pickleball/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sport-trampoline/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span>Endless Possibilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Explore Our Activities</h2>
            <p className="text-muted-foreground text-lg">
              Whatever your interests, we've got something that will excite and challenge you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
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
      
      {/* Gallery Section */}
      <section id="gallery" className="section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span>Capture The Excitement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Gallery</h2>
            <p className="text-muted-foreground text-lg">
              Take a visual tour of our facilities and see the excitement firsthand
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg aspect-square hover-scale"
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
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
