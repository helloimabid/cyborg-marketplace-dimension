import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Search, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';
import CyberButton from './CyberButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled 
        ? theme === 'dark' 
          ? "backdrop-blur-md bg-black/60 shadow-lg shadow-neon-blue/10" 
          : "backdrop-blur-md bg-white/90 shadow-md"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className={cn(
            "text-2xl font-bold relative",
            theme === 'dark' ? "text-white" : "text-gray-800"
          )}>
            <span className="text-neon-blue">CYBER</span>TECH
            <span className="absolute -top-1 -right-4 text-xs text-neon-purple">2100</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={cn(
              "transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>Home</Link>
            <Link to="/products" className={cn(
              "transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue" 
            )}>Products</Link>
            <Link to="/about" className={cn(
              "transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>About</Link>
            <Link to="/contact" className={cn(
              "transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search enhancements..."
                className={cn(
                  "py-2 pl-3 pr-10 rounded-sm focus:outline-none focus:border-neon-blue w-48",
                  theme === 'dark' 
                    ? "bg-white/5 border border-white/10 text-white/80 neo-glass" 
                    : "bg-white border border-gray-300 text-gray-800 shadow-sm"
                )}
              />
              <button type="submit" className={cn(
                "absolute right-3 top-2.5 transition-colors",
                theme === 'dark' ? "text-white/60 hover:text-neon-blue" : "text-gray-600 hover:text-neon-blue"
              )}>
                <Search size={16} />
              </button>
            </form>
            
            <button 
              onClick={() => {}}
              className={cn(
                "p-2 transition-colors",
                theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link to="/checkout" className={cn(
              "p-2 transition-colors relative",
              theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
            )}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-neon-blue text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <Link to="/profile">
                <CyberButton size="sm" className="flex items-center gap-2">
                  <User size={16} />
                  <span>Profile</span>
                </CyberButton>
              </Link>
            ) : (
              <Link to="/auth">
                <CyberButton size="sm" className="flex items-center gap-2">
                  <User size={16} />
                  <span>Sign In</span>
                </CyberButton>
              </Link>
            )}
          </div>
          
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/checkout" className={cn(
              "p-2 transition-colors relative",
              theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
            )}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-neon-blue text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'dark' ? "text-white p-2" : "text-gray-800 p-2"}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden absolute w-full transition-all duration-300 ${
        theme === 'dark' 
          ? "bg-black/95 backdrop-blur-md border-t border-white/10" 
          : "bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
        } ${isOpen ? 'max-h-screen py-6' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 space-y-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={cn(
              "py-2 transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>Home</Link>
            <Link to="/products" className={cn(
              "py-2 transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>Products</Link>
            <Link to="/about" className={cn(
              "py-2 transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>About</Link>
            <Link to="/contact" className={cn(
              "py-2 transition-colors",
              theme === 'dark' ? "text-white/70 hover:text-white" : "text-gray-800 hover:text-neon-blue"
            )}>Contact</Link>
          </nav>
          
          <div className="space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search enhancements..."
                className={cn(
                  "w-full py-2 pl-3 pr-10 rounded-sm focus:outline-none focus:border-neon-blue",
                  theme === 'dark'
                    ? "bg-white/5 border border-white/10 text-white/80 neo-glass"
                    : "bg-white border border-gray-300 text-gray-800 shadow-sm"
                )}
              />
              <button type="submit" className={cn(
                "absolute right-3 top-2.5 transition-colors",
                theme === 'dark' ? "text-white/60 hover:text-neon-blue" : "text-gray-600 hover:text-neon-blue"
              )}>
                <Search size={16} />
              </button>
            </form>
            
            <div className="flex justify-between">
              <button 
                onClick={() => {}}
                className={cn(
                  "p-2 flex items-center gap-2 transition-colors",
                  theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
                )}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              {isAuthenticated ? (
                <Link to="/profile" className={cn(
                  "p-2 flex items-center gap-2 transition-colors",
                  theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
                )}>
                  <User size={20} />
                  <span>Profile</span>
                </Link>
              ) : (
                <Link to="/auth" className={cn(
                  "p-2 flex items-center gap-2 transition-colors",
                  theme === 'dark' ? "text-white/70 hover:text-neon-blue" : "text-gray-800 hover:text-neon-blue"
                )}>
                  <User size={20} />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
