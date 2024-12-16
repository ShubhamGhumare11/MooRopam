import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaRegBookmark } from 'react-icons/fa'; // Import trash and discount icon

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedEMI, setSelectedEMI] = useState(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleEMISelection = (option) => {
    setSelectedEMI(option);
    setDropdownOpen(false);
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

  const handleDeleteAll = () => {
    dispatch({ type: 'CLEAR_CART' }); // Assuming a 'CLEAR_CART' action exists
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Shopping Cart</h1>
            {cart.length === 0 ? (
              <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 mb-4 items-center"
                >
                  <div className="w-full md:w-1/4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                  </div>

                  <div className="flex-1 px-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <ul className="text-sm text-gray-700 mt-2">
                      <li>✔ Free Shipping</li>
                      <li>✔ Discount Available</li>
                      <li>✔ In-stock Seller</li>
                    </ul>
                    <p className="text-green-500 font-semibold mt-2">In Stock</p>
                    <div className="flex items-center mt-2 text-gray-700">
                      <FaRegBookmark className="text-yellow-500 mr-2" />
                      <p className="font-semibold">Discount Applied</p>
                    </div>
                    <p className="text-gray-700 mt-2">Seller: Mooropan</p>
                    <p className="text-gray-800 font-semibold mt-2">
                      Price: ₹{product.price}
                    </p>
                  </div>

                  <div className="w-full md:w-1/4 text-right">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="font-semibold text-gray-800">
                        {product.quantity}
                      </span>
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
                      className="text-red-500 hover:underline mt-2 flex items-center justify-end"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <FaTrash className="mr-2" /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-4 my-14">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                Cart Summary
              </h2>
              <p className="text-gray-800 font-semibold">
                Subtotal ({cart.length} items):{' '}
                <span className="text-xl text-red-500">₹{totalPrice}</span>
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
                  >
                    {selectedEMI
                      ? `Selected: ${selectedEMI}`
                      : 'EMI Options Available'}
                    <span className="ml-2">{isDropdownOpen ? '▲' : '▼'}</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute bg-white shadow rounded mt-2 w-full z-10">
                      {['6 Months EMI', '12 Months EMI', '24 Months EMI'].map(
                        (option) => (
                          <li
                            key={option}
                            className="px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleEMISelection(option)}
                          >
                            {option}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleDeleteAll}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Delete All
              </button>
            </div>
            <div className="mt-4">
              <Link to="/services">
                <button className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-600">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
