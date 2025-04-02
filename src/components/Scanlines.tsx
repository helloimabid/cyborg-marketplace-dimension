
import { useEffect, useState } from 'react';

const Scanlines = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  
  // Occasionally trigger a glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance of glitch
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200 + Math.random() * 300);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <>
      {/* Standard scanline effect */}
      <div 
        className="scanline" 
        aria-hidden="true"
      />
      
      {/* Occasional glitch effect */}
      {glitchActive && (
        <div 
          className="fixed inset-0 pointer-events-none z-[2147483647] mix-blend-overlay" 
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(30, 174, 219, 0.2) 50%, transparent 50%, rgba(217, 70, 239, 0.2) 100%)',
            backgroundSize: '100% 4px',
            animation: 'scanline-glitch 0.15s linear infinite',
          }}
        />
      )}
      
      <style>
        {`
        @keyframes scanline-glitch {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(20px);
            opacity: 0.5;
          }
        }
        `}
      </style>
    </>
  );
};

export default Scanlines;
