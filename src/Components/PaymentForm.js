import React from 'react';

const PaymentForm = ({ paymentMethod, setPaymentMethod, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'payment')} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
      <div className="space-y-3">
        <div>
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="Credit/Debit Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="card" className="text-gray-700">Credit/Debit Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="upi" className="text-gray-700">UPI</label>
        </div>
        <div>
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="Cash on Delivery"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
      >
        Confirm Payment
      </button>
    </form>
  );
};

export default PaymentForm;
