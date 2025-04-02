
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import GlitchText from "@/components/GlitchText";
import CyberButton from "@/components/CyberButton";
import { ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 neo-glass relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 -z-10" />
      <div className="absolute inset-0 circuit-bg opacity-10 -z-10" />
      
      {/* Glitch effect lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-neon-blue opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-blue opacity-30" />
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-neon-purple opacity-30" />
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-neon-purple opacity-30" />
      
      <div className="text-center max-w-lg">
        <div className="text-neon-blue animate-pulse-neon mb-6">
          <Search size={64} className="mx-auto" />
        </div>
        
        <div className="mb-10">
          <h1 className="text-7xl font-bold mb-4 text-gradient">
            <GlitchText text="404" glitchFrequency={0.6} />
          </h1>
          <p className="text-2xl text-white/80 mb-4">
            <GlitchText text="System breach detected" />
          </p>
          <p className="text-white/60 mb-6">
            The cybernetic enhancement you are looking for has been decommissioned 
            or does not exist in this reality.
          </p>
          
          <div className="p-4 bg-white/5 border border-neon-blue/20 rounded-sm mb-8 text-white/70 font-mono text-sm">
            <p>ERROR://CONNECTION_LOST</p>
            <p>LOCATION: {location.pathname}</p>
            <p>TIMESTAMP: {new Date().toISOString()}</p>
          </div>
        </div>
        
        <Link to="/">
          <CyberButton>
            <ArrowLeft size={16} className="mr-2" />
            Return to Main System
          </CyberButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
