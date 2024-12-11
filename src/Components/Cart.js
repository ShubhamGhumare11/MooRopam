import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Updated import

const Cart = () => {
  const { cart, dispatch } = useCart(); // Access cart and dispatch from CartContext

  const updateQuantity = (id, increment) => {
    const item = cart.find((item) => item.id === id);
    const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + item.quantity * parseFloat(item.price.replace(/[^\d.-]/g, '')),
        0
      )
      .toFixed(2);
  };

  return (
    <div className="p-4 md:p-8 lg:p-16">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Item</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Subtotal</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2 flex items-center space-x-2">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <span>{item.name}</span>
                    </td>
                    <td className="border px-4 py-2 text-center">Rs. {item.price}</td>
                    <td className="border px-4 py-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, false)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, true)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      Rs. {(parseFloat(item.price.replace(/[^\d.-]/g, '')) * item.quantity).toFixed(2)}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Price Section */}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">Total: Rs. {calculateTotal()}</h3>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-right">
            <Link to="/checkout" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
