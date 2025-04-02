
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import GlitchText from './GlitchText';
import { cn } from '@/lib/utils';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing neural interface');
  
  useEffect(() => {
    const texts = [
      'Initializing neural interface',
      'Establishing secure connection',
      'Calibrating augmented reality',
      'Loading cybernetic enhancements',
      'Rendering holographic interface',
      'System ready'
    ];
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 200);
    
    // Change loading text at different stages
    const textInterval = setInterval(() => {
      const textIndex = Math.floor((progress / 100) * (texts.length - 1));
      setLoadingText(texts[textIndex]);
      
      if (progress >= 100) {
        clearInterval(textInterval);
        setLoadingText(texts[texts.length - 1]);
      }
    }, 800);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-bg opacity-20" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse-slow" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanline" />
      
      {/* Loading content */}
      <div className="relative z-10 text-center max-w-md w-full px-4">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            <span className="text-neon-blue">CYBER</span>
            <span className="text-white">TECH</span>
            <span className="text-xs text-neon-purple ml-1">2100</span>
          </h1>
          <p className="text-neon-blue/80 text-sm">PREMIUM ENHANCEMENT SYSTEMS</p>
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Loader size={48} className="animate-spin text-neon-blue" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-mono text-xs">
              {progress}%
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden neo-glass">
          <div 
            className="h-full bg-neon-blue transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse" />
          </div>
        </div>
        
        {/* Loading text with glitch effect */}
        <div className="h-6 mb-4">
          <GlitchText 
            text={loadingText} 
            className={cn(
              "text-sm font-mono text-white/80",
              progress === 100 && "text-neon-blue"
            )}
            glitchFrequency={0.5}
          />
        </div>
        
        {/* Binary data stream effect */}
        <div className="text-xs font-mono text-white/30 overflow-hidden h-8">
          {Array.from({ length: 40 }).map((_, i) => (
            <span 
              key={i} 
              className="inline-block animate-fade-in"
              style={{ 
                animationDelay: `${i * 50}ms`,
                opacity: Math.random() > 0.5 ? 0.8 : 0.4
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corners decoration */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-neon-blue/50" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-neon-blue/50" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-neon-blue/50" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-neon-blue/50" />
    </div>
  );
};

export default LoadingPage;
