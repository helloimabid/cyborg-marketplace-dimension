
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = 'default', size = 'md', glowing = false, children, ...props }, ref) => {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';
    
    return (
      <button
        className={cn(
          'relative group inline-flex items-center justify-center overflow-hidden rounded-sm transition-all duration-300 uppercase tracking-wider font-medium text-sm',
          {
            // Variants - Dark mode
            'bg-neon-blue text-black hover:bg-neon-blue/90': variant === 'default' && !isLightMode,
            'border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10': variant === 'outline' && !isLightMode,
            'bg-transparent hover:bg-neon-blue/10 text-neon-blue': variant === 'ghost' && !isLightMode,
            
            // Variants - Light mode
            'bg-neon-blue text-white hover:bg-neon-blue/90 shadow-md': variant === 'default' && isLightMode,
            'border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/5': variant === 'outline' && isLightMode,
            'bg-transparent hover:bg-neon-blue/5 text-neon-blue': variant === 'ghost' && isLightMode,
            
            // Sizes
            'py-1.5 px-3 text-xs': size === 'sm',
            'py-2.5 px-5': size === 'md',
            'py-3 px-7 text-base': size === 'lg',
            
            // Glowing effect
            'animate-pulse-neon': glowing && !isLightMode,
            'shadow-lg': glowing && isLightMode,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        
        {/* Corner accents */}
        <span className={cn(
          "absolute top-0 left-0 w-2 h-2 border-t border-l",
          isLightMode ? "border-neon-blue/70" : "border-neon-blue"
        )} />
        <span className={cn(
          "absolute top-0 right-0 w-2 h-2 border-t border-r",
          isLightMode ? "border-neon-blue/70" : "border-neon-blue"
        )} />
        <span className={cn(
          "absolute bottom-0 left-0 w-2 h-2 border-b border-l",
          isLightMode ? "border-neon-blue/70" : "border-neon-blue"
        )} />
        <span className={cn(
          "absolute bottom-0 right-0 w-2 h-2 border-b border-r",
          isLightMode ? "border-neon-blue/70" : "border-neon-blue"
        )} />
        
        {/* Hover effect */}
        {variant !== 'default' && (
          <span className={cn(
            "absolute inset-0 w-0 transition-all duration-300 group-hover:w-full",
            isLightMode ? "bg-neon-blue/5" : "bg-neon-blue/10"
          )} />
        )}
      </button>
    );
  }
);

CyberButton.displayName = 'CyberButton';

export default CyberButton;
