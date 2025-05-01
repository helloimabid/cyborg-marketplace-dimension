import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronRight, Brain, Eye, Heart, Hand } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';
import ProductCard from '@/components/ProductCard';
import PageTransition from '@/components/PageTransition';
import { toast } from 'sonner';

const featuredProducts = [
  {
    id: '1',
    name: 'NeuroCortex X9',
    category: 'Neural Interface',
    price: 25999,
    imageSrc: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop',
    description: 'Advanced brain-computer interface with 10TB neural storage capacity and quantum encryption.',
  },
  {
    id: '2',
    name: 'OcuFlex Titanium',
    category: 'Optical Enhancement',
    price: 18500,
    imageSrc: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop',
    description: 'Ultra-HD retinal implants with 50x optical zoom and infrared night vision capabilities.',
  },
  {
    id: '3',
    name: 'CardioSync Pro',
    category: 'Cardiovascular',
    price: 32750,
    imageSrc: 'https://emag.medicalexpo.com/wp-content/uploads/sites/9/robotic-heart.jpg',
    description: 'Artificial heart with nanobots for continuous maintenance and 150 year operational lifespan.',
  },
  {
    id: '4',
    name: 'ExoHand Genesis',
    category: 'Limb Enhancement',
    price: 14999,
    imageSrc: 'https://cdn.thingiverse.com/assets/81/17/d0/27/6c/large_display_Mano_9.png',
    description: 'Carbon fiber prosthetic with haptic feedback and 500kg grip strength.',
  },
];

const categories = [
  { name: 'Neural Implants', icon: <Brain className="h-6 w-6" />, count: 24 },
  { name: 'Optical Systems', icon: <Eye className="h-6 w-6" />, count: 18 },
  { name: 'Cardiovascular', icon: <Heart className="h-6 w-6" />, count: 15 },
  { name: 'Limb Replacements', icon: <Hand className="h-6 w-6" />, count: 22 },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleGetEnhanced = () => {
    const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
    if (isAuthenticated) {
      navigate('/products');
    } else {
      navigate('/auth');
      toast.info("Please sign in to get enhanced");
    }
  };

  const handleExploreProducts = () => {
    navigate('/products');
  };

  const handleBeginEvolution = () => {
    const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
    if (isAuthenticated) {
      navigate('/product-configure/1');
      toast.success("Ready to begin your evolution");
    } else {
      navigate('/auth');
      toast.info("Sign in to begin your evolution");
    }
  };
  
  return (
    <PageTransition>
      <main className="overflow-hidden">
        <section 
          ref={heroRef}
          className="h-screen relative flex items-center justify-center overflow-hidden"
          style={{ 
            perspective: '1000px',
            perspectiveOrigin: `${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%`
          }}
        >
          
          <div 
            className="absolute inset-0 bg-neon-gradient animate-gradient-shift opacity-10"
            style={{ backgroundSize: '200% 200%' }}
          />
          
          <div className="absolute inset-0 circuit-bg opacity-20" />
          
          <div 
            className="absolute inset-0 bg-cyber-grid opacity-30"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
                <span 
                  className="block text-gradient"
                  style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
                >
                  TRANSCEND
                </span>
                <GlitchText 
                  text="HUMAN LIMITATIONS" 
                  className="block mt-2"
                  style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
                />
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-white/70 mb-8"
                style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
              >
                Premium cyborg enhancements for the elite, designed in the year 2100.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CyberButton 
                  size="lg" 
                  glowing 
                  className="sm:min-w-[180px]"
                  onClick={handleGetEnhanced}
                >
                  Get Enhanced
                </CyberButton>
                <CyberButton 
                  size="lg" 
                  variant="outline" 
                  className="sm:min-w-[180px]"
                  onClick={handleExploreProducts}
                >
                  <span>Explore Products</span>
                  <ArrowRight size={16} className="ml-2" />
                </CyberButton>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-neon-blue h-8 w-8" />
          </div>
        </section>
        
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <GlitchText text="ENHANCEMENT CATEGORIES" />
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Browse our selection of cutting-edge cyborg augmentations, 
                designed to push the boundaries of human capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={category.name}
                  className="neo-glass rounded-lg p-6 border border-white/5 group hover:border-neon-blue/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-md flex items-center justify-center bg-neon-blue/10 text-neon-blue mb-4 group-hover:animate-pulse-neon">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-white group-hover:text-neon-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {category.count} products
                  </p>
                  <Link 
                    to="/products" 
                    className="inline-flex items-center text-neon-blue text-sm font-medium"
                  >
                    <span>Browse collection</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-neon-blue/60" />
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-neon-blue/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 bg-cyber-grid opacity-30 -z-10"
            style={{ transform: `translateY(${(scrollY - 1000) * 0.05}px)` }}
          />
          
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Featured Enhancements
                </h2>
                <p className="text-white/60 max-w-xl">
                  Our most advanced and popular cybernetic augmentations.
                </p>
              </div>
              <Link to="/products">
                <CyberButton variant="outline" className="mt-4 md:mt-0">
                  View All Products
                </CyberButton>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-neon-gradient animate-gradient-shift opacity-10 -z-10" />
          
          <div 
            className="absolute inset-0 bg-circuit-pattern opacity-20 -z-10"
            style={{ transform: `translateY(${(scrollY - 2000) * 0.08}px) scale(1.2)` }}
          />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
                <GlitchText text="READY TO EVOLVE?" />
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
                Take the first step towards a superior existence. Our neural consultants are ready to guide your enhancement journey.
              </p>
              
              <div className="flex justify-center">
                <CyberButton 
                  size="lg" 
                  glowing
                  onClick={handleBeginEvolution}
                >
                  Begin Your Evolution
                  <ChevronRight size={20} className="ml-2" />
                </CyberButton>
              </div>
              
              <div className="mt-16 max-w-md mx-auto py-6 relative neo-glass hud-border border-neon-blue/30">
                <p className="text-white/80 text-sm">
                  <GlitchText text="01110011 01110101 01110000 01100101 01110010 01101001 01101111 01110010" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
