import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleContinue = () => {
    navigate('/orders'); // Redirect to the orders or home page (or any other page)
  };

  return (
    <div className="p-6 bg-green-100 border border-green-400 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Payment Successful</h2>
      <p className="text-gray-700 mb-6">Thank you for your payment. Your order has been successfully placed!</p>
      <button
        onClick={handleContinue}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
      >
        Continue to Orders
      </button>
    </div>
  );
};

export default PaymentSuccess;
