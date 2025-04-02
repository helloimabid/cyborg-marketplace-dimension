
import { useState } from 'react';
import { Eye, EyeOff, ChevronRight, UserPlus, LogIn, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import CyberButton from '@/components/CyberButton';
import GlitchText from '@/components/GlitchText';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

// Test login credentials
const TEST_EMAIL = 'user@cybertech.future';
const TEST_PASSWORD = 'cyberpass2100';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (isSignIn) {
      // Validate test credentials
      if (email === TEST_EMAIL && password === TEST_PASSWORD) {
        // Store authentication state
        localStorage.setItem('cybertech_user', JSON.stringify({ email }));
        
        toast({
          title: "Login successful",
          description: "Welcome back to CYBERTECH neural systems.",
        });
        
        // Navigate to profile
        navigate('/profile');
      } else {
        setError('Invalid neural credentials. Use test credentials: user@cybertech.future / cyberpass2100');
      }
    } else {
      // Simulate signup (in a real app, this would create an account)
      localStorage.setItem('cybertech_user', JSON.stringify({ email }));
      
      toast({
        title: "Account created",
        description: "Your neural account has been successfully initialized.",
      });
      
      navigate('/profile');
    }
  };
  
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="neo-glass p-8 border border-neon-blue/30 rounded-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">
                <GlitchText text={isSignIn ? "NEURAL LOGIN" : "CREATE ACCOUNT"} />
              </h1>
              <p className="text-white/60 mt-2">
                {isSignIn 
                  ? "Access your enhancement dashboard" 
                  : "Join the evolution of humanity"}
              </p>
              
              {isSignIn && (
                <div className="mt-4 p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-sm text-xs text-white/70">
                  <strong>Test Credentials:</strong><br />
                  Email: {TEST_EMAIL}<br />
                  Password: {TEST_PASSWORD}
                </div>
              )}
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-md flex items-start">
                <AlertCircle size={18} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-white/80 text-sm">{error}</p>
              </div>
            )}
            
            {/* Tabs */}
            <div className="flex mb-8">
              <button 
                className={cn(
                  "flex-1 py-3 text-center relative transition-colors",
                  isSignIn 
                    ? "text-neon-blue" 
                    : "text-white/50 hover:text-white/80"
                )}
                onClick={() => setIsSignIn(true)}
              >
                <span className="flex justify-center items-center">
                  <LogIn size={16} className="mr-2" />
                  Sign In
                </span>
                {isSignIn && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue" />
                )}
              </button>
              
              <button 
                className={cn(
                  "flex-1 py-3 text-center relative transition-colors",
                  !isSignIn 
                    ? "text-neon-blue" 
                    : "text-white/50 hover:text-white/80"
                )}
                onClick={() => setIsSignIn(false)}
              >
                <span className="flex justify-center items-center">
                  <UserPlus size={16} className="mr-2" />
                  Sign Up
                </span>
                {!isSignIn && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue" />
                )}
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-white/80 mb-2 text-sm">Neural ID / Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSignIn ? "Enter your Neural ID" : "Register a new Neural ID"}
                  className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                />
              </div>
              
              {/* Name Fields - Only for Sign Up */}
              {!isSignIn && (
                <div className="grid grid-cols-2 gap-4 mb-6">
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
              )}
              
              {/* Password Field */}
              <div className="mb-6">
                <label className="block text-white/80 mb-2 text-sm">Neural Key / Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your neural key"
                    className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white/60 hover:text-neon-blue transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              {/* Confirm Password - Only for Sign Up */}
              {!isSignIn && (
                <div className="mb-6">
                  <label className="block text-white/80 mb-2 text-sm">Confirm Neural Key</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      placeholder="Confirm your neural key"
                      className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
                    />
                  </div>
                </div>
              )}
              
              {/* Remember Me / Forgot Password - Only for Sign In */}
              {isSignIn && (
                <div className="flex justify-between mb-8 text-sm">
                  <label className="flex items-center text-white/70 cursor-pointer">
                    <input type="checkbox" className="mr-2 h-4 w-4 accent-neon-blue bg-white/5" />
                    Remember me
                  </label>
                  <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors">
                    Forgot Neural Key?
                  </a>
                </div>
              )}
              
              {/* Terms Agreement - Only for Sign Up */}
              {!isSignIn && (
                <div className="mb-6">
                  <label className="flex items-start text-white/70 cursor-pointer">
                    <input type="checkbox" required className="mt-1 mr-2 h-4 w-4 accent-neon-blue bg-white/5" />
                    <span className="text-sm">
                      I agree to the <a href="#" className="text-neon-blue hover:underline">Terms of Service</a> and <a href="#" className="text-neon-blue hover:underline">Cybernetic Enhancement Agreement</a>
                    </span>
                  </label>
                </div>
              )}
              
              {/* Submit Button */}
              <CyberButton type="submit" className="w-full justify-center" glowing>
                {isSignIn ? "Access Neural Interface" : "Initialize Neural Account"}
                <ChevronRight size={16} className="ml-1" />
              </CyberButton>
            </form>
            
            {/* Alternative Action */}
            <div className="mt-8 text-center text-white/60 text-sm">
              {isSignIn ? (
                <p>
                  Don't have a neural account?{" "}
                  <button 
                    onClick={() => setIsSignIn(false)}
                    className="text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    Register now
                  </button>
                </p>
              ) : (
                <p>
                  Already enhanced?{" "}
                  <button 
                    onClick={() => setIsSignIn(true)}
                    className="text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    Sign in to your neural interface
                  </button>
                </p>
              )}
            </div>
          </div>
          
          {/* Security Notice */}
          <div className="mt-6 text-center text-white/40 text-xs">
            <p>Secured with quantum-resistant cryptography. All neural interactions are end-to-end encrypted.</p>
            <p className="mt-2">© 2100 CYBERTECH. All neural pathways reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
