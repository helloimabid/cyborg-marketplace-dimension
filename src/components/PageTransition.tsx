import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className
}) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [initialMount, setInitialMount] = useState(true);

  // Effect for initial page load transition
  useEffect(() => {
    if (initialMount) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setInitialMount(false);
      }, 800); // Slightly longer transition for initial load
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setTimeout(() => {
        setDisplayLocation(location);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500); // Match this with the transition duration
      }, 300);
    }
  }, [location, displayLocation]);

  return (
    <div 
      className={cn(
        "page-transition-container relative", 
        isTransitioning ? "page-transitioning" : "",
        className
      )}
    >
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-black pointer-events-none">
          <div className="absolute inset-0 cyber-glitch-effect"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neon-blue text-2xl font-bold">
            <div className="glitch-text">LOADING</div>
          </div>
        </div>
      )}
      <div
        className={cn(
          "transition-all duration-500",
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
