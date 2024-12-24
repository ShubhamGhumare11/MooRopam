import React, { useState } from 'react';
import { useCart } from './CartContext';
import ProgressBar from './ProgressBar';
import LoginForm from './LoginForm';
import PhoneOtpForm from './PhoneOtpForm'; // Import the merged PhoneOtpForm
import AddressForm from './AddressForm';
import OrderSummary from './OrderSummary';
import axios from 'axios';

const CheckoutPage = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({ name: '', address: '', city: '', state: '', zip: '' });

  // Calculate cart total
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  // Define the initiatePayment function
  const initiatePayment = async (paymentData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/process",
        paymentData
      );
      return response.data; // Server response with success or failure
    } catch (error) {
      console.error("Error initiating payment:", error);
      throw new Error("Payment failed. Please try again later.");
    }
  };

  // Handle form submissions for each step
  const handleSubmit = (step) => {
    switch (step) {
      case "email":
        setCurrentStep(2); // Move to phone step after email
        break;

      case "phone":
        setCurrentStep(3); // Move to OTP verification
        break;

      case "address":
        setCurrentStep(4); // Move to order summary
        break;
      default:
        break;
    }
  };

  // Handle OTP verified callback and move to the next step
  const handleOtpVerified = () => {
    setCurrentStep(3); // Move to address form after OTP verification
  };

  // Render the correct form based on the current step
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <LoginForm email={email} setEmail={setEmail} handleSubmit={() => handleSubmit('email')} />;
      case 2:
        return (
          <PhoneOtpForm
            phone={phone}
            setPhone={setPhone}
            onOtpVerified={handleOtpVerified}
          />
        );
      case 3:
        return <AddressForm address={address} setAddress={setAddress} handleSubmit={() => handleSubmit('address')} />;
      case 4:
        return <OrderSummary cart={cart} calculateTotal={calculateTotal} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Checkout
      </h1>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          {['Email', 'Phone Verification', 'Delivery Address', 'Order Summary'].map((step, index) => (
            <div
              key={index}
              onClick={() => setCurrentStep(index + 1)} // Allow clicking back to previous steps
              className={`cursor-pointer p-4 border mb-4 rounded-lg ${
                currentStep >= index + 1
                  ? "border-blue-500"
                  : "border-gray-300"
              } hover:shadow-lg transition-all`}
            >
              <h2 className="text-lg font-semibold">
                {index + 1}. {step}
              </h2>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/4">{renderFormStep()}</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
