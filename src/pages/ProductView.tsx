import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Zap, Heart, ShoppingCart, Share2, PlusCircle, MinusCircle, Check, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

// Simulated product data
const productData = {
  id: '1',
  name: 'NeuroCortex X9',
  category: 'Neural Interface',
  price: 25999,
  rating: 4.9,
  reviewCount: 186,
  stockStatus: 'In Stock',
  description: 'The NeuroCortex X9 is our flagship neural interface, designed for the elite who demand nothing but the best. With 10TB of neural storage capacity and quantum encryption, this enhancement will transform your cognitive capabilities beyond imagination.',
  features: [
    'Advanced brain-computer interface with 10TB neural storage capacity',
    'Quantum encryption ensures all your thoughts remain private',
    'Neural processing boost increases cognitive function by 300%',
    'Wireless thought-to-device communication with 0.0001ms latency',
    'Lifetime firmware updates and security patches',
    'Military-grade neural firewall protects against unauthorized access',
    'Compatible with all major neural ecosystems',
  ],
  images: [
    'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop',
  ],
  colors: [
    { name: 'Phantom Black', hex: '#000000' },
    { name: 'Neon Blue', hex: '#1EAEDB' },
    { name: 'Fusion Red', hex: '#FF1E5A' },
  ],
  compatibilityScore: 98,
  installationTime: '6-8 hours',
  warranty: '50 years limited warranty',
  technicalSpecs: {
    dimensions: '4.5cm x 3.2cm x 0.8cm',
    weight: '12.5g',
    connectivity: 'Neural Wireless 5.0, Quantum Entanglement Link',
    powerConsumption: '0.2 watts (idle), 1.8 watts (peak)',
    materials: 'Titanium alloy, Carbon nanotubes, Biofriendly polymer',
    certifications: 'ISO 99021, Neural Safety Standard 40.12, Military Security Grade A+'
  }
};

// Mock products for the catalog
export const productCatalog = [
  productData,
  {
    id: '2',
    name: 'OcuFlex Titanium',
    category: 'Optical Enhancement',
    price: 18500,
    rating: 4.7,
    reviewCount: 142,
    stockStatus: 'In Stock',
    description: 'Ultra-HD retinal implants with 50x optical zoom and infrared night vision capabilities.',
    features: [
      'Ultra-HD retinal implants with 8K resolution per eye',
      '50x optical zoom capability without visible movement',
      'Full infrared and ultraviolet spectrum vision modes',
      'Augmented reality overlay with neural interface compatibility',
      'Adaptive light sensitivity for extreme environments',
      'Photographic memory capture and playback',
    ],
    images: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1528&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop',
    ],
    colors: [
      { name: 'Titanium Silver', hex: '#C0C0C0' },
      { name: 'Sapphire Blue', hex: '#0F52BA' },
    ],
    compatibilityScore: 95,
    installationTime: '4-5 hours',
    warranty: '40 years limited warranty',
    technicalSpecs: {
      dimensions: '2.8cm diameter',
      weight: '4.2g each',
      connectivity: 'Neural Wireless 5.0, Direct Optic Nerve Interface',
      powerConsumption: '0.1 watts (idle), 0.8 watts (peak)',
      materials: 'Biocompatible titanium, Synthetic sapphire, Quantum dot array',
      certifications: 'ISO 99022, Optic Enhancement Standard 32.5'
    }
  },
  {
    id: '3',
    name: 'CardioSync Pro',
    category: 'Cardiovascular',
    price: 32750,
    rating: 4.8,
    reviewCount: 98,
    stockStatus: 'In Stock',
    description: 'Artificial heart with nanobots for continuous maintenance and 150 year operational lifespan.',
    features: [
      'Artificial heart with 150 year operational lifespan',
      'Integrated nanobots for continuous maintenance and repair',
      'Adaptive performance based on physical needs',
      'Remote medical monitoring and emergency protocols',
      'Compatible with all blood types and immune systems',
    ],
    images: [
      'https://images.unsplash.com/photo-1634326599007-a108c3f5805e?q=80&w=1528&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop',
    ],
    colors: [
      { name: 'Medical White', hex: '#F5F5F5' },
      { name: 'Crimson Flow', hex: '#DC143C' },
    ],
    compatibilityScore: 93,
    installationTime: '12 hours',
    warranty: '75 years limited warranty',
    technicalSpecs: {
      dimensions: '12cm x 10cm x 8cm',
      weight: '350g',
      connectivity: 'Neural Wireless 5.0, Emergency Medical Network',
      powerConsumption: '1.5 watts (idle), 4.2 watts (peak exertion)',
      materials: 'Lab-grown tissue, Carbon fiber reinforcement, Self-healing polymer',
      certifications: 'ISO 99024, Cardiovascular Enhancement Standard 10.3, Emergency Medical Protocol Certified'
    }
  },
  {
    id: '4',
    name: 'ExoHand Genesis',
    category: 'Limb Enhancement',
    price: 14999,
    rating: 4.5,
    reviewCount: 120,
    stockStatus: 'In Stock',
    description: 'Carbon fiber prosthetic with haptic feedback and 500kg grip strength.',
    features: [
      'Carbon fiber structure with titanium reinforcement',
      'Advanced haptic feedback for precise sensation',
      'Variable grip strength up to 500kg',
      'Microsecond response time to neural signals',
      'Integrated tool attachments and modular design',
      'Waterproof and EMP resistant',
    ],
    images: [
      'https://images.unsplash.com/photo-1624958723421-58ee9192bd54?q=80&w=1471&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop',
    ],
    colors: [
      { name: 'Tactical Black', hex: '#1A1A1A' },
      { name: 'Arctic Silver', hex: '#E8E8E8' },
      { name: 'Military Green', hex: '#4B5320' },
    ],
    compatibilityScore: 97,
    installationTime: '6-8 hours',
    warranty: '30 years limited warranty',
    technicalSpecs: {
      dimensions: 'Custom fitted to user',
      weight: '1.2kg',
      connectivity: 'Direct Neural Interface, Wireless 5.0 backup',
      powerConsumption: '0.3 watts (idle), 2.5 watts (peak exertion)',
      materials: 'Carbon fiber, Titanium alloy, Synthetic muscle fiber',
      certifications: 'ISO 99023, Limb Enhancement Standard 22.7, Military-Grade Durability'
    }
  }
];

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(productData);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // In a real app, fetch the product data based on productId
    console.log(`Fetching product with ID: ${productId}`);
    
    // For demo purposes, we'll find the product from our catalog
    const foundProduct = productCatalog.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(0);
      setSelectedColor(0);
      setQuantity(1);
    }
  }, [productId]);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    const selectedColorName = product.colors[selectedColor].name;
    addToCart({
      id: product.id,
      name: product.name,
      configuration: `${selectedColorName}, ${product.category}`,
      price: product.price,
      image: product.images[0],
    });
    
    // Show toast notification
    toast.success(`${product.name} added to cart`, {
      description: `${quantity} item${quantity > 1 ? 's' : ''} added`,
    });
  };
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center text-sm text-white/60">
          <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products" className="hover:text-neon-blue transition-colors">Products</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/products/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-neon-blue transition-colors">{product.category}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white/80">{product.name}</span>
        </div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4 neo-glass border border-neon-blue/20">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square rounded-md overflow-hidden",
                    selectedImage === index ? "ring-2 ring-neon-blue" : "opacity-70 hover:opacity-100 transition-opacity"
                  )}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-neon-purple mr-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index} 
                    size={18} 
                    className={cn(
                      index < Math.floor(product.rating) ? "fill-neon-purple" : "fill-none",
                      index === Math.floor(product.rating) && product.rating % 1 > 0 ? "fill-neon-purple/50" : ""
                    )} 
                  />
                ))}
                <span className="ml-1 text-white/80">{product.rating}</span>
              </div>
              
              <div className="text-white/60 text-sm">
                ({product.reviewCount} neural reviews)
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-neon-blue">
                ¤ {product.price.toLocaleString()}
              </div>
              <div className="text-white/60 text-sm mt-1">
                Includes neural installation & 50-year warranty
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              {product.description}
            </p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-white/90 font-medium mb-3">Neural Interface Color</h3>
              <div className="flex space-x-4">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={cn(
                      "group flex flex-col items-center"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full border-2 mb-2 transition-all duration-300",
                      selectedColor === index 
                        ? "border-neon-blue scale-110" 
                        : "border-white/20 hover:border-white/50"
                    )}
                    style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === index && (
                        <div className="flex items-center justify-center h-full">
                          <Check size={18} className="text-white" />
                        </div>
                      )}
                    </div>
                    <span className={cn(
                      "text-xs transition-colors",
                      selectedColor === index ? "text-neon-blue" : "text-white/60"
                    )}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Compatibility Score */}
            <div className="mb-6 p-4 neo-glass rounded-md border border-neon-blue/20">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-blue to-neon-purple text-white font-bold">
                  {product.compatibilityScore}%
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">Neural Compatibility Score</h3>
                  <p className="text-white/60 text-sm">
                    Based on your neural profile & existing enhancements
                  </p>
                </div>
              </div>
            </div>
            
            {/* Purchase Actions */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="flex items-center h-12 neo-glass border border-neon-blue/30 rounded-sm">
                <button 
                  onClick={decrementQuantity}
                  className="w-12 h-full flex items-center justify-center text-white/80 hover:text-neon-blue transition-colors"
                >
                  <MinusCircle size={20} />
                </button>
                <div className="w-12 h-full flex items-center justify-center text-white font-medium">
                  {quantity}
                </div>
                <button 
                  onClick={incrementQuantity}
                  className="w-12 h-full flex items-center justify-center text-white/80 hover:text-neon-blue transition-colors"
                >
                  <PlusCircle size={20} />
                </button>
              </div>
              
              <div className="flex-1 flex space-x-3">
                <CyberButton 
                  size="lg" 
                  className="flex-1 justify-center" 
                  glowing
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </CyberButton>
                
                <Link to={`/product-configure/${product.id}`}>
                  <CyberButton size="lg" variant="outline">
                    Customize
                  </CyberButton>
                </Link>
              </div>
            </div>
            
            {/* Secondary Actions */}
            <div className="flex space-x-6 text-white/60">
              <button className="flex items-center hover:text-neon-pink transition-colors">
                <Heart size={18} className="mr-1" />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center hover:text-neon-blue transition-colors">
                <Share2 size={18} className="mr-1" />
                <span>Share</span>
              </button>
            </div>
            
            {/* Product Status */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="flex space-x-6">
                <div className="flex items-center text-white/80">
                  <div className="w-2 h-2 rounded-full bg-neon-blue mr-2" />
                  <span>{product.stockStatus}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Shield size={16} className="mr-2 text-neon-blue" />
                  <span>Secure Transaction</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Zap size={16} className="mr-2 text-neon-blue" />
                  <span>{product.installationTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">
              <GlitchText text="ENHANCEMENT FEATURES" />
            </h2>
            
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex">
                  <div className="text-neon-blue mr-3">
                    <Check size={20} />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-glass p-6 border border-neon-blue/20 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Technical Specifications</h3>
            
            <div className="space-y-4">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-white/60">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-start">
                <div className="text-yellow-500">
                  <AlertTriangle size={20} />
                </div>
                <p className="ml-3 text-white/60 text-sm">
                  Installation must be performed by a certified CYBERTECH technician. Unauthorized installation will void warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <GlitchText text="RELATED ENHANCEMENTS" />
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for related products */}
            <div className="h-64 neo-glass rounded-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/30">Related Product 1</span>
            </div>
            <div className="h-64 neo-glass rounded-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/30">Related Product 2</span>
            </div>
            <div className="h-64 neo-glass rounded-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/30">Related Product 3</span>
            </div>
            <div className="h-64 neo-glass rounded-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/30">Related Product 4</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductView;
