
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActivityProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  index: number;
};

const ActivityCard = ({ title, description, icon, color, image, index }: ActivityProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group transition-all duration-500 h-full reveal",
        "hover:shadow-2xl hover:-translate-y-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: `0 8px 20px -4px ${color}30`
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
          style={{
            background: `linear-gradient(to top, ${color}90, transparent)`
          }}
        ></div>
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div 
          className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center z-20 animate-pulse-soft`} 
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}90` 
          }}
        >
          {icon}
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold" style={{color}}>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="pt-2">
          <a 
            href="#contact" 
            className="inline-flex items-center text-sm font-medium group"
            style={{color}}
          >
            Learn more 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
