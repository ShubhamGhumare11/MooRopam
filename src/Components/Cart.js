import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleIncreaseQuantity = (productId) => {
    updateQuantity(productId, 'increase');
  };

  const handleDecreaseQuantity = (productId) => {
    updateQuantity(productId, 'decrease');
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-semibold text-center mb-8 text-black">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="space-y-8">
          {cart.map((product) => (
            <div key={product.id} className="flex p-6 border bg-white rounded-lg shadow-lg items-center space-x-8 hover:shadow-xl">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>

              {/* Product Description */}
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-black">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              </div>

              {/* Right Section: Quantity & Price */}
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-4">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded-full"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg">Quantity: {product.quantity}</span>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded-full"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-lg text-gray-800 mt-2">
                  Rs. {product.price * product.quantity}
                </p>
                <button
                  className="text-red-500 hover:text-red-700 mt-2"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Actions */}
          <div className="flex justify-between items-center mt-8">
            <button
              className="text-red-500 hover:text-red-700 font-semibold"
              onClick={clearCart}
            >
              Clear All
            </button>
            <div className="text-right">
              <p className="font-semibold text-2xl text-black">Total: Rs. {totalPrice}</p>
              <button
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => alert('Proceeding to checkout...')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
