import React from 'react';

const PhoneForm = ({ phone, setPhone, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'phone')} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Phone Verification</h2>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your phone number"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Generate OTP
      </button>
    </form>
  );
};

export default PhoneForm;
