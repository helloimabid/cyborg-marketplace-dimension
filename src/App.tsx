
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import ProductView from '@/pages/ProductView';
import ProductConfigure from '@/pages/ProductConfigure';
import Checkout from '@/pages/Checkout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import About from '@/pages/About';
import Profile from '@/pages/Profile';
import Contact from '@/pages/Contact';
import SearchResults from '@/pages/SearchResults';
import Auth from '@/pages/Auth';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Cookies from '@/pages/Cookies';
import Licensing from '@/pages/Licensing';
import NeuralInterface from '@/pages/NeuralInterface';
import Security from '@/pages/Security';
import LoadingPage from '@/components/LoadingPage';
import { AnimatePresence, motion } from "framer-motion";

// Protected route component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return element;
};

// Main application component
const AppContent = () => {
  const { isLoading } = useTheme();

  // Prevent scrolling when loading page is shown
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Toaster position="bottom-center" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:category" element={<Products />} />
              <Route path="/product/:productId" element={<ProductView />} />
              <Route path="/product-configure/:productId" element={<ProductConfigure />} />
              <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/auth" element={<Auth />} />
              {/* Legal Pages */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/licensing" element={<Licensing />} />
              {/* Additional Pages */}
              <Route path="/neural-interface" element={<NeuralInterface />} />
              <Route path="/security" element={<Security />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </Router>
    </CartProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
