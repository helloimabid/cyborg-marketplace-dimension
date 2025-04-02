
"use client"

import { useState, useEffect, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  glitchFrequency?: number;
  glitchDuration?: number;
}

const GlitchText = ({
  text,
  className,
  style,
  glitchFrequency = 0.3,
  glitchDuration = 2000
}: GlitchTextProps) => {
  const [glitching, setGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    // Check for system preference or stored preference
    const glitchInterval = setInterval(() => {
      // Randomly decide if we should glitch based on frequency
      if (Math.random() < glitchFrequency) {
        setGlitching(true);
        
        // Create glitched text by replacing random characters
        const glitchText = text.split("").map((char) => {
          if (Math.random() < 0.3 && char !== " ") {
            const glitchChars = "!@#$%^&*()_-+=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join("");
        
        setDisplayText(glitchText);
        
        // Reset after a short time
        setTimeout(() => {
          setDisplayText(text);
          setGlitching(false);
        }, 100);
      }
    }, glitchDuration);
    
    return () => clearInterval(glitchInterval);
  }, [text, glitchFrequency, glitchDuration]);
  
  // Simplified style object for dark theme only
  const textShadow = glitching 
    ? "0 0 5px #D946EF, 2px 2px 0 #1EAEDB, -2px -2px 0 #0EA5E9"
    : undefined;
  
  return (
    <span 
      className={cn(
        "inline-block relative",
        glitching && "animate-glitch",
        glitching && "text-purple-400",
        className
      )}
      style={{
        textShadow: textShadow,
        ...style
      }}
    >
      {displayText}
      {glitching && (
        <span className="absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-[1px] bg-blue-400 opacity-50"></span>
          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-400 opacity-50"></span>
        </span>
      )}
    </span>
  );
};

export default GlitchText;
