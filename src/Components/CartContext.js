import React, { createContext, useReducer, useContext, useEffect } from "react";

// Create the CartContext
const CartContext = createContext();

// Define initial state
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
};

// Define reducer to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART": // New action to clear the cart
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

// Create CartProvider component to wrap your app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const value = { cart: state.cart, dispatch };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
