
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20 overflow-hidden relative">
      {/* Background gradient circles with animation */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sport-cricket/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sport-dance/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium shimmer">
              <span className="animate-pulse-soft">Now Open</span>
              <span className="mx-2">•</span>
              <span>Book your adventure today</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Unlimited Fun at <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">GameZone</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Experience the ultimate entertainment destination with a variety of sports, games, and activities for all ages. From cricket to dance floors, there's something for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <a href="#activities" className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
                Explore Activities
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/80 text-foreground font-medium px-6 py-3 rounded-lg transition-all hover:-translate-y-1">
                Book Now
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl glass-card animate-float">
              {/* Main Image with colorful overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-sport-cricket/20 to-sport-dance/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Game Center Activities" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Activity Cards with enhanced animations */}
            <div className="absolute -top-4 -left-4 glass-card p-2 rounded-lg shadow-lg animate-float gradient-border" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 text-sport-pickleball">
                <div className="w-8 h-8 rounded-full bg-sport-pickleball flex items-center justify-center animate-pulse-soft">
                  <span className="text-white font-bold text-xs">🏏</span>
                </div>
                <span className="font-medium text-sm">Cricket</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/4 glass-card p-2 rounded-lg shadow-lg animate-float gradient-border" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sport-trampoline flex items-center justify-center animate-pulse-soft">
                  <span className="text-white font-bold text-xs">🏃</span>
                </div>
                <span className="font-medium text-sm">Trampoline</span>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/3 glass-card p-2 rounded-lg shadow-lg animate-float gradient-border" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sport-dance flex items-center justify-center animate-pulse-soft">
                  <span className="text-white font-bold text-xs">💃</span>
                </div>
                <span className="font-medium text-sm">Dance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
