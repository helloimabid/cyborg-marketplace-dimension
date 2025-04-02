
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextPathProps {
  text: string;
  className?: string;
  pathId?: string;
  duration?: number;
}

const AnimatedTextPath = ({
  text,
  className,
  pathId = 'cyberPath',
  duration = 15
}: AnimatedTextPathProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    observer.observe(svgRef.current);
    
    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);
  
  return (
    <svg 
      ref={svgRef} 
      className={cn('w-full h-auto', className)} 
      viewBox="0 0 800 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path 
          id={pathId} 
          d="M0,50 C200,10 350,90 800,50" 
          fill="none" 
        />
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1EAEDB" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>
      
      {/* Path outline for visualization */}
      <path 
        d={`M0,50 C200,10 350,90 800,50`} 
        stroke="#1EAEDB" 
        strokeOpacity="0.1" 
        strokeWidth="1" 
        fill="none" 
      />
      
      <text 
        className={cn(
          'text-2xl font-bold transition-opacity duration-1000',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        fill="url(#textGradient)"
      >
        <textPath 
          href={`#${pathId}`} 
          startOffset={isVisible ? "0%" : "100%"}
          style={{
            transition: isVisible ? `start-offset ${duration}s linear` : '',
          }}
        >
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default AnimatedTextPath;
