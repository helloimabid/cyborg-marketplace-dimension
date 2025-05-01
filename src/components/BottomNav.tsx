import { Home, Search, MessageSquare, Info, ShoppingCart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
  
  return (
    <nav className="cyber-nav-bottom">
      <Link to="/" className={`cyber-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home />
        <span className="cyber-nav-label">Home</span>
      </Link>
      
      <Link to="/products" className={`cyber-nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
        <Search />
        <span className="cyber-nav-label">Products</span>
      </Link>
      
      <Link to="/about" className={`cyber-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
        <Info />
        <span className="cyber-nav-label">About</span>
      </Link>
      
      <Link to="/contact" className={`cyber-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
        <MessageSquare />
        <span className="cyber-nav-label">Contact</span>
      </Link>
      
      <Link to="/checkout" className={`cyber-nav-item ${location.pathname === '/checkout' ? 'active' : ''}`}>
        <ShoppingCart />
        <span className="cyber-nav-label">Cart</span>
      </Link>
      
      {isAuthenticated ? (
        <Link to="/profile" className={`cyber-nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
          <User />
          <span className="cyber-nav-label">Profile</span>
        </Link>
      ) : (
        <Link to="/auth" className={`cyber-nav-item ${location.pathname === '/auth' ? 'active' : ''}`}>
          <User />
          <span className="cyber-nav-label">Sign In</span>
        </Link>
      )}
    </nav>
  );
};

export default BottomNav;
