import React from 'react';

const AddressForm = ({ address, setAddress, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'address')} className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Address"
          value={address.address}
          onChange={(e) => setAddress({ ...address, address: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="City"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="State"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="ZIP Code"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
      >
        Next
      </button>
    </form>
  );
};

export default AddressForm;
