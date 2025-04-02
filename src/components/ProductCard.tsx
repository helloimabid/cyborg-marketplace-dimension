
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ id, name, category, price, imageSrc, description }) => {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    
    addToCart({
      id,
      name,
      configuration: category,
      price,
      image: imageSrc,
    });
    
    toast.success(`${name} added to cart`, {
      description: "Item added to your cart",
    });
  };
  
  return (
    <Link
      to={`/product/${id}`}
      className={cn(
        "neo-glass group relative rounded-lg p-4 overflow-hidden flex flex-col h-full transition-all duration-300",
        isLightMode 
          ? "border border-gray-200 hover:border-neon-blue/50 shadow-sm hover:shadow-md" 
          : "border border-white/10 hover:border-neon-blue/30"
      )}
    >
      <div className="aspect-w-3 aspect-h-2 mb-4 overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <h3 className={cn(
        "text-lg font-medium mb-2 group-hover:text-neon-blue transition-colors duration-300",
        isLightMode ? "text-gray-800" : "text-white"
      )}>
        {name}
      </h3>
      
      <p className={cn(
        "text-sm flex-grow",
        isLightMode ? "text-gray-700" : "text-white/60"
      )}>
        {description}
      </p>
      
      <div className="mt-auto pt-4 flex justify-between items-center">
        <div className="text-neon-blue font-bold">
          ¤ {price.toLocaleString()}
        </div>
        
        <button
          onClick={handleAddToCart}
          className={cn(
            "rounded-full p-2 transition-colors text-neon-blue",
            isLightMode ? "bg-neon-blue/5 hover:bg-neon-blue/15" : "bg-neon-blue/10 hover:bg-neon-blue/20"
          )}
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      
      <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/60" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-neon-blue/60" />
      </div>
    </Link>
  );
};

export default ProductCard;
