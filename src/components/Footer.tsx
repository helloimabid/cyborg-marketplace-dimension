
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import GlitchText from './GlitchText';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <footer className="mt-20 pt-16 pb-10 relative overflow-hidden">
      {/* Background pattern */}
      <div className={cn(
        "absolute inset-0 circuit-bg -z-10",
        isLightMode ? "opacity-5" : "opacity-10"
      )} />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-neon-blue text-glow">
              <span className="text-gradient">CYBERTECH</span>
            </Link>
            <p className={cn(
              "mt-4 text-sm",
              isLightMode ? "text-gray-700" : "text-white/60"
            )}>
              Pushing the boundaries of human evolution since 2075. Our cyborg enhancements redefine what it means to be human.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-neon-blue mb-5 font-medium uppercase tracking-wider text-sm">
              Navigate
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Support</FooterLink>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-neon-blue mb-5 font-medium uppercase tracking-wider text-sm">
              Legal
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/licensing">Licensing</FooterLink>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-neon-blue mb-5 font-medium uppercase tracking-wider text-sm">
              <GlitchText text="JOIN THE EVOLUTION" />
            </h3>
            <p className={cn(
              "text-sm mb-4",
              isLightMode ? "text-gray-700" : "text-white/60"
            )}>
              Subscribe to our newsletter for the latest enhancement updates.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className={cn(
                  "w-full py-3 px-4 rounded-sm focus:outline-none focus:border-neon-blue",
                  isLightMode 
                    ? "bg-white border border-gray-300 text-gray-800" 
                    : "bg-white/5 border border-neon-blue/30 text-white/80"
                )}
              />
              <button className="absolute right-2 top-2.5 text-neon-blue hover:text-neon-purple transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 pt-8 flex flex-col md:flex-row justify-between items-center",
          isLightMode ? "border-t border-gray-300" : "border-t border-white/10"
        )}>
          <p className={isLightMode ? "text-gray-700 text-sm mb-4 md:mb-0" : "text-white/40 text-sm mb-4 md:mb-0"}>
            © 2100 CYBERTECH. All rights reserved.
          </p>
          <div className={isLightMode ? "text-gray-700 text-sm flex space-x-6" : "text-white/40 text-sm flex space-x-6"}>
            <Link to="/neural-interface" className="hover:text-neon-blue transition-colors">
              Neural Interface
            </Link>
            <Link to="/security" className="hover:text-neon-blue transition-colors">
              Security
            </Link>
            <Link to="/contact" className="hover:text-neon-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  
  return (
    <li>
      <Link 
        to={href} 
        className={cn(
          "inline-block relative group transition-colors hover:text-neon-blue",
          isLightMode ? "text-gray-700" : "text-white/60"
        )}
      >
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  
  return (
    <a 
      href="#" 
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-neon-blue hover:border-neon-blue",
        isLightMode 
          ? "border border-gray-400 text-gray-700" 
          : "border border-white/20 text-white/60"
      )}
    >
      {icon}
    </a>
  );
};

export default Footer;
