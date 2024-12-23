import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleRetry = () => {
    navigate('/payment'); // Redirect to the payment page (or any other page)
  };

  return (
    <div className="p-6 bg-red-100 border border-red-400 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-red-700 mb-4">Payment Failed</h2>
      <p className="text-gray-700 mb-6">Unfortunately, your payment could not be processed. Please try again.</p>
      <button
        onClick={handleRetry}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
      >
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFailure;
