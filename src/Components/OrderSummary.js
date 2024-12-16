import React from 'react';

const OrderSummary = ({ cart, calculateTotal, handleSubmit }) => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <span className="font-semibold text-gray-800">{item.name}</span>
            </div>
            <div className="text-center">
              <span className="text-gray-700">Qty: {item.quantity}</span>
            </div>
            <div className="text-center">
              <span className="text-gray-700">${item.price}</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-blue-500">${(item.quantity * item.price).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <p className="font-semibold text-xl text-gray-800">Total: <span className="text-blue-600">${calculateTotal()}</span></p>
      </div>
      <button
        onClick={() => handleSubmit('payment')}
        className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300 mt-6"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
