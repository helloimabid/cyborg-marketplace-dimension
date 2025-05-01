import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  totalItems: number;
    addToCart: (item: { id: string; name: string; configuration: string; price: number; image: string }) => void;
    cartItems: Array<{ id: string; name: string; price: number; quantity: number; image?: string; configuration?: string }>;
  subtotal: number;
 
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cybertech_cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setItems(parsedCart);
      
      // Calculate total items
      const count = parsedCart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
      setTotalItems(count);
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cybertech_cart', JSON.stringify(items));
    
    // Update total items count
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(count);
  }, [items]);
  
  // Add item to cart
  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...currentItems, item];
      }
    });
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };
  
  // Increase item quantity
  const increaseQuantity = (id: string) => {
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };
  
  // Clear cart
  const clearCart = () => {
    setItems([]);
  };
  
  // Get total number of items
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };
  
  // Get total price
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Add to cart with specific configuration
  const addToCart = (item: { id: string; name: string; configuration: string; price: number; image: string }) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      totalItems,
      addToCart,
      cartItems: items,
      subtotal: getTotalPrice(),
      removeFromCart: removeItem,
      updateQuantity: (id: string, quantity: number) => {
        setItems(currentItems =>
          currentItems.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        );
      }
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
