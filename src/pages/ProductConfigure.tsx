
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Brain, Eye, Heart, Hand, Zap, Shield, AlertTriangle, Check, Info, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';

// Simulated product base data
const baseProduct = {
  id: '1',
  name: 'NeuroCortex X9',
  category: 'Neural Interface',
  basePrice: 25999,
  image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop',
};

// Configuration options
const configOptions = {
  processingPower: [
    { id: 'standard', name: 'Standard', description: '300% cognitive enhancement', price: 0 },
    { id: 'advanced', name: 'Advanced', description: '500% cognitive enhancement', price: 8999 },
    { id: 'elite', name: 'Elite', description: '750% cognitive enhancement', price: 15999 }
  ],
  storage: [
    { id: 'base', name: '10TB', description: 'Standard neural storage', price: 0 },
    { id: 'extended', name: '25TB', description: 'Extended neural storage', price: 5999 },
    { id: 'unlimited', name: '50TB', description: 'Maximum neural storage', price: 12499 }
  ],
  interface: [
    { id: 'direct', name: 'Direct Neural', description: 'Standard neural connection', price: 0 },
    { id: 'quantum', name: 'Quantum Link', description: 'Faster neural response time', price: 7899 },
    { id: 'holographic', name: 'Holographic', description: 'Visual interface projection', price: 9999 }
  ],
  security: [
    { id: 'standard', name: 'Standard', description: 'Basic neural firewall', price: 0 },
    { id: 'enhanced', name: 'Enhanced', description: 'Advanced neural protection', price: 3599 },
    { id: 'military', name: 'Military Grade', description: 'Maximum neural security', price: 8999 }
  ],
  warranty: [
    { id: 'standard', name: 'Standard', description: '10-year warranty', price: 0 },
    { id: 'extended', name: 'Extended', description: '25-year warranty', price: 2999 },
    { id: 'lifetime', name: 'Lifetime', description: 'Full lifetime coverage', price: 7499 }
  ]
};

const ProductConfigure = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(baseProduct);
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState({
    processingPower: 'standard',
    storage: 'base',
    interface: 'direct',
    security: 'standard',
    warranty: 'standard'
  });
  const [totalPrice, setTotalPrice] = useState(baseProduct.basePrice);
  
  // Steps for configuration process
  const steps = [
    { id: 'processing', title: 'Processing Power', icon: <Brain />, options: configOptions.processingPower },
    { id: 'storage', title: 'Neural Storage', icon: <Brain />, options: configOptions.storage },
    { id: 'interface', title: 'Interface Type', icon: <Eye />, options: configOptions.interface },
    { id: 'security', title: 'Security Level', icon: <Shield />, options: configOptions.security },
    { id: 'warranty', title: 'Warranty', icon: <Zap />, options: configOptions.warranty },
    { id: 'review', title: 'Review Configuration', icon: <Info /> }
  ];
  
  // Calculate total price when configuration changes
  useEffect(() => {
    let price = baseProduct.basePrice;
    
    // Add costs for each selected option
    Object.entries(config).forEach(([key, value]) => {
      const options = configOptions[key as keyof typeof configOptions];
      if (options) {
        const selectedOption = options.find(opt => opt.id === value);
        if (selectedOption) {
          price += selectedOption.price;
        }
      }
    });
    
    setTotalPrice(price);
  }, [config]);
  
  // Handle option selection
  const handleOptionSelect = (category: string, optionId: string) => {
    setConfig(prev => ({
      ...prev,
      [category]: optionId
    }));
  };
  
  // Navigate to next step
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  // Navigate to previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  // Reset to defaults
  const handleReset = () => {
    setConfig({
      processingPower: 'standard',
      storage: 'base',
      interface: 'direct',
      security: 'standard',
      warranty: 'standard'
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
          <Link to={`/product/${productId}`} className="hover:text-neon-blue transition-colors">{product.name}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white/80">Configure</span>
        </div>
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <GlitchText text={`CONFIGURE ${product.name}`} />
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Customize your neural enhancement to match your unique requirements.
            Each choice will affect performance, capacity, and price.
          </p>
        </div>
        
        {/* Configuration Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Steps Sidebar */}
          <div className="neo-glass border border-neon-blue/20 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">Configuration Steps</h2>
            
            <div className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => index < steps.length - 1 && setCurrentStep(index)}
                  disabled={index === steps.length - 1 && currentStep !== steps.length - 1}
                  className={cn(
                    "w-full flex items-center p-3 rounded-md transition-colors",
                    currentStep === index
                      ? "bg-neon-blue/20 text-neon-blue"
                      : index < currentStep
                        ? "bg-white/5 text-white/80 hover:bg-white/10"
                        : "bg-white/5 text-white/40",
                    index === steps.length - 1 && currentStep !== steps.length - 1 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                    currentStep === index
                      ? "bg-neon-blue text-black"
                      : index < currentStep
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/60"
                  )}>
                    {index < currentStep ? <Check size={16} /> : step.icon}
                  </div>
                  <span>{step.title}</span>
                </button>
              ))}
            </div>
            
            {/* Price Summary */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/60">Base Price</span>
                <span className="text-white">¤ {product.basePrice.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/60">Upgrades</span>
                <span className="text-white">¤ {(totalPrice - product.basePrice).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="text-white font-medium">Total Price</span>
                <span className="text-neon-blue font-bold text-xl">¤ {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Reset Configuration */}
            <button
              onClick={handleReset}
              className="mt-6 w-full flex items-center justify-center py-2 text-white/60 hover:text-neon-blue transition-colors"
            >
              <RotateCcw size={16} className="mr-2" />
              Reset to defaults
            </button>
          </div>
          
          {/* Main Configuration Area */}
          <div className="lg:col-span-2 neo-glass border border-neon-blue/20 rounded-lg p-6">
            {currentStep < steps.length - 1 ? (
              <>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue mr-3">
                    {steps[currentStep].icon}
                  </span>
                  {steps[currentStep].title}
                </h2>
                
                <div className="space-y-4 mb-8">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(steps[currentStep].id, option.id)}
                      className={cn(
                        "w-full flex items-center justify-between p-5 rounded-md border transition-all",
                        config[steps[currentStep].id as keyof typeof config] === option.id
                          ? "border-neon-blue bg-neon-blue/10 transform-none opacity-100"
                          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center">
                        <div className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center mr-4",
                          config[steps[currentStep].id as keyof typeof config] === option.id
                            ? "border-neon-blue"
                            : "border-white/40"
                        )}>
                          {config[steps[currentStep].id as keyof typeof config] === option.id && (
                            <div className="w-3 h-3 rounded-full bg-neon-blue" />
                          )}
                        </div>
                        
                        <div className="text-left">
                          <div className="font-medium text-white">{option.name}</div>
                          <div className="text-sm text-white/60">{option.description}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {option.price > 0 ? (
                          <span className="text-neon-blue">+ ¤ {option.price.toLocaleString()}</span>
                        ) : (
                          <span className="text-white/40">Included</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              // Final Review Step
              <>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue mr-3">
                    <Info size={20} />
                  </span>
                  Review Configuration
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="aspect-square rounded-lg overflow-hidden border border-neon-blue/30">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-white/60 mb-4">Customized Neural Enhancement</p>
                    
                    <div className="space-y-3">
                      {Object.entries(config).map(([key, value]) => {
                        const category = steps.find(step => step.id === key);
                        if (!category) return null;
                        
                        const options = configOptions[key as keyof typeof configOptions];
                        if (!options) return null;
                        
                        const selectedOption = options.find(opt => opt.id === value);
                        if (!selectedOption) return null;
                        
                        return (
                          <div key={key} className="flex justify-between">
                            <span className="text-white/70">{category.title}:</span>
                            <span className="text-neon-blue font-medium">{selectedOption.name}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-medium">Final Price:</span>
                      <span className="text-neon-blue text-2xl font-bold">¤ {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md mb-8">
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="ml-3 text-white/80 text-sm">
                      By proceeding with this configuration, you acknowledge this enhancement will be custom-built to your specifications. 
                      Installation must be performed by a certified CYBERTECH technician.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link to="/checkout">
                    <CyberButton size="lg" glowing>
                      Proceed to Checkout
                    </CyberButton>
                  </Link>
                </div>
              </>
            )}
            
            {/* Navigation Buttons */}
            {currentStep < steps.length - 1 && (
              <div className="flex justify-between">
                <CyberButton 
                  onClick={handlePrevStep} 
                  variant="outline" 
                  disabled={currentStep === 0}
                  className={cn(currentStep === 0 && "opacity-50 cursor-not-allowed")}
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Previous
                </CyberButton>
                
                <CyberButton onClick={handleNextStep}>
                  {currentStep === steps.length - 2 ? "Review Configuration" : "Next"}
                  <ChevronRight size={16} className="ml-1" />
                </CyberButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductConfigure;
