import React, { useState } from 'react';
import axios from 'axios';

const PhoneOtpForm = ({ phone, setPhone, onOtpVerified }) => {
  const [phoneInput, setPhoneInput] = useState(phone || ''); // Use phone prop if available
  const [otpInput, setOtpInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpMode, setOtpMode] = useState(false); // Toggle between Phone and OTP form

  // Handle phone number input change
  const handlePhoneChange = (e) => {
    setPhoneInput(e.target.value);
    setMessage(''); // Clear any previous messages
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setOtpInput(value);
      setMessage(''); // Clear any previous messages
    }
  };

  // Handle phone form submission
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneInput)) {
      setMessage('Invalid phone number. Please enter a valid 10-digit number.');
      return;
    }

    setLoading(true);
    try {
      // Update the API endpoint to use the correct one for sending OTP
      const response = await axios.post('http://localhost:5000/api/otp/send', { phoneNumber: phoneInput });
      
      if (response.status === 200) {
        setMessage('OTP sent successfully!');
        setPhone(phoneInput); // Pass phone number to parent component
        setOtpMode(true); // Switch to OTP form
      } else {
        setMessage('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP form submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otpInput.length !== 6) {
      setMessage('Please enter a valid 6-digit OTP.');
      return;
    }

    const otpInputTrimmed = otpInput.trim(); // Trim any spaces
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/otp/verify', { phoneNumber: phone, otp: otpInputTrimmed });
      
      if (response.status === 200) {
        setMessage('OTP verified successfully!');
        if (onOtpVerified) {
          onOtpVerified(); // Callback to handle OTP success and move to next step
        }
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{otpMode ? 'Enter OTP' : 'Phone Verification'}</h2>
      <form onSubmit={otpMode ? handleOtpSubmit : handlePhoneSubmit}>
        {!otpMode ? (
          <>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phoneInput}
                onChange={handlePhoneChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white py-2 rounded hover:bg-blue-600 transition duration-300`}
            >
              {loading ? 'Sending...' : 'Generate OTP'}
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">OTP</label>
              <input
                type="text"
                id="otp"
                value={otpInput}
                onChange={handleOtpChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
                placeholder="Enter the 6-digit OTP"
                maxLength="6"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || otpInput.length !== 6}
              className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 rounded transition duration-300`}
            >
              {loading ? 'Verifying...' : 'Verify & Login'}
            </button>
          </>
        )}
        {message && (
          <p className={`text-sm ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default PhoneOtpForm;
