import React from 'react';

const OtpForm = ({ otp, setOtp, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'otp')} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
      <div className="mb-4">
        <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">OTP</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
          placeholder="Enter the OTP"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Verify & Login
      </button>
    </form>
  );
};

export default OtpForm;
