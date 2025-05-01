import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import GlitchText from "@/components/GlitchText";
import CyberButton from "@/components/CyberButton";
import { ArrowLeft, Search, Terminal, ShieldAlert, Cpu } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [counter, setCounter] = useState(5);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  
  // Terminal typing effect
  useEffect(() => {
    if (showTerminal) {
      const fullText = `> SYSTEM ERROR 404\n> SEARCHING FOR NEURAL PATH...\n> LOCATION: ${location.pathname}\n> STATUS: DISCONNECTED\n> ATTEMPTING RECONNECT...\n> INITIATING EMERGENCY PROTOCOL...\n> REDIRECTING TO SAFE ZONE...`;
      let index = 0;
      
      const typingInterval = setInterval(() => {
        setTerminalText(fullText.substring(0, index));
        index++;
        
        if (index > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 50);
      
      return () => clearInterval(typingInterval);
    }
  }, [showTerminal, location.pathname]);

  // Auto redirect countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Show terminal after a delay
    const terminalTimer = setTimeout(() => {
      setShowTerminal(true);
    }, 800);

    // Log error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    return () => {
      clearInterval(interval);
      clearTimeout(terminalTimer);
    };
  }, [location.pathname]);

  // Redirect when counter hits 0
  useEffect(() => {
    if (counter === 0) {
      window.location.href = '/';
    }
  }, [counter]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-black/95 relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 animate-pulse-slow -z-10" />
      <div className="absolute inset-0 circuit-bg opacity-10 -z-10" />
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none"></div>
      
      {/* Glitch effect lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-neon-blue shadow-glow-blue opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue shadow-glow-blue opacity-70" />
      <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-neon-purple shadow-glow-purple opacity-70" />
      <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-neon-purple shadow-glow-purple opacity-70" />
      
      {/* Floating circuit elements */}
      <div className="absolute top-1/4 left-1/5 text-neon-blue/30 animate-float-slow">
        <Cpu size={40} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-neon-purple/30 animate-float-slow-reverse">
        <Cpu size={30} />
      </div>
      
      {/* Main content */}
      <div className="text-center max-w-xl z-10 neo-glass p-8 border border-neon-blue/30 shadow-glow-blue">
        <div className="text-neon-red animate-pulse-neon mb-6 flex justify-center items-center gap-4">
          <ShieldAlert size={50} className="animate-pulse" />
          <Search size={64} className="text-neon-blue" />
        </div>
        
        <div className="mb-10">
          <h1 className="text-8xl font-bold mb-4 text-gradient cyberpunk-font tracking-wider">
            <GlitchText text="404" glitchFrequency={0.8} />
          </h1>
          <p className="text-2xl text-neon-blue mb-4 font-bold">
            <GlitchText text="NEURAL LINK DISCONNECTED" glitchFrequency={0.4} />
          </p>
          <p className="text-white/70 mb-6">
            The cybernetic enhancement you are looking for has been decommissioned 
            or does not exist in this reality plane.
          </p>
          
          {/* Animated terminals */}
          <div className="p-4 bg-black/80 border border-neon-blue/40 rounded-sm mb-8 text-neon-green font-mono text-sm overflow-hidden relative">
            {showTerminal ? (
              <pre className="text-left whitespace-pre-wrap">{terminalText}</pre>
            ) : (
              <div className="flex items-center gap-2">
                <Terminal size={16} className="animate-pulse" />
                <p>Initializing diagnostics...</p>
              </div>
            )}
            
            {/* Blinking cursor */}
            <span className="inline-block w-2 h-4 bg-neon-green/70 ml-1 animate-blink absolute bottom-4 right-4"></span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 items-center">
          <Link to="/" className="w-full max-w-xs">
            <CyberButton className="w-full">
              <ArrowLeft size={16} className="mr-2" />
              Return to Main System {counter > 0 && `(${counter})`}
            </CyberButton>
          </Link>
          
          <div className="text-neon-blue/50 text-xs mt-4 font-mono">
            SYSTEM TIMESTAMP: {new Date().toISOString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
