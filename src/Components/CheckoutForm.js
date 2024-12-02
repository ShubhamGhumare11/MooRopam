import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cuid from 'cuid';
import { orderConfirmForUserEmailTemplate, orderConfirmForAdminEmailTemplate, sendEmailWithAttachmentforAdminOrderConfirm, sendEmailWithAttachmentforOrderConfirm } from '../Email-service/emailSendingService';

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let { productName, price } = location.state || {};
  if (!productName) {
    productName = "test";
  }
  if (!price) {
    price = 1000;
  }
  const newCuid = cuid();
  const shortCuid = `${newCuid.substring(0, 4)}${newCuid.slice(-5)}`;  // First 4 and last 5 characters
  const formattedInvoiceId = `INV-${shortCuid.toUpperCase()}`;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    state: '',
    pincode: '',
  });
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();


    const emptyFields = Object.entries(formData).filter(([key, value]) => !value);

    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.map(([key]) => key.charAt(0).toUpperCase() + key.slice(1)).join(', ')}`);
      return;
    }

    if (!isConfirmed) {
      alert('Please confirm that all information is correct.');
      return;
    }

    const dataToSend = {
      ...formData,
      invoiceId: formattedInvoiceId,
      productName,
      price,
      date: formattedDate,
    };

    navigate('/orderreceived', { state: { data: dataToSend } });

    const htmlEmailFormat =
      orderConfirmForUserEmailTemplate({ address: formData.address, city: formData.city, country: formData.country, date: formattedDate, firstName: formData.firstName, invoiceId: formattedInvoiceId, lastName: formData.lastName, phone: formData.phone, pincode: formData.pincode, price: price, productName: productName, state: formData.state });
    await sendEmailWithAttachmentforOrderConfirm({ htmlEmailFormat: htmlEmailFormat, userName: `${formData.firstName} ${formData.lastName}`, userEmail: formData.email })

    const htmlEmailFormatforAdminOrder =
      orderConfirmForAdminEmailTemplate({ address: formData.address, city: formData.city, country: formData.country, date: formattedDate, firstName: formData.firstName, invoiceId: formattedInvoiceId, lastName: formData.lastName, phone: formData.phone, pincode: formData.pincode, price: price, productName: productName, state: formData.state });
    await sendEmailWithAttachmentforAdminOrderConfirm({ htmlEmailFormat: htmlEmailFormatforAdminOrder })


    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      country: '',
      city: '',
      state: '',
      pincode: '',
    });
    setIsConfirmed(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600 font-serif">Checkout Form</h2>

      <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg p-8">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Contact Information</h3>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input

                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
              />
              <p className="mt-2 text-sm text-gray-800 text-center">
                We'll use this email to send you details and updates about your order.
              </p>
            </div>

            {/* Step 2: Billing Address */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Billing Address</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter the billing address that matches your payment method.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-100"
                  />
                </div>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="confirm"
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
                className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                required
              />
              <label htmlFor="confirm" className="ml-2 text-sm text-gray-700">
                I confirm that all information is correct.
              </label>
            </div>
          </form>
        </div>

        {/* Right Side: Payment Options and Order Summary */}
        <div className="w-full md:w-1/3 pl-0 md:pl-4">
          {/* Step 3: Payment Options */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Payment Options</h3>

            {/* Payment Instructions */}
            <div className="flex flex-col mb-4">
              <div className="w-full mb-6">
                <p className="text-sm text-gray-700 font-semibold mb-2">Direct Bank Transfer</p>
                <p className="text-sm text-gray-600 mb-4">Please follow the steps to complete the payment:</p>
                <ol className="list-decimal list-inside text-sm text-gray-600 mb-4">
                  <li className="mb-1">Make your payment directly into our bank account below.</li>
                  <li className="mb-1">Use your Order ID as the reference.</li>
                  <li className="mb-1">Share the screenshot on email and number 8390005111.</li>
                </ol>
              </div>

              {/* Bank Details */}
              <div className="w-full">
                <h4 className="font-bold text-gray-800 mb-2">Bank Details:</h4>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold mb-2">Account Name:
                    <span className="font-bold text-indigo-600"> Sumiit Madhukar Messhram</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Bank Name:
                    <span className="font-bold text-indigo-600"> AXIS BANK, WARDHA</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Account Number:
                    <span className="font-bold text-indigo-600"> 915010033347967</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">IFSC Code:
                    <span className="font-bold text-indigo-600"> UTIB0000808</span>
                  </p>
                  <p className="text-sm font-semibold mb-2">Swift Code:
                    <span className="font-bold text-indigo-600"> AXISINBB048</span>
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Step 4: Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg   text-gray-1000 mb-4 font-serif font-bold">Order Summary</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800">Product</span>
                <span className="text-gray-800">Price</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-1000 font-bold">{productName}</span>
                <span className="text-gray-600">{price}</span>
              </div>
              <div className="border-t border-gray-300 my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Root-level Complete Order button */}
      <div className="text-center mt-8">
        <button onClick={handleSubmit} className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-500 transition duration-200">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
