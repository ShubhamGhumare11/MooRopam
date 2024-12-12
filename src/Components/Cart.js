import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedEMI, setSelectedEMI] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleEMISelection = (option) => {
    setSelectedEMI(option);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const handleIncreaseQuantity = (id) => {
    const item = cart.find((product) => product.id === id);
    if (item) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: item.quantity + 1 },
      });
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cart.find((product) => product.id === id);
    if (item && item.quantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: item.quantity - 1 },
      });
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Cart Section */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
            {cart.length === 0 ? (
              <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 mb-4 items-center"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-1/4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 px-4">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-gray-800 font-semibold mt-2">Price: ₹{product.price}</p>
                  </div>

                  {/* Quantity and Subtotal */}
                  <div className="w-full md:w-1/4 text-right">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="font-semibold text-gray-800">{product.quantity}</span>
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      Subtotal: ₹{product.price * product.quantity}
                    </p>
                    <button
                      className="text-red-500 hover:underline mt-2"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

            {/* Cart Summary */}
          <div>
          
            <div className="bg-white rounded-lg shadow p-4  ">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <p className="text-gray-800 font-semibold">
                Subtotal ({cart.length} items): <span className="text-xl text-red-500">₹{totalPrice}</span>
              </p>
              <Link
                to="/checkout"
                className="block w-full bg-yellow-500 text-white text-center py-2 mt-4 rounded hover:bg-yellow-600"
              >
                Proceed to Buy
              </Link>
              <div className="mt-4">
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded flex justify-between items-center"
                    type="button"
                  >
                    {selectedEMI ? `Selected: ${selectedEMI}` : 'EMI Options Available'}
                    <span className="ml-2">{isDropdownOpen ? '▲' : '▼'}</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute bg-white shadow rounded mt-2 w-full z-10">
                      <li
                        className="px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleEMISelection('6 Months EMI')}
                      >
                        6 Months EMI
                      </li>
                      <li
                        className="px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleEMISelection('12 Months EMI')}
                      >
                        12 Months EMI
                      </li>
                      <li
                        className="px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleEMISelection('24 Months EMI')}
                      >
                        24 Months EMI
                      </li>
                    </ul>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-600">Your order qualifies for EMI with valid credit cards.</p>
              </div>
            </div>

            {/* Other Sidebar Content */}
            <div className="bg-white rounded-lg shadow p-4 mt-6">
  <h2 className="text-xl font-semibold mb-4">Customers also bought</h2>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={() => alert('Navigating to Hero PLEASURE+ VX')}
      >
        Hero PLEASURE+ VX
      </button>
    </li>
    <li>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={() => alert('Navigating to Honda Activa 6G')}
      >
        Honda Activa 6G
      </button>
    </li>
    <li>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={() => alert('Navigating to Yamaha Fascino 125')}
      >
        Yamaha Fascino 125
      </button>
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
