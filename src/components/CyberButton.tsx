import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = 'default', size = 'md', glowing = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative group inline-flex items-center justify-center overflow-hidden rounded-sm transition-all duration-300 uppercase tracking-wider font-medium text-sm',
          {
            // Variants
            'bg-neon-blue text-black hover:bg-neon-blue/90': variant === 'default',
            'border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10': variant === 'outline',
            'bg-transparent hover:bg-neon-blue/10 text-neon-blue': variant === 'ghost',
            
            // Sizes
            'py-1.5 px-3 text-xs': size === 'sm',
            'py-2.5 px-5': size === 'md',
            'py-3 px-7 text-base': size === 'lg',
            
            // Glowing effect
            'animate-pulse-neon': glowing,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-blue" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-blue" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue" />
        
        {/* Hover effect */}
        {variant !== 'default' && (
          <span className="absolute inset-0 w-0 transition-all duration-300 group-hover:w-full bg-neon-blue/10" />
        )}
      </button>
    );
  }
);

CyberButton.displayName = 'CyberButton';

export default CyberButton;
