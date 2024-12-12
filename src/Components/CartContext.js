// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartContext Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Update quantity if product already exists in the cart
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add product to cart if not already in cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update the quantity of a specific product
  const updateQuantity = (productId, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        const updatedQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return updatedQuantity > 0 ? { ...item, quantity: updatedQuantity } : item;
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    setCart,
    handleAddToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
