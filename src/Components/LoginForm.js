import React from 'react';

const LoginForm = ({ email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'email')} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Enter Your Email</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
    </form>
  );
};

export default LoginForm;
