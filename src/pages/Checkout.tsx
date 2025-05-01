
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Shield, Clock, AlertCircle, Check, Package, MapPin, Zap, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const paymentMethods = [
  { id: 'credit', name: 'Quantum Credit', icon: <CreditCard size={20} /> },
  { id: 'crypto', name: 'NeuroCoin', icon: <Shield size={20} /> },
  { id: 'installment', name: 'Neural Financing', icon: <Clock size={20} /> }
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [billingAddress, setBillingAddress] = useState('');
  const [orderProcessed, setOrderProcessed] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState('');
  
  const { cartItems, subtotal, clearCart, removeFromCart, updateQuantity } = useCart();
  
  
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('cybertech_user') !== null;
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  
  const tax = Math.round(subtotal * 0.08);
  const shipping = shippingMethod === 'express' ? 1299 : 599;
  const total = subtotal + tax + shipping;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Add items before checkout.");
      return;
    }
    
    if (!selectedFacility) {
      toast.error("Please select an installation facility");
      return;
    }
    
    setOrderProcessed(true);
    clearCart();
    
    toast.success("Order completed successfully!");
  };
  
  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    toast.info("Item removed from cart");
  };
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center text-sm text-white/60">
          <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products" className="hover:text-neon-blue transition-colors">Products</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white/80">Checkout</span>
        </div>
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <GlitchText text="SECURE CHECKOUT" />
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Complete your order with our quantum-secured payment system
          </p>
        </div>
        
        {orderProcessed ? (
          <div className="max-w-2xl mx-auto neo-glass rounded-lg border border-neon-blue/30 p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mb-6">
              <Check size={32} />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gradient">Order Confirmed</h2>
            <p className="text-white/80 mb-6">
              Your enhancement package has been processed successfully. You'll receive a neural confirmation shortly.
            </p>
            
            <div className="p-6 bg-white/5 rounded-md mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-white/60">Order Number:</span>
                <span className="text-white font-mono">#NEO-28754-93X</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-white/60">Total Amount:</span>
                <span className="text-neon-blue font-medium">¤ {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Estimated Installation:</span>
                <span className="text-white">June 15, 2100</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Link to="/">
                <CyberButton variant="outline">
                  Return to Home
                </CyberButton>
              </Link>
              <Link to="/products">
                <CyberButton>
                  Continue Shopping
                </CyberButton>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="neo-glass rounded-lg border border-neon-blue/20 p-6 sticky top-32">
                <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
                
                {cartItems.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-white/60 mb-4">Your cart is empty</p>
                    <Link to="/products">
                      <CyberButton variant="outline">
                        Browse Products
                      </CyberButton>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6 mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-white font-medium">{item.name}</h3>
                            <p className="text-white/60 text-xs">{item.configuration}</p>
                            <div className="flex justify-between mt-1">
                              <span className="text-neon-blue">¤ {item.price.toLocaleString()}</span>
                              <div className="flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="text-xs px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded-l-sm border-r border-white/10"
                                >
                                  -
                                </button>
                                <span className="text-white/60 px-2">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="text-xs px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded-r-sm"
                                >
                                  +
                                </button>
                                <button 
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                                  title="Remove item"
                                >
                                  <Trash size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 py-4 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-white/60">Subtotal</span>
                        <span className="text-white">¤ {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Neural Tax</span>
                        <span className="text-white">¤ {tax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Shipping</span>
                        <span className="text-white">¤ {shipping.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4 border-t border-white/10 mb-6">
                      <span className="text-white font-medium">Total</span>
                      <span className="text-neon-blue font-bold text-xl">¤ {total.toLocaleString()}</span>
                    </div>
                    
                    <div className="p-4 bg-neon-blue/10 rounded-md">
                      <div className="flex items-start">
                        <AlertCircle size={18} className="text-neon-blue flex-shrink-0 mt-0.5" />
                        <p className="ml-3 text-white/80 text-sm">
                          Neural enhancement packages require in-person installation at a CYBERTECH facility.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <form onSubmit={handleSubmit}>
                <div className="neo-glass rounded-lg border border-neon-blue/20 p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Payment Method</h2>
                  
                  <div className="space-y-4 mb-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={cn(
                          "w-full flex items-center p-4 rounded-md border transition-all",
                          paymentMethod === method.id
                            ? "border-neon-blue bg-neon-blue/10"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        )}
                      >
                        <div className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                          paymentMethod === method.id
                            ? "border-neon-blue"
                            : "border-white/40"
                        )}>
                          {paymentMethod === method.id && (
                            <div className="w-3 h-3 rounded-full bg-neon-blue" />
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-10 h-10 rounded-md bg-neon-blue/20 text-neon-blue mr-3">
                            {method.icon}
                          </span>
                          <span className="text-white">{method.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {paymentMethod === 'credit' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">Cardholder Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">Card Number</label>
                          <input 
                            type="text" 
                            required
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="col-span-1">
                          <label className="block text-white/80 mb-2 text-sm">Expiry Month</label>
                          <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass">
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/80 border border-neon-blue/30 text-white backdrop-blur-md">
                              {Array.from({ length: 12 }, (_, i) => (
                                <SelectItem key={i} value={(i + 1).toString()}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-1">
                          <label className="block text-white/80 mb-2 text-sm">Expiry Year</label>
                          <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/80 border border-neon-blue/30 text-white backdrop-blur-md">
                              {Array.from({ length: 10 }, (_, i) => (
                                <SelectItem key={i} value={(2100 + i).toString()}>
                                  {2100 + i}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-white/80 mb-2 text-sm">CVV</label>
                          <input 
                            type="text" 
                            required
                            placeholder="XXX"
                            className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <input type="checkbox" required className="mr-2 h-4 w-4 accent-neon-blue bg-white/5" />
                        <label className="text-white/70 text-sm">
                          Save payment method for future neural transactions
                        </label>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'crypto' && (
                    <div className="p-6 bg-white/5 rounded-md border border-white/10">
                      <div className="text-center mb-4">
                        <div className="text-neon-blue font-medium mb-2">NeuroCoin Address</div>
                        <div className="bg-black/30 p-3 rounded-md font-mono text-white/80 select-all">
                          NC-281a-47f8-9d02-q731xt48z99f
                        </div>
                      </div>
                      <p className="text-white/60 text-sm text-center">
                        Send exactly ¤ {total.toLocaleString()} NeuroCoin to this address to complete your purchase.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'installment' && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        {[6, 12, 24].map((months) => {
                          const monthlyPayment = Math.round(total / months);
                          return (
                            <button
                              key={months}
                              type="button"
                              className="p-4 bg-white/5 rounded-md border border-white/10 flex justify-between hover:bg-white/10 transition-colors"
                            >
                              <span className="text-white">{months} Monthly Payments</span>
                              <span className="text-neon-blue">¤ {monthlyPayment.toLocaleString()}/month</span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-white/60 text-sm">
                        Financing subject to neural credit approval. Interest rates apply.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="neo-glass rounded-lg border border-neon-blue/20 p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Shipping & Installation</h2>
                  
                  <div className="space-y-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setShippingMethod('standard')}
                      className={cn(
                        "w-full flex items-center p-4 rounded-md border transition-all",
                        shippingMethod === 'standard'
                          ? "border-neon-blue bg-neon-blue/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                        shippingMethod === 'standard'
                          ? "border-neon-blue"
                          : "border-white/40"
                      )}>
                        {shippingMethod === 'standard' && (
                          <div className="w-3 h-3 rounded-full bg-neon-blue" />
                        )}
                      </div>
                      
                      <div className="flex items-center flex-1">
                        <span className="flex items-center justify-center w-10 h-10 rounded-md bg-neon-blue/20 text-neon-blue mr-3">
                          <Package size={20} />
                        </span>
                        <div>
                          <div className="text-white">Standard Installation</div>
                          <div className="text-white/60 text-sm">7-10 day appointment window</div>
                        </div>
                      </div>
                      
                      <div className="text-white">¤ 599</div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setShippingMethod('express')}
                      className={cn(
                        "w-full flex items-center p-4 rounded-md border transition-all",
                        shippingMethod === 'express'
                          ? "border-neon-blue bg-neon-blue/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                        shippingMethod === 'express'
                          ? "border-neon-blue"
                          : "border-white/40"
                      )}>
                        {shippingMethod === 'express' && (
                          <div className="w-3 h-3 rounded-full bg-neon-blue" />
                        )}
                      </div>
                      
                      <div className="flex items-center flex-1">
                        <span className="flex items-center justify-center w-10 h-10 rounded-md bg-neon-purple/20 text-neon-purple mr-3">
                          <Zap size={20} />
                        </span>
                        <div>
                          <div className="text-white">Express Installation</div>
                          <div className="text-white/60 text-sm">Priority 2-3 day appointment</div>
                        </div>
                      </div>
                      
                      <div className="text-white">¤ 1,299</div>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Installation Location</label>
                      <Select 
                        onValueChange={(value) => setSelectedFacility(value)}
                        required
                      >
                        <SelectTrigger className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass">
                          <SelectValue placeholder="Select a CYBERTECH facility" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/80 border border-neon-blue/30 text-white backdrop-blur-md">
                          <SelectItem value="neo-tokyo">Neo-Tokyo HQ</SelectItem>
                          <SelectItem value="new-shanghai">New Shanghai Center</SelectItem>
                          <SelectItem value="neo-york">Neo-York Facility</SelectItem>
                          <SelectItem value="euro-dome">European Mega-Dome</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-md border border-white/10 flex items-start">
                      <MapPin size={18} className="text-neon-blue flex-shrink-0 mt-0.5" />
                      <p className="ml-3 text-white/80 text-sm">
                        Your enhancement will be shipped to your selected CYBERTECH facility for professional installation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="neo-glass rounded-lg border border-neon-blue/20 p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Billing Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Neural ID (if available)</label>
                      <input 
                        type="text" 
                        className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Billing Address</label>
                      <textarea 
                        required
                        rows={3}
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                        className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass resize-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Link to="/products" className="text-white/60 hover:text-neon-blue transition-colors">
                    <div className="flex items-center">
                      <ChevronRight size={16} className="mr-1 transform rotate-180" />
                      Return to Products
                    </div>
                  </Link>
                  
                  <CyberButton 
                    type="submit" 
                    size="lg" 
                    glowing
                    disabled={cartItems.length === 0}
                  >
                    Complete Order
                  </CyberButton>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Checkout;
