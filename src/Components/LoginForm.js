import React, { useState } from 'react';

const LoginForm = ({ email, setEmail, handleSubmit }) => {
  const [error, setError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Reset the error message when email input changes
    if (validateEmail(value)) {
      setError('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    handleSubmit(e, 'email');
  };

  return (
    <form onSubmit={handleFormSubmit} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Enter Your Email</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={!validateEmail(email)}
        className={`w-full py-2 rounded transition duration-300 ${validateEmail(email) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
      >
        Next
      </button>
    </form>
  );
};

export default LoginForm;
